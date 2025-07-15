import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/components/AdminNavigation.css';

const AdminNavigation = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/admin',
      icon: '📊'
    },
    {
      title: 'Members',
      path: '/admin/members',
      icon: '👥'
    },
    {
      title: 'Events',
      path: '/admin/events',
      icon: '📅'
    },
    {
      title: 'Donations',
      path: '/admin/donations',
      icon: '💰'
    },
    {
      title: 'Reports',
      path: '/admin/reports',
      icon: '📈'
    },
    {
      title: 'Settings',
      path: '/admin/settings',
      icon: '⚙️'
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`admin-nav ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <motion.div
        className="admin-sidebar"
        initial={{ x: -250 }}
        animate={{ x: isSidebarOpen ? 0 : -250 }}
        transition={{ duration: 0.3 }}
      >
        <div className="sidebar-header">
          <div className="logo-section">
            <img src="/logo.png" alt="Sankalp Youth" className="admin-logo" />
            <h2>Sankalp Youth</h2>
          </div>
          <button
            className="sidebar-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '◀' : '▶'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`nav-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <span className="nav-icon">{item.icon}</span>
                {isSidebarOpen && <span className="nav-title">{item.title}</span>}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="back-to-site">
            <span className="nav-icon">🏠</span>
            {isSidebarOpen && <span>Back to Site</span>}
          </Link>
        </div>
      </motion.div>

      {/* Top Bar */}
      <div className="admin-topbar">
        <div className="topbar-left">
          <button
            className="menu-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            ☰
          </button>
          <h1 className="page-title">
            {menuItems.find(item => item.path === location.pathname)?.title || 'Admin Panel'}
          </h1>
        </div>
        
        <div className="topbar-right">
          <div className="admin-profile">
            <div className="profile-info">
              <span className="admin-name">Admin User</span>
              <span className="admin-role">Administrator</span>
            </div>
            <div className="profile-avatar">
              👤
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavigation; 