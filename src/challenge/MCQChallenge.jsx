import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { playSound } from "../utils/audio";
import { useApi } from "../utils/api";
import { toast } from "react-toastify";

const CORRECT_SOUND_URL = 'https://res.cloudinary.com/dppx4dm9a/video/upload/v1748484190/correct_s55rpg.mp3';
const INCORRECT_SOUND_URL = 'https://res.cloudinary.com/dppx4dm9a/video/upload/v1748484190/incorrect_jy1fdd.mp3';

export function MCQChallenge({ challenge, showExplanation = false, onAnswer, totalChallengesPlayed }) {
    const [selectedOption, setSelectedOption] = useState(challenge.user_answer_id || null);
    const [shouldShowExplanation, setShouldShowExplanation] = useState(showExplanation || !!challenge.user_answer_id);
    const [timeLeft, setTimeLeft] = useState(60);
    const { makeRequest } = useApi();

    const options = typeof challenge.options === "string"
        ? JSON.parse(challenge.options)
        : challenge.options;

    useEffect(() => {
        if (timeLeft <= 0 || selectedOption !== null || showExplanation) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    handleTimeout();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft, selectedOption, showExplanation]);

    const handleTimeout = async () => {
        if (selectedOption !== null) return;

        setShouldShowExplanation(true);
        if (onAnswer) {
            onAnswer(false, 0, totalChallengesPlayed + 1, false);
        }

        try {
            const response = await makeRequest("update-score", {
                method: "POST",
                body: JSON.stringify({
                    challenge_id: challenge.id,
                    points: 0,
                    total_challenges: totalChallengesPlayed + 1,
                    achieved_confetti: false,
                    user_answer_id: null
                })
            });
            console.log("Update score response (timeout):", response);
        } catch (err) {
            console.error("Failed to update score (timeout):", err.message);
            toast.error(err.message, { position: "top-right", autoClose: 3000 });
        }
    };

    const handleOptionSelect = async (index) => {
        if (selectedOption !== null || timeLeft <= 0) return;

        setSelectedOption(index);
        setShouldShowExplanation(true);

        const isCorrect = index === challenge.correct_answer_id;
        const points = isCorrect ? 10 : -5;
        const newTotalChallenges = totalChallengesPlayed + 1;
        const achievedConfetti = newTotalChallenges >= 10 && challenge.score >= 75;

        if (isCorrect) {
            playSound(CORRECT_SOUND_URL);
        } else {
            playSound(INCORRECT_SOUND_URL);
        }

        if (onAnswer) {
            onAnswer(isCorrect, points, newTotalChallenges, achievedConfetti);
        }

        try {
            const response = await makeRequest("update-score", {
                method: "POST",
                body: JSON.stringify({
                    challenge_id: challenge.id,
                    points,
                    total_challenges: newTotalChallenges,
                    achieved_confetti: achievedConfetti,
                    user_answer_id: index
                })
            });
            console.log("Update score response (select):", response);
        } catch (err) {
            console.error("Failed to update score (select):", err.message);
            toast.error(err.message, { position: "top-right", autoClose: 3000 });
        }
    };

    const getOptionClass = (index) => {
        let baseClasses = "rounded-md p-3 transition";
        const darkModeBaseClasses = "dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100";
        const darkModeHoverClasses = "dark:hover:bg-gray-600";

        if (selectedOption === null && timeLeft > 0 && !showExplanation) {
            return `cursor-pointer bg-gray-100 border border-gray-300 hover:bg-gray-200 ${baseClasses} ${darkModeBaseClasses} ${darkModeHoverClasses}`;
        }
        if (index === challenge.correct_answer_id) {
            return `cursor-not-allowed bg-green-100 border border-green-500 text-green-700 font-semibold ${baseClasses} dark:bg-green-700 dark:border-green-600 dark:text-green-100`;
        }
        if (selectedOption === index && selectedOption !== challenge.correct_answer_id) {
            return `cursor-not-allowed bg-red-100 border border-red-500 text-red-700 font-semibold ${baseClasses} dark:bg-red-700 dark:border-red-600 dark:text-red-100`;
        }
        return `cursor-not-allowed bg-gray-100 border border-gray-300 ${baseClasses} ${darkModeBaseClasses}`;
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mt-6 space-y-4 dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300">
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 flex justify-between items-center">
                <div>
                    <strong>Category:</strong> {challenge.category}
                </div>
                <div>
                    <strong>Difficulty Level:</strong>{" "}
                    <span className={`inline-block px-3 py-1 rounded-full text-white capitalize
                        ${challenge.difficulty === "easy" ? "bg-yellow-600" :
                          challenge.difficulty === "medium" ? "bg-purple-700" :
                          "bg-red-800"}`}>
                        {challenge.difficulty}
                    </span>
                </div>
            </div>

            {!showExplanation && (
                <div className="text-center">
                    <strong>Time Left:</strong>{" "}
                    <span className={`font-bold ${timeLeft <= 10 ? "text-red-600" : "text-gray-700"} dark:text-gray-200`}>
                        {timeLeft} seconds
                    </span>
                </div>
            )}

            <div className="prose prose-sm text-gray-800 dark:prose-invert dark:text-gray-200">
                <ReactMarkdown>{challenge.title}</ReactMarkdown>
            </div>

            <div className="grid gap-3">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={getOptionClass(index)}
                        onClick={() => handleOptionSelect(index)}
                    >
                        {option}
                    </div>
                ))}
            </div>

            {shouldShowExplanation && (
                <div className="mt-4 bg-blue-50 border border-blue-300 p-4 rounded-md dark:bg-blue-900 dark:border-blue-700">
                    <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                        {selectedOption === challenge.correct_answer_id ? (
                            <FiCheckCircle className="text-green-600 dark:text-green-400" />
                        ) : (
                            <FiXCircle className="text-red-600 dark:text-red-400" />
                        )}
                        Explanation:
                    </h3>
                    <div className="prose prose-sm text-gray-700 dark:prose-invert dark:text-gray-200">
                        <ReactMarkdown>{challenge.explanation}</ReactMarkdown>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MCQChallenge;