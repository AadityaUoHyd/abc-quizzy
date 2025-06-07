import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from './auth/ProtectedRoute.jsx';
import Layout from './components/Layout.jsx';
import './App.css';

const LandingPage = React.lazy(() => import('./pages/LandingPage'));
const Login = React.lazy(() => import('./auth/Login.jsx'));
const Register = React.lazy(() => import('./auth/Register.jsx'));
const Verify = React.lazy(() => import('./auth/Verify.jsx'));
const ForgotPassword = React.lazy(() => import('./auth/ForgotPassword.jsx'));
const ResetPassword = React.lazy(() => import('./auth/ResetPassword.jsx'));
const ChallengeGenerator = React.lazy(() => import('./challenge/ChallengeGenerator.jsx'));
const HistoryPanel = React.lazy(() => import('./history/HistoryPanel.jsx'));
const About = React.lazy(() => import('./pages/About.jsx'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Contact = React.lazy(() => import('./pages/Contact.jsx'));
const TermsOfService = React.lazy(() => import('./pages/TermsOfService.jsx'));
const Profile = React.lazy(() => import('./pages/Profile.jsx'));
const FAQ = React.lazy(() => import('./pages/FAQ.jsx'));
const OurQuizTopics = React.lazy(() => import('./pages/OurQuizTopics.jsx'));
const BooksRecommended = React.lazy(() => import('./pages/BooksRecommended.jsx'));
const QuizzyCommunity = React.lazy(() => import('./pages/QuizzyCommunity.jsx'));

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const ThemeContext = React.createContext(null);

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <BrowserRouter>
          <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<Register />} />
              <Route path="/verify" element={<Verify />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              <Route element={<Layout />}>
                <Route path="/quizzy" element={<ProtectedRoute><ChallengeGenerator /></ProtectedRoute>} />
                <Route path="/my-history" element={<ProtectedRoute><HistoryPanel /></ProtectedRoute>} />
                <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                <Route path="/about" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/topics" element={<OurQuizTopics />} />
                <Route path="/books" element={<BooksRecommended />} />
                <Route path="/community" element={<QuizzyCommunity />} />
              </Route>

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
      </ThemeContext.Provider>
    </GoogleOAuthProvider>
  );
}
