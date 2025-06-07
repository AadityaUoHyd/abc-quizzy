import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left: Copyright */}
        <div className="text-center md:text-left md:w-1/3">
          <p className="text-sm font-semibold tracking-wide mb-2">© {currentYear} ABC Quizzy</p>
          <p className="text-xs text-gray-600 dark:text-gray-400">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              Aaditya B Chatterjee
            </a>
          </p>
        </div>

        {/* Center: Navigation */}
        <nav className="flex flex-wrap justify-center md:justify-start md:w-1/3 gap-4 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            About
          </Link>
          <Link to="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Contact
          </Link>

          <Link to="/faq" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            FAQs
          </Link><Link to="/topics" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Quiz Topics
          </Link><Link to="/books" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Books Recommended
          </Link><Link to="/community" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Quizzy Community
          </Link>
          <Link to="/sign-in" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Sign In
          </Link>
          <Link to="/sign-up" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 hover:underline">
            Sign Up
          </Link>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end md:w-1/3 space-x-6 text-xl">
          <a
            href="https://github.com/AadityaUoHyd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-200 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/aadityabchatterj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-blue-400 transition-colors duration-200 transform hover:scale-110"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/aadityabchatterjee"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors duration-200 transform hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/9999999999"  // Replace with actual number
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition-colors duration-200 transform hover:scale-110"
            >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
}