import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card } from 'flowbite-react';
import { FaShieldAlt } from 'react-icons/fa';

export default function PrivacyPolicy() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Effective Date: June 5, 2025
          </p>
        </div>

        <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
          <div className="space-y-8">
            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Introduction
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                At ABC Quizzy, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Information We Collect
              </h2>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li><strong>Account Information:</strong> Email address, Google ID (if using Google SSO), and password (hashed).</li>
                <li><strong>Quiz Data:</strong> Responses to quizzes, categories selected, and performance metrics.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, and interaction with our platform.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                How We Use Your Information
              </h2>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>To provide and personalize quiz content.</li>
                <li>To improve our platform and AI algorithms.</li>
                <li>To communicate with you about account updates or promotions.</li>
                <li>To ensure security and prevent fraud.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Data Sharing
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We do not sell your personal data. We may share data with:
              </p>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Service providers (e.g., email services, analytics tools).</li>
                <li>Legal authorities if required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Your Rights
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                You have the right to:
              </p>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Access, correct, or delete your personal data.</li>
                <li>Opt out of promotional communications.</li>
                <li>Contact us at support@abcquizzy.com for assistance.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Security
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We use industry-standard encryption and security measures to protect your data. However, no system is completely secure, and we encourage you to use strong passwords.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Changes to This Policy
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We may update this Privacy Policy periodically. Changes will be posted on this page with an updated effective date.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Contact Us
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                If you have questions about this Privacy Policy, please contact us at <a href="mailto:support@abcquizzy.com" className="text-blue-600 hover:underline">support@abcquizzy.com</a>.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}