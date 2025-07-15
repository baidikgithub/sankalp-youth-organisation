import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/admin/Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    organizationName: 'Sankalp Youth Organisation',
    email: 'info@sankalpyouth.org',
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India',
    website: 'www.sankalpyouth.org',
    socialMedia: {
      facebook: 'https://facebook.com/sankalpyouth',
      twitter: 'https://twitter.com/sankalpyouth',
      instagram: 'https://instagram.com/sankalpyouth',
      linkedin: 'https://linkedin.com/company/sankalpyouth'
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    }
  });

  const handleSettingChange = (category, key, value) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [key]: value
      }
    }));
  };

  const handleSave = () => {
    console.log('Settings saved:', settings);
    // Here you would typically make an API call to save settings
  };

  const tabs = [
    { id: 'general', label: 'General Settings', icon: '⚙️' },
    { id: 'organization', label: 'Organization Info', icon: '🏢' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'social', label: 'Social Media', icon: '📱' }
  ];

  return (
    <div className="admin-settings">
      <div className="settings-header">
        <h1>Settings</h1>
        <p>Manage your organization's settings and preferences</p>
      </div>

      <div className="settings-container">
        {/* Tab Navigation */}
        <div className="settings-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <motion.div
          className="settings-content"
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'general' && (
            <div className="settings-section">
              <h2>General Settings</h2>
              <div className="setting-group">
                <label>Organization Name</label>
                <input
                  type="text"
                  value={settings.organizationName}
                  onChange={(e) => setSettings(prev => ({ ...prev, organizationName: e.target.value }))}
                />
              </div>
              <div className="setting-group">
                <label>Contact Email</label>
                <input
                  type="email"
                  value={settings.email}
                  onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="setting-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={settings.phone}
                  onChange={(e) => setSettings(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>
            </div>
          )}

          {activeTab === 'organization' && (
            <div className="settings-section">
              <h2>Organization Information</h2>
              <div className="setting-group">
                <label>Address</label>
                <textarea
                  value={settings.address}
                  onChange={(e) => setSettings(prev => ({ ...prev, address: e.target.value }))}
                  rows="3"
                />
              </div>
              <div className="setting-group">
                <label>Website</label>
                <input
                  type="url"
                  value={settings.website}
                  onChange={(e) => setSettings(prev => ({ ...prev, website: e.target.value }))}
                />
              </div>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h2>Notification Preferences</h2>
              <div className="setting-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.emailNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'emailNotifications', e.target.checked)}
                  />
                  Email Notifications
                </label>
              </div>
              <div className="setting-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.smsNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'smsNotifications', e.target.checked)}
                  />
                  SMS Notifications
                </label>
              </div>
              <div className="setting-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.notifications.pushNotifications}
                    onChange={(e) => handleSettingChange('notifications', 'pushNotifications', e.target.checked)}
                  />
                  Push Notifications
                </label>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-section">
              <h2>Security Settings</h2>
              <div className="setting-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    checked={settings.security.twoFactorAuth}
                    onChange={(e) => handleSettingChange('security', 'twoFactorAuth', e.target.checked)}
                  />
                  Enable Two-Factor Authentication
                </label>
              </div>
              <div className="setting-group">
                <label>Session Timeout (minutes)</label>
                <input
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleSettingChange('security', 'sessionTimeout', parseInt(e.target.value))}
                  min="5"
                  max="120"
                />
              </div>
              <div className="setting-group">
                <label>Password Expiry (days)</label>
                <input
                  type="number"
                  value={settings.security.passwordExpiry}
                  onChange={(e) => handleSettingChange('security', 'passwordExpiry', parseInt(e.target.value))}
                  min="30"
                  max="365"
                />
              </div>
            </div>
          )}

          {activeTab === 'social' && (
            <div className="settings-section">
              <h2>Social Media Links</h2>
              <div className="setting-group">
                <label>Facebook</label>
                <input
                  type="url"
                  value={settings.socialMedia.facebook}
                  onChange={(e) => handleSettingChange('socialMedia', 'facebook', e.target.value)}
                />
              </div>
              <div className="setting-group">
                <label>Twitter</label>
                <input
                  type="url"
                  value={settings.socialMedia.twitter}
                  onChange={(e) => handleSettingChange('socialMedia', 'twitter', e.target.value)}
                />
              </div>
              <div className="setting-group">
                <label>Instagram</label>
                <input
                  type="url"
                  value={settings.socialMedia.instagram}
                  onChange={(e) => handleSettingChange('socialMedia', 'instagram', e.target.value)}
                />
              </div>
              <div className="setting-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  value={settings.socialMedia.linkedin}
                  onChange={(e) => handleSettingChange('socialMedia', 'linkedin', e.target.value)}
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>

      {/* Save Button */}
      <div className="settings-actions">
        <button className="save-button" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default Settings; 