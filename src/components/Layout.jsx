import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <main className="flex-grow px-4 py-8 max-w-5xl mx-auto w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}