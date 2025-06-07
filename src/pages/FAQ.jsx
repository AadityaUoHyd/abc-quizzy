// src/pages/FAQ.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Accordion } from 'flowbite-react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function FAQ() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight flex items-center justify-center gap-3">
            <FaQuestionCircle className="text-blue-600" />
            Frequently Asked Questions
          </h1>
          <p className={`mt-4 text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Find answers to common questions about ABC Quizzy.
          </p>
        </div>

        <Accordion className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
          <Accordion.Panel>
            <Accordion.Title className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
              What is ABC Quizzy?
            </Accordion.Title>
            <Accordion.Content className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
              <p className="mb-2">
                ABC Quizzy is an AI-powered quiz platform designed to help you learn and test your knowledge across various subjects. We offer personalized quizzes with detailed explanations.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
              How are quizzes generated?
            </Accordion.Title>
            <Accordion.Content className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
              <p className="mb-2">
                Our quizzes are dynamically generated using advanced AI models based on your selected topic and difficulty level. This ensures a fresh and challenging experience every time.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
              What topics are available?
            </Accordion.Title>
            <Accordion.Content className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
              <p className="mb-2">
                We cover a wide range of subjects including Computer Programming, History (Indian and World), Economics, Science (Physics, Chemistry, Biology), and many more. Check our "Our Quiz Topics" page for a full list!
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
              Is there a limit to how many quizzes I can take?
            </Accordion.Title>
            <Accordion.Content className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
              <p className="mb-2">
                Yes, free users have a daily quota of quizzes. This quota resets every 24 hours. You can see your remaining quizzes on the Challenge Generator page.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-900 hover:bg-gray-50'}`}>
              How can I contribute or suggest new features?
            </Accordion.Title>
            <Accordion.Content className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'}`}>
              <p className="mb-2">
                We welcome feedback! You can join our Quizzy Community to share your ideas, report bugs, and interact with other users.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
}