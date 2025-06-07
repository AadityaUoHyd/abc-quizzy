import React, { useState, useEffect } from "react";
import { MCQChallenge } from "../challenge/MCQChallenge.jsx";
import { useApi } from "../utils/api.js";
import { FiRefreshCw, FiClock, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaLinkedin, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../components/Loader.jsx";

export function HistoryPanel() {
    const { makeRequest } = useApi();
    const [history, setHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalChallenges, setTotalChallenges] = useState(0);
    const [userStats, setUserStats] = useState({ confetti_count: 0, highest_score: 0 });
    const perPage = 100;

    useEffect(() => {
        fetchHistory(currentPage);
        fetchQuota();
    }, [currentPage]);

    const fetchQuota = async () => {
        try {
            const data = await makeRequest("quota");
            setUserStats({
                confetti_count: data.confetti_count,
                highest_score: data.highest_score
            });
        } catch (err) {
            console.error("Failed to fetch quota:", err.message);
            toast.error("Failed to fetch user stats", { position: "top-right", autoClose: 3000 });
        }
    };

    const fetchHistory = async (page) => {
        setIsLoading(true);
        setError(null);

        try {
            const data = await makeRequest(`my-history?page=${page}&per_page=${perPage}`);
            console.log("History API Response:", data);
            setHistory(data.challenges || []);
            setTotalChallenges(Number(data.total) || 0);
        } catch (err) {
            console.error("Fetch History Error:", err.message);
            const errorMessage = err.message || "Failed to load history.";
            setError(errorMessage);
            toast.error(errorMessage, {
                position: "top-right",
                autoClose: 3000,
            });
            setTotalChallenges(0);
        } finally {
            setIsLoading(false);
        }
    };

    const totalPages = Math.max(1, Math.ceil(totalChallenges / perPage));

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleShare = (platform) => {
        const text = `I’ve earned ${userStats.confetti_count} confetti celebrations and a highest score of ${userStats.highest_score}/100 on ABC-Quizzy! Test your knowledge at https://abc-quizzy.vercel.app!`;
        const url = encodeURIComponent('https://abc-quizzy.vercel.app');
        let shareUrl;

        switch (platform) {
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${encodeURIComponent(text)}`;
                break;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}%20${url}`;
                break;
            case 'facebook':
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${encodeURIComponent(text)}`;
                break;
            case 'instagram':
                navigator.clipboard.writeText(`${text} ${url}`);
                toast.info("Copied to clipboard! Paste it in your Instagram post.", {
                    position: "top-right",
                    autoClose: 3000,
                });
                return;
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`;
                break;
            default:
                return;
        }

        window.open(shareUrl, '_blank');
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center py-8">
                <Loader message="Loading quiz history..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-red-100 text-red-700 p-4 rounded-md text-center space-y-2 dark:bg-red-900 dark:text-red-100">
                <p>{error}</p>
                <button
                    onClick={() => fetchHistory(currentPage)}
                    className="inline-flex items-center gap-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                >
                    <FiRefreshCw /> Retry
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white shadow-md p-6 rounded-lg dark:bg-gray-800 dark:text-gray-100 transition-colors duration-300 max-w-4xl mx-auto">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 flex items-center justify-center gap-2 animate-pulse">
                    <FiClock />
                    Quizzy History
                </h2>
                <div className="mt-2 bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-md shadow-md dark:from-blue-900 dark:to-purple-900">
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-300">
                        Confetti Celebrations Count: <span className="font-bold">{userStats.confetti_count}</span>
                    </p>
                    <p className="text-lg font-medium text-purple-600 dark:text-purple-300">
                        Your Highest Ever Score: <span className="font-bold">{userStats.highest_score}/100</span>
                    </p>
                    <div className="text-center mt-2">Share your Quizzy skills with the world</div>
                    <div className="mt-4 flex justify-center items-center gap-4">

                        <div className="flex gap-2">
                            <button
                                onClick={() => handleShare('linkedin')}
                                className="p-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                                title="Share on LinkedIn"
                            >
                                <FaLinkedin size={20} />
                            </button>
                            <button
                                onClick={() => handleShare('whatsapp')}
                                className="p-2 rounded-full bg-green-500 hover:bg-green-600 text-white"
                                title="Share on WhatsApp"
                            >
                                <FaWhatsapp size={20} />
                            </button>
                            <button
                                onClick={() => handleShare('facebook')}
                                className="p-2 rounded-full bg-blue-800 hover:bg-blue-900 text-white"
                                title="Share on Facebook"
                            >
                                <FaFacebook size={20} />
                            </button>
                            <button
                                onClick={() => handleShare('instagram')}
                                className="p-2 rounded-full bg-pink-600 hover:bg-pink-700 text-white"
                                title="Share on Instagram"
                            >
                                <FaInstagram size={20} />
                            </button>
                            <button
                                onClick={() => handleShare('twitter')}
                                className="p-2 rounded-full bg-blue-400 hover:bg-blue-500 text-white"
                                title="Share on Twitter"
                            >
                                <FaTwitter size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {history.length === 0 ? (
                <p className="text-gray-500 text-center dark:text-gray-400">No challenge history found.</p>
            ) : (
                <>
                    <div className="grid gap-6">
                        {history.map((challenge) => (
                            <MCQChallenge
                                challenge={challenge}
                                key={challenge.id}
                                showExplanation={true}
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center mt-6 space-x-4">
                        <button
                            onClick={handlePreviousPage}
                            disabled={currentPage === 1}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 disabled:opacity-50 transition"
                            aria-label="Previous page"
                        >
                            <FiChevronLeft className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </button>
                        <span className="text-gray-700 dark:text-gray-300">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 disabled:opacity-50 transition"
                            aria-label="Next page"
                        >
                            <FiChevronRight className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default HistoryPanel;