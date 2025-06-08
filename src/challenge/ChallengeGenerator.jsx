import React, { useState, useEffect, useCallback } from "react";
import { MCQChallenge } from "./MCQChallenge.jsx";
import { useApi } from "../utils/api.js";
import { toast } from "react-toastify";
import { FiZap, FiClock } from "react-icons/fi";
import Loader from "../components/Loader.jsx";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { playSound } from "../utils/audio";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import debounce from 'lodash/debounce';

const CONGRATS_SOUND_URL = 'https://res.cloudinary.com/dppx4dm9a/video/upload/v1748484190/congrats_wcm0mq.mp3';

const categories = [
    "Computer Programming", "Indian History", "World History", "Indian Polity",
    "Economics", "Geography", "Business Administration", "Public Administration",
    "Physics", "Chemistry", "Biology", "Quantitative Aptitude", "General Knowledge",
    "Environment", "Philosophy", "Sociology", "Anthropology", "Psychology"
];

const getTodayDateString = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
};

export function ChallengeGenerator() {
    const [challenge, setChallenge] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [difficulty, setDifficulty] = useState("easy");
    const [category, setCategory] = useState("Computer Programming");
    const [quota, setQuota] = useState({ quota_remaining: 10, score: 0 });
    const { makeRequest } = useApi();
    const [totalChallengesPlayed, setTotalChallengesPlayed] = useState(0);
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();
    const [hasCelebratedToday, setHasCelebratedToday] = useState(false);

    useEffect(() => {
        const today = getTodayDateString();
        const storedTotal = localStorage.getItem(`quizzy_total_${today}`);
        const storedCelebrated = localStorage.getItem(`quizzy_celebrated_${today}`);

        if (storedTotal) {
            setTotalChallengesPlayed(parseInt(storedTotal, 10));
        }

        if (storedCelebrated) {
            setHasCelebratedToday(storedCelebrated === "true");
        }

        const lastAccessDate = localStorage.getItem('quizzy_last_access_date');
        if (lastAccessDate && lastAccessDate !== today) {
            localStorage.removeItem(`quizzy_total_${lastAccessDate}`);
            localStorage.removeItem(`quizzy_celebrated_${lastAccessDate}`);
            setTotalChallengesPlayed(0);
            setHasCelebratedToday(false);
        }
        localStorage.setItem('quizzy_last_access_date', today);
    }, []);

    useEffect(() => {
        const today = getTodayDateString();
        localStorage.setItem(`quizzy_total_${today}`, totalChallengesPlayed.toString());
        localStorage.setItem(`quizzy_celebrated_${today}`, hasCelebratedToday.toString());
    }, [totalChallengesPlayed, hasCelebratedToday]);

    useEffect(() => {
        fetchQuota();
    }, []);

    useEffect(() => {
    if (quota.quota_remaining === 0) {
        toast.info("You've used all your quizzes for today. Come back after reset!", {
            position: "top-center",
            autoClose: 5000,
        });
    }
}, [quota.quota_remaining]);


    const fetchQuota = async () => {
        try {
            const data = await makeRequest("quota");
            console.log("Quota fetched:", data);
            setQuota({
                quota_remaining: data.quota_remaining,
                score: data.score,
                last_reset_date: data.last_reset_date,
                confetti_count: data.confetti_count,
                highest_score: data.highest_score
            });
        } catch (err) {
            console.error("Failed to fetch quota:", err.message);
            toast.error("Failed to fetch quota", { position: "top-right", autoClose: 3000 });
        }
    };

    const debouncedGenerateChallenge = useCallback(debounce(async () => {
        if (isLoading || quota.quota_remaining === 0) return;

        setIsLoading(true);
        setError(null);
        setChallenge(null);
        setShowConfetti(false);

        try {
            console.log("Generating challenge...");
            const data = await makeRequest("generate-challenge", {
                method: "POST",
                body: JSON.stringify({ difficulty, category })
            });
            console.log("Challenge generated:", data);
            setChallenge({ ...data, timeLeft: 60 }); // Reset timer to 60 seconds
            setQuota(prev => ({
                ...prev,
                quota_remaining: data.quota_remaining,
                score: data.score
            }));
        } catch (err) {
            console.error("Generate challenge error:", err.message);
            setError(err.message || "Failed to generate challenge.");
            toast.error(err.message || "Failed to generate challenge.", {
                position: 'top-right',
                autoClose: 3000,
            });
        } finally {
            setIsLoading(false);
        }
    }, 1000), [difficulty, category, isLoading, quota.quota_remaining]);

    const handleAnswer = async (isCorrect, points, newTotalChallenges, achievedConfetti) => {
        setTotalChallengesPlayed(newTotalChallenges);
        console.log("Handle answer:", { isCorrect, points, newTotalChallenges, achievedConfetti });

        try {
            const response = await makeRequest("update-score", {
                method: "POST",
                body: JSON.stringify({
                    challenge_id: challenge.id,
                    points,
                    total_challenges: newTotalChallenges,
                    achieved_confetti: achievedConfetti,
                    user_answer_id: challenge.user_answer_id
                })
            });
            console.log("Update score response:", response);
            setQuota(prev => ({
                ...prev,
                quota_remaining: response.quota_remaining,
                score: response.score,
                confetti_count: response.confetti_count,
                highest_score: response.highest_score
            }));

            if (!hasCelebratedToday && newTotalChallenges >= 10 && response.score >= 75) {
                setShowConfetti(true);
                playSound(CONGRATS_SOUND_URL);
                setHasCelebratedToday(true);
                setTimeout(() => setShowConfetti(false), 10000);
            }
        } catch (err) {
            console.error("Failed to update score:", err.message);
            toast.error(err.message, { position: "top-right", autoClose: 3000 });
        }
    };

    const getNextResetTime = () => {
        if (!quota.last_reset_date) return null;
        const resetDate = new Date(quota.last_reset_date);
        resetDate.setHours(resetDate.getHours() + 24);
        return resetDate;
    };

    return (
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300 max-w-4xl mx-auto">
            {showConfetti && <Confetti width={width} height={height} numberOfPieces={200} recycle={false} />}
            <h2 className="text-xl text-center justify-center font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <FiZap />
                Let's Play Quizzy
            </h2>
            <p className="text-center text-xl sm:text-2xl font-bold text-pink-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent animate-pulse drop-shadow-md">
                Score 75% each day to unlock a confetti celebration!
            </p>

            <div className="bg-gray-100 p-4 rounded-md border text-sm dark:bg-gray-700 dark:border-gray-600">
                <p className="text-gray-700 font-medium dark:text-gray-300">
                    Quizzy Remaining Today: <span className="font-bold">{quota.quota_remaining}</span>
                </p>
                {quota.quota_remaining === 0 && (
                    <p className="text-red-600 mt-1 flex items-center gap-1">
                        <FiClock />
                        Next reset: {getNextResetTime()?.toLocaleString() ?? 'Unknown'}
                    </p>
                )}
                <p className="text-gray-700 font-medium dark:text-gray-300 mt-2">
                    Your Score Today: <span className="font-bold">{quota.score} / 100</span>
                </p>
            </div>

            <Tabs>
                <TabList className="flex flex-wrap gap-2 mb-4">
                    {categories.map((cat, index) => (
                        <Tab
                            key={index}
                            className={`cursor-pointer px-4 py-2 rounded-md transition-colors ${
                                category === cat
                                ? 'bg-blue-100 border border-blue-500 text-blue-700 font-semibold'
                                : 'bg-gray-200 border border-transparent text-black hover:bg-gray-300 hover:border-gray-400 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-500'
                            }`}
                            onClick={() => setCategory(cat)}
                        >
                            {cat}
                        </Tab>
                    ))}
                </TabList>

                {categories.map((cat, index) => (
                    <TabPanel key={index}>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="difficulty" className="block my-2 text-sm font-medium text-yellow-700 dark:text-yellow-300">
                                    Select Difficulty for {cat}
                                </label>
                                <select
                                    id="difficulty"
                                    value={difficulty}
                                    onChange={(e) => setDifficulty(e.target.value)}
                                    disabled={isLoading}
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:focus:border-blue-400 dark:bg-gray-600 dark:text-gray-100"
                                >
                                    <option value="easy">Easy</option>
                                    <option value="medium">Medium</option>
                                    <option value="hard">Hard</option>
                                </select>
                            </div>

                            <button
                                onClick={debouncedGenerateChallenge}
                                disabled={isLoading || quota.quota_remaining === 0 || challenge}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition disabled:opacity-50 w-full"
                            >
                                {isLoading ? "Creating..." : `Create ${cat} Quizzy`}
                            </button>
                        </div>
                    </TabPanel>
                ))}
            </Tabs>

            {isLoading && <Loader message={`Creating your ${category} quizzy...`} />}
            {error && <p className="text-red-500 text-center">{error}</p>}
            {challenge && <MCQChallenge challenge={challenge} onAnswer={handleAnswer} 
                totalChallengesPlayed={totalChallengesPlayed} 
                userCurrentScore={quota.score} />
            }
        </div>
    );
}

export default ChallengeGenerator;