// src/pages/OurQuizTopics.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card } from 'flowbite-react';
import {
  FaCode, FaBook, FaLightbulb, FaGlobe, FaGlobeAmericas, FaFlask, FaVial, FaCalculator,
  FaHistory, FaLandmark, FaUniversity, FaMoneyBillWave, FaChartLine, FaGavel, FaBrain,
  FaLeaf, FaHandsHelping, FaBalanceScale, FaUsers, FaChild, FaUserCircle, FaAtom, FaSeedling
} from 'react-icons/fa';

const categories = [
  { name: "Computer Programming", icon: FaCode },
  { name: "Indian History", icon: FaHistory },
  { name: "World History", icon: FaGlobeAmericas },
  { name: "Indian Polity", icon: FaGavel },
  { name: "Economics", icon: FaMoneyBillWave },
  { name: "Geography", icon: FaGlobe },
  { name: "Business Administration", icon: FaChartLine },
  { name: "Public Administration", icon: FaUniversity },
  { name: "Physics", icon: FaAtom },
  { name: "Chemistry", icon: FaVial },
  { name: "Biology", icon: FaLeaf },
  { name: "Quantitative Aptitude", icon: FaCalculator },
  { name: "General Knowledge", icon: FaLightbulb },
  { name: "Environment", icon: FaSeedling },
  { name: "Philosophy", icon: FaBrain },
  { name: "Sociology", icon: FaUsers },
  { name: "Anthropology", icon: FaChild },
  { name: "Psychology", icon: FaUserCircle }
];

export default function OurQuizTopics() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <FaBook className="text-blue-600" />
            Our Quiz Topics
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Explore the diverse range of subjects ABC Quizzy offers. Sharpen your skills in any of these areas!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg text-center`}>
              {React.createElement(category.icon, { className: "text-5xl text-blue-600 mb-4 mx-auto" })}
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {category.name}
              </h3>
              <p className={`mt-2 text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Dive deep into {category.name.toLowerCase()} with AI-powered quizzes.
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}