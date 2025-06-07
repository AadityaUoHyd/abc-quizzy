// src/pages/QuizzyCommunity.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card, Button } from 'flowbite-react';
import { FaComments, FaTrophy, FaShareAlt, FaLightbulb, FaDiscord, FaExternalLinkSquareAlt  } from 'react-icons/fa';

export default function QuizzyCommunity() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <FaComments className="text-blue-600" />
            Quizzy Community
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Join a vibrant community of learners and quiz enthusiasts!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
            <FaComments className="text-6xl text-blue-600 mb-4 mx-auto" />
            <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Forums & Discussion
            </h3>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Engage with fellow quizzers, discuss challenging questions, and share insights on various topics.
            </p>
            <Button color="blue" className="mt-6 mx-auto text-white bg-blue-600 hover:bg-blue-700">
              <FaExternalLinkSquareAlt className="mr-2" /> Join Forums (Coming Soon)
            </Button>
          </Card>

          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
            <FaTrophy className="text-6xl text-blue-600 mb-4 mx-auto" />
            <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Leaderboards & Competitions
            </h3>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Track your progress, compete with friends, and see where you rank among top quizzers.
            </p>
            <Button color="blue" className="mt-6 mx-auto text-white bg-blue-600 hover:bg-blue-700">
              <FaExternalLinkSquareAlt className="mr-2" /> View Leaderboard (Coming Soon)
            </Button>
          </Card>

          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
            <FaShareAlt className="text-6xl text-blue-600 mb-4 mx-auto" />
            <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Challenge Sharing
            </h3>
            <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Create and share your own custom quizzes with the community to challenge others.
            </p>
            <Button color="blue" className="mt-6 mx-auto text-white bg-blue-600 hover:bg-blue-700">
              <FaExternalLinkSquareAlt className="mr-2" /> Share a Quiz (Coming Soon)
            </Button>
          </Card>
        </div>

        {/* Call to action for Discord/Social Media */}
        <div className="text-center mt-12">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Connect with Us!
          </h2>
          <p className={`mt-2 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-6`}>
            Join our official Discord server to get real-time updates, participate in events, and chat with the team!
          </p>
          <Button
            href="https://discord.gg/your-invite-link" // Replace with your actual Discord invite link
            target="_blank"
            rel="noopener noreferrer"
            color="purple"
            className="mx-auto text-white bg-indigo-600 hover:bg-indigo-700 flex items-center justify-center gap-2"
          >
            <FaDiscord className="text-2xl" />
            Join Our Discord
          </Button>
          <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            (More social media links coming soon!)
          </p>
        </div>
      </div>
    </div>
  );
}