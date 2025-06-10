// src/auth/Verify.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from 'flowbite-react';
import dp from '../assets/dp.png';
import logo from '../assets/logo.png';

export default function Verify() {
  const navigate = useNavigate();
  const location = useLocation();
  const [verifying, setVerifying] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const verifyToken = async () => {
      // Extract token from URL
      const params = new URLSearchParams(location.search);
      const token = params.get('token');
      console.log('Verification token:', token);

      if (!token) {
        console.error('No token found in URL');
        setError('Invalid verification link: No token provided');
        setVerifying(false);
        toast.error('Invalid verification link: No token provided', {
          position: 'top-right',
          autoClose: 3000,
        });
        setTimeout(() => {
          console.log('Redirecting to /sign-up due to missing token');
          navigate('/sign-up');
        }, 3000);
        return;
      }

      try {
        // --- CHANGES START HERE ---
        console.log('Sending verification request to:', `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify`);
        const response = await axios.post( // Changed from .get to .post
          `${import.meta.env.VITE_BACKEND_URL}/api/auth/verify`, // Changed URL path
          { token: token } // Token sent in the request body as JSON
          // Removed headers: { Authorization: `Bearer ${token}` } as it's not needed for this endpoint
        );
        // --- CHANGES END HERE ---

        console.log('Verification response:', response.data);
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 3000,
        });
        setVerifying(false);
        setTimeout(() => {
          console.log('Redirecting to /sign-in after successful verification');
          navigate('/sign-in');
        }, 3000);
      } catch (err) {
        console.error('Verification error:', err.response?.data || err);
        const errorMessage = err.response?.data?.detail || 'Verification failed';
        setError(errorMessage);
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 3000,
        });
        setVerifying(false);
      }
    };

    verifyToken();
  }, [location, navigate]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4"
    style={{
        backgroundImage: `url(${dp})`,
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md text-center">
        <Link to="/">
          <img src={logo} alt="Logo" className="mx-auto mb-6 cursor-pointer" style={{ width: '150px' }}/>
        </Link>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Email Verification</h2>
        {verifying ? (
          <p className="text-gray-600">Verifying your email...</p>
        ) : error ? (
          <>
            <p className="text-red-600 mb-4">{error}</p>
            <Button
              gradientDuoTone="cyanToBlue"
              onClick={() => navigate('/sign-up')}
              className="w-full"
            >
              Try Again
            </Button>
          </>
        ) : (
          <>
            <p className="text-green-600 mb-4">Your email has been verified successfully!</p>
            <Button
              gradientDuoTone="cyanToBlue"
              onClick={() => navigate('/sign-in')}
              className="w-full"
            >
              Go to Sign In
            </Button>
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}