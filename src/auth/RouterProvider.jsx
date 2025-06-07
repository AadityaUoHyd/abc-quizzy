// src/auth/RouterProvider.jsx
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function RouterProvider() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    // Ensure all public routes are listed here
    const publicRoutes = [
      '/sign-in',
      '/sign-up',
      '/verify',
      '/forgot-password',
      '/reset-password',
      '/auth/google',
      "/subscribe",
      "/checkout"
    ];

    if (!token && !publicRoutes.includes(window.location.pathname) && !window.location.pathname.startsWith('/auth/google')) {
      navigate('/sign-in');
    }
  }, [navigate]);

  return <Outlet />;
}