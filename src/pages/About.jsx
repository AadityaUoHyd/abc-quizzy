import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card, Button } from 'flowbite-react';
import { FaBrain, FaCode, FaUsers } from 'react-icons/fa';

export default function About() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About ABC Quizzy
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            ABC Quizzy is your ultimate platform for engaging, interactive quizzes designed to challenge your mind and spark curiosity across a wide range of topics.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <FaBrain className="text-6xl text-blue-600 mb-4 mx-auto md:mx-0" />
                <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission
                </h2>
                <p className={`mt-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  At ABC Quizzy, we aim to make learning fun and accessible for everyone. Our platform combines cutting-edge AI technology with a user-friendly interface to deliver personalized quizzes that cater to all skill levels, from beginners to experts.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
                  alt="Learning"
                  className="rounded-lg shadow-md w-full h-64 object-cover"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
            Why Choose ABC Quizzy?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <FaCode className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Diverse Categories
              </h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Explore quizzes in Programming, History, Science, Economics, and more, tailored to your interests.
              </p>
            </Card>
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <FaBrain className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                AI-Powered Quizzes
              </h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Our AI generates dynamic, engaging questions with detailed explanations to enhance your learning.
              </p>
            </Card>
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
              <FaUsers className="text-4xl text-blue-600 mb-4 mx-auto" />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Community-Driven
              </h3>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Join a vibrant community of learners, share challenges, and compete for top scores.
              </p>
            </Card>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold text-center ${darkMode ? 'text-white' : 'text-gray-900'} mb-8`}>
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
              <img
                src="https://raw.githubusercontent.com/AadityaUoHyd/the-platenet/refs/heads/main/aadi.jpg?auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Aaditya B Chatterjee
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Lead Developer
              </p>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Passionate about building intuitive learning platforms.
              </p>
            </Card>
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
              <img
                src="https://images.unsplash.com/photo-1567784177951-6fa58317e16b?auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Santosh Bhandari
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                AI Specialist
              </p>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Expert in crafting intelligent quiz algorithms.
              </p>
            </Card>
            <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
                alt="Team Member"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Shreya Kiki
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                UX Designer
              </p>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dedicated to creating seamless user experiences.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Ready to Start Quizzing?
          </h2>
          <Button
            href="/sign-up"
            color="blue"
            className="mx-auto text-white bg-blue-600 hover:bg-blue-700"
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
}