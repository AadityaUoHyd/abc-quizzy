import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Label, TextInput, Button } from 'flowbite-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../assets/logo.png';
import dp from '../assets/dp.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) =>  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateMobile = (number) =>  /^\d{10}$/.test(number);

  const validatePassword = (pwd) =>  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(pwd);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    if (!validateMobile(mobileNumber)) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters and alphanumeric.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/auth/register`,
        { email, password, full_name: fullName, mobile_number: mobileNumber },
        { headers: { 'Content-Type': 'application/json' } }
      );
      toast.success('Registration successful! Check your email for verification.', {
        position: 'top-right',
        autoClose: 5000,
      });
      setLoading(false);
    } catch (err) {
      const errorMessage = err.response?.data?.detail || 'Registration failed';
      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4"
      style={{ backgroundImage: `url(${dp})` }}
    >
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transition-colors duration-300">
        <Link to="/">
          <img src={logo} alt="Logo" className="mx-auto mb-6 cursor-pointer" style={{ width: '150px' }} />
        </Link>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Sign Up</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="flex items-center gap-4">
            <Label htmlFor="fullName" value="Full Name" className="w-28 text-gray-700 dark:text-gray-300" />
            <TextInput
              id="fullName"
              type="text"
              placeholder="Full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="email" value="Email" className="w-28 text-gray-700 dark:text-gray-300" />
            <TextInput
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="mobileNumber" value="Mobile" className="w-28 text-gray-700 dark:text-gray-300" />
            <TextInput
              id="mobileNumber"
              type="text"
              placeholder="10-digit number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="password" value="Password" className="w-28 text-gray-700 dark:text-gray-300" />
            <TextInput
              id="password"
              type="password"
              placeholder="8+ chars & numbers"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            />
          </div>

          <Button
            type="submit"
            gradientDuoTone="cyanToBlue"
            className="w-full py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/sign-in" className="text-blue-600 hover:underline dark:text-blue-400">
            Sign In
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
}
