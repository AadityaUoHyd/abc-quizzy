// src/components/Loader.jsx
import React from 'react';
import logo from '../assets/logo.png'; // Adjust path if necessary

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300">
      <img
        src={logo}
        alt="Loading"
        className="w-24 h-24 animate-spin-slow" // 'animate-spin-slow' from tailwind.config.js
      />
      <p className="mt-4 text-lg font-medium text-gray-700 dark:text-gray-300">{message}</p>
    </div>
  );
};

export default Loader;