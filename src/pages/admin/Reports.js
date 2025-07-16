import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/admin/Reports.css';

const Reports = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' });

  const [analyticsData] = useState({
    overview: {
      totalMembers: 15420,
      activeVolunteers: 890,
      totalDonations: 1250000,
      eventsThisYear: 45,
      projectsCompleted: 23,
      newMembersThisMonth: 156
    },
    donations: {
      monthly: [
        { month: 'Jan', amount: 125000 },
        { month: 'Feb', amount: 180000 },
        { month: 'Mar', amount: 145000 },
        { month: 'Apr', amount: 220000 },
        { month: 'May', amount: 195000 },
        { month: 'Jun', amount: 250000 }
      ],
      categories: [
        { category: 'General Donation', amount: 450000, percentage: 35 },
        { category: 'Education Fund', amount: 320000, percentage: 25 },
        { category: 'Health Fund', amount: 280000, percentage: 22 },
        { category: 'Corporate Donation', amount: 200000, percentage: 18 }
      ]
    },
    members: {
      growth: [
        { month: 'Jan', count: 14200 },
        { month: 'Feb', count: 14500 },
        { month: 'Mar', count: 14800 },
        { month: 'Apr', count: 15000 },
        { month: 'May', count: 15200 },
        { month: 'Jun', count: 15420 }
      ],
      demographics: [
        { age: '18-25', count: 6200, percentage: 40 },
        { age: '26-35', count: 4650, percentage: 30 },
        { age: '36-45', count: 3080, percentage: 20 },
        { age: '45+', count: 1490, percentage: 10 }
      ]
    },
    events: {
      monthly: [
        { month: 'Jan', events: 8, participants: 450 },
        { month: 'Feb', events: 12, participants: 680 },
        { month: 'Mar', events: 10, participants: 520 },
        { month: 'Apr', events: 15, participants: 890 },
        { month: 'May', events: 13, participants: 720 },
        { month: 'Jun', events: 18, participants: 1100 }
      ],
      categories: [
        { category: 'Workshop', count: 25, participants: 1200 },
        { category: 'Community Service', count: 18, participants: 950 },
        { category: 'Health', count: 12, participants: 680 },
        { category: 'Education', count: 15, participants: 890 }
      ]
    }
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'donations', label: 'Donations', icon: '💰' },
    { id: 'members', label: 'Members', icon: '👥' },
    { id: 'events', label: 'Events', icon: '📅' },
    { id: 'export', label: 'Export', icon: '📤' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR'
    }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  const generateChartData = (data, type) => {
    if (type === 'bar') {
      return data.map(item => ({
        label: item.month || item.category || item.age,
        value: item.amount || item.count || item.events || item.participants,
        percentage: item.percentage
      }));
    }
    return data;
  };

  return (
    <div className="admin-reports">
      <div className="reports-header">
        <h1>Reports & Analytics</h1>
        <p>Comprehensive insights and data analysis for the organization</p>
      </div>

      {/* Date Range Selector */}
      <div className="date-range-selector">
        <div className="date-inputs">
          <label>Date Range:</label>
          <input
            type="date"
            value={dateRange.start}
            onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
            className="date-input"
          />
          <span>to</span>
          <input
            type="date"
            value={dateRange.end}
            onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
            className="date-input"
          />
        </div>
        <button className="generate-report-btn">Generate Report</button>
      </div>

      {/* Tab Navigation */}
      <div className="reports-tabs">
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

      {/* Reports Content */}
      <motion.div
        className="reports-content"
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'overview' && (
          <div className="overview-section">
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-content">
                  <h3>{formatNumber(analyticsData.overview.totalMembers)}</h3>
                  <p>Total Members</p>
                  <span className="stat-change positive">+{analyticsData.overview.newMembersThisMonth} this month</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🤝</div>
                <div className="stat-content">
                  <h3>{formatNumber(analyticsData.overview.activeVolunteers)}</h3>
                  <p>Active Volunteers</p>
                  <span className="stat-change positive">+12% from last month</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <div className="stat-content">
                  <h3>{formatCurrency(analyticsData.overview.totalDonations)}</h3>
                  <p>Total Donations</p>
                  <span className="stat-change positive">+8% from last year</span>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📅</div>
                <div className="stat-content">
                  <h3>{analyticsData.overview.eventsThisYear}</h3>
                  <p>Events This Year</p>
                  <span className="stat-change positive">+5 from last year</span>
                </div>
              </div>
            </div>

            <div className="charts-section">
              <div className="chart-container">
                <h3>Monthly Growth Trends</h3>
                <div className="chart-placeholder">
                  <div className="chart-bars">
                    {analyticsData.members.growth.map((item, index) => (
                      <div key={index} className="chart-bar">
                        <div 
                          className="bar-fill" 
                          style={{ height: `${(item.count / 16000) * 100}%` }}
                        ></div>
                        <span className="bar-label">{item.month}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="chart-container">
                <h3>Donation Categories</h3>
                <div className="pie-chart-placeholder">
                  {analyticsData.donations.categories.map((item, index) => (
                    <div key={index} className="pie-segment">
                      <div className="segment-info">
                        <span className="segment-label">{item.category}</span>
                        <span className="segment-value">{formatCurrency(item.amount)}</span>
                      </div>
                      <div className="segment-bar">
                        <div 
                          className="bar-fill" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'donations' && (
          <div className="donations-section">
            <div className="donations-summary">
              <div className="summary-card">
                <h3>Donation Trends</h3>
                <div className="trend-chart">
                  {analyticsData.donations.monthly.map((item, index) => (
                    <div key={index} className="trend-point">
                      <div className="point-value">{formatCurrency(item.amount)}</div>
                      <div className="point-label">{item.month}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="donations-breakdown">
              <h3>Donation Categories Breakdown</h3>
              <div className="breakdown-list">
                {analyticsData.donations.categories.map((item, index) => (
                  <div key={index} className="breakdown-item">
                    <div className="item-info">
                      <span className="item-category">{item.category}</span>
                      <span className="item-amount">{formatCurrency(item.amount)}</span>
                    </div>
                    <div className="item-bar">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="item-percentage">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'members' && (
          <div className="members-section">
            <div className="members-growth">
              <h3>Member Growth</h3>
              <div className="growth-chart">
                {analyticsData.members.growth.map((item, index) => (
                  <div key={index} className="growth-point">
                    <div className="point-value">{formatNumber(item.count)}</div>
                    <div className="point-label">{item.month}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="members-demographics">
              <h3>Age Demographics</h3>
              <div className="demographics-list">
                {analyticsData.members.demographics.map((item, index) => (
                  <div key={index} className="demographic-item">
                    <div className="demo-info">
                      <span className="demo-age">{item.age}</span>
                      <span className="demo-count">{formatNumber(item.count)}</span>
                    </div>
                    <div className="demo-bar">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="demo-percentage">{item.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'events' && (
          <div className="events-section">
            <div className="events-summary">
              <div className="summary-card">
                <h3>Events Overview</h3>
                <div className="events-stats">
                  <div className="event-stat">
                    <span className="stat-number">{analyticsData.events.monthly.reduce((sum, item) => sum + item.events, 0)}</span>
                    <span className="stat-label">Total Events</span>
                  </div>
                  <div className="event-stat">
                    <span className="stat-number">{analyticsData.events.monthly.reduce((sum, item) => sum + item.participants, 0)}</span>
                    <span className="stat-label">Total Participants</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="events-categories">
              <h3>Events by Category</h3>
              <div className="category-list">
                {analyticsData.events.categories.map((item, index) => (
                  <div key={index} className="category-item">
                    <div className="category-info">
                      <span className="category-name">{item.category}</span>
                      <span className="category-count">{item.count} events</span>
                    </div>
                    <div className="category-bar">
                      <div 
                        className="bar-fill" 
                        style={{ width: `${(item.count / 70) * 100}%` }}
                      ></div>
                    </div>
                    <span className="category-participants">{item.participants} participants</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'export' && (
          <div className="export-section">
            <div className="export-options">
              <h3>Export Reports</h3>
              <div className="export-cards">
                <div className="export-card">
                  <div className="export-icon">📊</div>
                  <h4>Financial Report</h4>
                  <p>Export donation and financial data</p>
                  <button className="export-btn">Export PDF</button>
                </div>
                <div className="export-card">
                  <div className="export-icon">👥</div>
                  <h4>Member Report</h4>
                  <p>Export member statistics and demographics</p>
                  <button className="export-btn">Export PDF</button>
                </div>
                <div className="export-card">
                  <div className="export-icon">📅</div>
                  <h4>Events Report</h4>
                  <p>Export event participation and outcomes</p>
                  <button className="export-btn">Export PDF</button>
                </div>
                <div className="export-card">
                  <div className="export-icon">📈</div>
                  <h4>Analytics Report</h4>
                  <p>Export comprehensive analytics data</p>
                  <button className="export-btn">Export PDF</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Reports; 