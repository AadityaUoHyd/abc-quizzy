// src/auth/Login.jsx
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react'; // Import Button
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Import Link
import { toast } from 'react-toastify';
import google from '../assets/google.png';
import logo from '../assets/logo.png';
import dp from '../assets/dp.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/login`,
        { email, password }
      );
      localStorage.setItem('auth_token', res.data.token);
      localStorage.setItem('user_id', res.data.user_id);
      toast.success('Login successful!', {
        position: 'top-right',
        autoClose: 3000,
      });
      navigate('/quizzy');
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Login failed';
      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/google`,
          { code: tokenResponse.code }
        );
        localStorage.setItem('auth_token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        toast.success('Google login successful!', {
          position: 'top-right',
          autoClose: 3000,
        });
        navigate('/quizzy');
      } catch (err) {
        const errorMessage = err.response?.data?.detail || 'Google login failed';
        setError(errorMessage);
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
        });
      }
    },
    onError: (errorResponse) => {
      setError('Google login failed');
      toast.error('Google login failed', {
        position: 'top-right',
        autoClose: 3000,
      });
      console.error('Google login error:', errorResponse);
    },
    flow: 'auth-code',
    redirect_uri: `${import.meta.env.VITE_FRONTEND_URL}/sign-in`,
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4"
        style={{
            backgroundImage: `url(${dp})`,
        }}
      >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transition-colors duration-300">
        <Link to="/">
            <img src={logo} alt="Logo" className="mx-auto mb-6 cursor-pointer" style={{ width: '150px' }}/>
        </Link>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Sign In</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleEmailLogin} className="space-y-6">
            <div className="flex items-center gap-4">
              <Label htmlFor="email" value="Email" className="w-24 text-gray-700 dark:text-gray-300" />
              <TextInput
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400
                           focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>
            <div className="flex items-center gap-4">
              <Label htmlFor="password" value="Password" className="w-24 text-gray-700 dark:text-gray-300" />
              <TextInput
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400
                           focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
              />
            </div>
          <Button
              type="submit"
              gradientDuoTone="cyanToBlue"
              className="w-full py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
              Sign In
          </Button>
        </form>
        {/*
        <div className="mt-6 text-center">
          <Button
            onClick={() => googleLogin()}
            className="w-full flex justify-center items-center bg-blue-900 text-white border border-gray-300 py-2
             rounded-md hover:bg-blue-700 transition duration-200 dark:bg-gray-200 dark:border-gray-600
             dark:hover:bg-white dark:text-blue-500 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </Button>
        </div>
          */}
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/sign-up" className="text-blue-600 hover:underline dark:text-blue-400">
            Sign Up
          </Link>
        </p>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">
          <Link to="/forgot-password" className="text-blue-600 hover:underline dark:text-blue-400">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
}