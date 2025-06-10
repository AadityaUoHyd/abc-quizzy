// src/auth/ResetPassword.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import logo from '../assets/logo.png';
import dp from '../assets/dp.png';
import { toast } from 'react-toastify';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const tokenParam = new URLSearchParams(location.search).get('token');
    if (tokenParam) {
      setToken(tokenParam);
    } else {
      setError('Invalid or missing token');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      setError('No valid token found to reset password.');
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/reset-password`, {
        token,
        new_password: newPassword,
      });
      toast.success('Password reset successfully! Redirecting to sign-in...', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeout(() => navigate('/sign-in'), 2000);
    } catch (err) {
      toast.error(err.response?.data?.detail || 'Reset failed', {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
        style={{
            backgroundImage: `url(${dp})`,
          }}
        >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transition-colors duration-300">
        <Link to="/">
            <img src={logo} alt="Logo" className="mx-auto mb-6 cursor-pointer" style={{ width: '150px' }}/>
        </Link>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Reset Password</h2>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="new-password" value="New Password" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              id="new-password"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="mt-1 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400"
            />
          </div>
          <Button
            type="submit"
            gradientDuoTone="cyanToBlue"
            className="w-full py-2 transition-transform duration-200 hover:scale-105 hover:shadow-lg"
          >
            Reset Password
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          <Link to="/sign-in" className="text-blue-600 hover:underline dark:text-blue-400">
            Back to Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}