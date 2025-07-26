import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/components/Navigation.css';
import logo from '../assets/logo/logo.png';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    // Apply theme to document root
    document.documentElement.setAttribute('data-theme', !isDarkTheme ? 'dark' : 'light');
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/events', label: 'Events' },
    { path: '/collaborations', label: 'Collaborations' },
    { path: '/coupons', label: 'Coupons' },
    { path: '/payment', label: 'Payment' },
    { path: '/contact', label: 'Contact' },
    { path: '/join', label: 'Join' },
    { path: '/admin', label: 'Admin', isAdmin: true },
  ];

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="nav-container">
      <Link to="/" className="nav-logo" onClick={closeMenu}>
      <img src={logo} alt="Aarya Youth Organisation" className="logo-image" />
      </Link>
        
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
          {isDarkTheme ? (
            <i className="fas fa-sun"></i>
          ) : (
            <i className="fas fa-moon"></i>
          )}
        </button>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''} ${item.isAdmin ? 'admin-link' : ''}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`bar ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation; 