import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser } from "react-icons/fi";
import axios from "axios";
import Loader from "../components/Loader"; // your custom loader

export function Profile() {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('Full Name');
  const [mobileNumber, setMobileNumber] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateMobile = (number) => /^\d{10}$/.test(number);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        setError('You are not authenticated. Please sign in.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEmail(response.data.email);
        setFullName(response.data.full_name || 'Full Name');
        setMobileNumber(response.data.mobile_number || '');
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch user profile:', err.response?.data || err);
        setError(err.response?.data?.detail || 'Failed to load profile data.');
        toast.error('Failed to load profile data.', {
          position: 'top-right',
          autoClose: 3000,
        });
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async () => {
    setLoading(true);
    setError('');
    const token = localStorage.getItem('auth_token');
    if (!token) {
      setError('You are not authenticated. Please sign in.');
      setLoading(false);
      return;
    }

    if (!validateMobile(mobileNumber)) {
      setError("Mobile number must be exactly 10 digits.");
      toast.error("Mobile number must be exactly 10 digits.", {
        position: "top-right",
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/user/update-profile`,
        { full_name: fullName, mobile_number: mobileNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        }
      );
      setFullName(response.data.full_name);
      setMobileNumber(response.data.mobile_number);
      setEditMode(false);
      toast.success('Profile updated successfully!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false);
    } catch (err) {
      console.error('Failed to update profile:', err.response?.data || err);
      const errorMessage = err.response?.data?.detail || 'Failed to update profile.';
      setError(errorMessage);
      toast.error(errorMessage, {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <Loader message="Loading profile..." />
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md text-center transition-colors duration-300">
        <div className="flex justify-center mb-6">
          <FiUser className="h-24 w-24 text-blue-500 dark:text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">User Profile</h2>
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <div className="space-y-4 text-left">
          <div>
            <Label htmlFor="full_name" value="Name" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              id="full_name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              readOnly={!editMode}
              className="mt-1 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              id="email"
              type="email"
              value={email}
              readOnly
              className="mt-1 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="mobile_number" value="Mobile Number" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              id="mobile_number"
              type="tel"
              placeholder="10-digit mobile"
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))
              }
              readOnly={!editMode}
              className="mt-1 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <Label htmlFor="password" value="Password" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              id="password"
              type="password"
              value="********"
              readOnly
              className="mt-1 block w-full dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500"
            />
            <p className="mt-1 text-sm text-right">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Reset Password?
              </a>
            </p>
          </div>
          <div>
            <Button
              onClick={() => (editMode ? handleUpdateProfile() : setEditMode(true))}
              gradientDuoTone="cyanToBlue"
              className="w-full mt-6 py-2 rounded-md transition-transform duration-200 hover:scale-105 hover:shadow-lg"
              disabled={loading}
            >
              {editMode ? 'Save Profile' : 'Edit Profile'}
            </Button>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
}

export default Profile;
