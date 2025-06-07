import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Label, TextInput, Button } from "flowbite-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiUser, FiLogOut, FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../App";
import logo from '../assets/logo.png';
import axios from 'axios';

// Updated Header.jsx
export function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("user_id");
    setIsAuthenticated(false);
    window.location.href = "/sign-in";
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAvatarDropdownOpen(false);
  };

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
    setIsMenuOpen(false);
  };

  const closeDropdowns = () => {
    setIsMenuOpen(false);
    setIsAvatarDropdownOpen(false);
  };

  return (
    <header className="bg-white shadow-md border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/quizzy" className="flex items-center gap-2" onClick={closeDropdowns}>
          <img src={logo} alt="ABC Quizzy Logo" className="h-8 w-8" />
          <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-600 dark:text-blue-400">ABC Quizzy</h1>
        </Link>
        <div className="md:hidden flex items-center gap-2">
          {isAuthenticated && (
            <button
              onClick={toggleAvatarDropdown}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative z-20"
              aria-label="User menu"
            >
              <FiUser className="h-6 w-6" />
            </button>
          )}
          <button
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent dark:md:bg-transparent shadow-md md:shadow-none border-b md:border-0 border-gray-200 dark:border-gray-700 md:items-center space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0 transition-all duration-300`}
        >
          {isAuthenticated ? (
            <>
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={closeDropdowns}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={closeDropdowns}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={closeDropdowns}
              >
                Contact
              </Link>
              <Link
                to="/quizzy"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={closeDropdowns}
              >
                Play Quizzy
              </Link>
              <div className="relative hidden md:block">
                <button
                  onClick={toggleAvatarDropdown}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="User menu"
                >
                  <FiUser className="h-6 w-6" />
                </button>
                {isAvatarDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-10">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={closeDropdowns}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-history"
                      className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                      onClick={closeDropdowns}
                    >
                      History
                    </Link>
                    <button
                      onClick={() => {
                        toggleDarkMode();
                        closeDropdowns();
                      }}
                      className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
                      {darkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeDropdowns();
                      }}
                      className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                    >
                      <FiLogOut className="mr-2" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <div className="md:hidden flex flex-col space-y-4">
                {isAvatarDropdownOpen && (
                  <>
                    <Link
                      to="/profile"
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                      onClick={closeDropdowns}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/my-history"
                      className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                      onClick={closeDropdowns}
                    >
                      History
                    </Link>
                    <button
                      onClick={() => {
                        toggleDarkMode();
                        closeDropdowns();
                      }}
                      className="w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      Toggle Theme
                    </button>
                    <button
                      onClick={() => {
                        handleLogout();
                        closeDropdowns();
                      }}
                      className="inline-flex items-center gap-1 bg-red-600 text-white px-3 py-1.5 rounded-md hover:bg-red-700 transition w-full text-left"
                    >
                      <FiLogOut className="text-lg" />
                      Logout
                    </button>
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <button
                 onClick={() => {
                 toggleDarkMode();
                 closeDropdowns();
                 }}
                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                 >
                 {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
              </button>
              <Link
                to="/sign-in"
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors dark:text-gray-300 dark:hover:text-blue-400"
                onClick={closeDropdowns}
              >
                Sign In
              </Link>
              <Link
                to="/sign-up"
                className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md font-medium transition w-full md:w-auto text-center"
                onClick={closeDropdowns}
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </div>
      {isAuthenticated && isAvatarDropdownOpen && (
        <div className="md:hidden absolute top-16 right-4 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50">
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={closeDropdowns}
          >
            Profile
          </Link>
          <Link
            to="/my-history"
            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
            onClick={closeDropdowns}
          >
            History
          </Link>
          <button
            onClick={() => {
              toggleDarkMode();
              closeDropdowns();
            }}
            className="w-full text-left flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            {darkMode ? <FiSun className="mr-2" /> : <FiMoon className="mr-2" />}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
          <button
            onClick={() => {
              handleLogout();
              closeDropdowns();
            }}
            className="w-full text-left flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <FiLogOut className="mr-2" />
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
export default Header;