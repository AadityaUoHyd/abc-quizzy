import React, { useContext } from 'react';
import { ThemeContext } from '../App.jsx';
import { Card } from 'flowbite-react';
import { FaFileContract } from 'react-icons/fa';

export default function TermsOfService() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FaFileContract className="text-5xl text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Terms of Service
          </h1>
          <p className={`mt-4 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Effective Date: June 5, 2025
          </p>
        </div>

        <Card className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white'} shadow-lg`}>
          <div className="space-y-8">
            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                1. Acceptance of Terms
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                By accessing or using ABC Quizzy ("the Platform"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Platform. We may update these Terms from time to time, and your continued use constitutes acceptance of any changes.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                2. Eligibility
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                You must be at least 13 years old to use the Platform. By registering, you represent that you meet this age requirement and have the legal capacity to enter into these Terms.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                3. User Accounts
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To access certain features, you must create an account using a valid email address or Google SSO. You are responsible for:
              </p>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Maintaining the confidentiality of your account credentials.</li>
                <li>All activities conducted under your account.</li>
                <li>Notifying us immediately at <a href="mailto:support@abcquizzy.com" className="text-blue-600 hover:underline">support@abcquizzy.com</a> if you suspect unauthorized access.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                4. Use of the Platform
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                You agree to use the Platform in accordance with these Terms and applicable laws. Prohibited activities include:
              </p>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Attempting to access or disrupt the Platform’s systems or data.</li>
                <li>Using automated tools (e.g., bots, scrapers) to interact with the Platform.</li>
                <li>Posting or sharing inappropriate, offensive, or illegal content.</li>
                <li>Violating the intellectual property rights of ABC Quizzy or others.</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                5. Intellectual Property
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                All content on the Platform, including quizzes, text, images, and code, is owned by ABC Quizzy or its licensors and protected by copyright and other laws. You may not:
              </p>
              <ul className={`mt-2 list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Copy, distribute, or modify content without permission.</li>
                <li>Use our trademarks or branding without consent.</li>
              </ul>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                By submitting feedback or suggestions, you grant us a non-exclusive, royalty-free license to use them to improve the Platform.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                6. Quota and Limitations
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The Platform imposes daily quotas on quiz generation to ensure fair usage. Quotas reset daily, and we reserve the right to modify limits or introduce premium features. Abuse of quotas may result in account suspension.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                7. Termination
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We may suspend or terminate your account if you violate these Terms. You may delete your account at any time by contacting <a href="mailto:support@abcquizzy.com" className="text-blue-600 hover:underline">support@abcquizzy.com</a>. Upon termination, your access to the Platform will cease, but these Terms’ provisions may still apply.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                8. Disclaimer of Warranties
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The Platform is provided “as-is” without warranties of any kind, express or implied, including but not limited to, the warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not guarantee that the Platform will be uninterrupted, error-free, or free from viruses or other harmful components.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                8. Limitation of Liability
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                To the extent permitted by law, ABC Quizzy will not be liable for any indirect, incidental, incidental, special, consequential, or punitive damages arising from your use of the Platform, even if we have been advised of the possibility of such damages. Our total liability is limited to the amount you paid, if any, for accessing the Platform.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                9. Governing Law
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                These Terms are governed by the laws of the United States and the State of California, without regard to conflict-of-law principles. Any disputes will be resolved in the courts located in California, USA.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                10. Changes to These Terms
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                We may update these Terms periodically. We’ll notify you of significant changes via email or on the Platform. Your continued use after changes take effect constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                11. Contact Us
              </h2>
              <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                For questions about these Terms, contact us at <a href="mailto:support@abcquizzy.com" className="text-blue-600 hover:underline">support@abcquizzy.com</a>.
              </p>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}