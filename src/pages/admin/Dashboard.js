import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../../styles/pages/admin/Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalMembers: 15420,
    activeProjects: 45,
    totalDonations: 1250000,
    volunteers: 890,
    eventsThisMonth: 12,
    pendingRequests: 23
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'member', action: 'New member registered', user: 'Rahul Kumar', time: '2 hours ago' },
    { id: 2, type: 'donation', action: 'Donation received', user: 'Priya Sharma', time: '4 hours ago' },
    { id: 3, type: 'event', action: 'Event created', user: 'Admin', time: '1 day ago' },
    { id: 4, type: 'project', action: 'Project status updated', user: 'Team Lead', time: '2 days ago' }
  ]);

  const [quickActions] = useState([
    { title: 'Add New Member', icon: '👤', link: '/admin/members/add', color: '#007BFF' },
    { title: 'Create Event', icon: '📅', link: '/admin/events/create', color: '#28A745' },
    { title: 'Manage Donations', icon: '💰', link: '/admin/donations', color: '#FFC107' },
    { title: 'View Reports', icon: '📊', link: '/admin/reports', color: '#DC3545' },
    { title: 'Settings', icon: '⚙️', link: '/admin/settings', color: '#6C757D' },
    { title: 'User Management', icon: '👥', link: '/admin/users', color: '#17A2B8' }
  ]);

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome back! Here's what's happening with Sankalp Youth Organisation</p>
      </div>

      {/* Statistics Cards */}
      <motion.div 
        className="stats-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalMembers.toLocaleString()}</h3>
            <p>Total Members</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📋</div>
          <div className="stat-content">
            <h3>{stats.activeProjects}</h3>
            <p>Active Projects</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>₹{(stats.totalDonations / 100000).toFixed(1)}L</h3>
            <p>Total Donations</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🤝</div>
          <div className="stat-content">
            <h3>{stats.volunteers}</h3>
            <p>Active Volunteers</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>{stats.eventsThisMonth}</h3>
            <p>Events This Month</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{stats.pendingRequests}</h3>
            <p>Pending Requests</p>
          </div>
        </div>
      </motion.div>

      <div className="dashboard-content">
        {/* Quick Actions */}
        <motion.div 
          className="quick-actions-section"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Quick Actions</h2>
          <div className="quick-actions-grid">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.link} className="quick-action-card">
                <div className="action-icon" style={{ backgroundColor: action.color }}>
                  {action.icon}
                </div>
                <h3>{action.title}</h3>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Recent Activities */}
        <motion.div 
          className="recent-activities-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2>Recent Activities</h2>
          <div className="activities-list">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="activity-item">
                <div className={`activity-icon ${activity.type}`}>
                  {activity.type === 'member' && '👤'}
                  {activity.type === 'donation' && '💰'}
                  {activity.type === 'event' && '📅'}
                  {activity.type === 'project' && '📋'}
                </div>
                <div className="activity-content">
                  <p className="activity-action">{activity.action}</p>
                  <p className="activity-user">{activity.user}</p>
                </div>
                <span className="activity-time">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard; 