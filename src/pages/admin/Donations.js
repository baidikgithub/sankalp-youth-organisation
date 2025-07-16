import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/admin/Donations.css';

const Donations = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      donorName: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      amount: 5000,
      currency: 'INR',
      paymentMethod: 'Online Transfer',
      status: 'completed',
      date: '2024-02-15',
      category: 'General Donation',
      message: 'Happy to support the cause!',
      transactionId: 'TXN123456789'
    },
    {
      id: 2,
      donorName: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      amount: 2500,
      currency: 'INR',
      paymentMethod: 'Credit Card',
      status: 'completed',
      date: '2024-02-14',
      category: 'Education Fund',
      message: 'For children\'s education',
      transactionId: 'TXN123456790'
    },
    {
      id: 3,
      donorName: 'Amit Patel',
      email: 'amit.patel@email.com',
      amount: 10000,
      currency: 'INR',
      paymentMethod: 'UPI',
      status: 'pending',
      date: '2024-02-13',
      category: 'Health Fund',
      message: 'Supporting healthcare initiatives',
      transactionId: 'TXN123456791'
    },
    {
      id: 4,
      donorName: 'Neha Singh',
      email: 'neha.singh@email.com',
      amount: 1500,
      currency: 'INR',
      paymentMethod: 'Debit Card',
      status: 'failed',
      date: '2024-02-12',
      category: 'General Donation',
      message: '',
      transactionId: 'TXN123456792'
    },
    {
      id: 5,
      donorName: 'Corporate XYZ Ltd',
      email: 'donations@xyzcorp.com',
      amount: 50000,
      currency: 'INR',
      paymentMethod: 'Bank Transfer',
      status: 'completed',
      date: '2024-02-10',
      category: 'Corporate Donation',
      message: 'Corporate social responsibility initiative',
      transactionId: 'TXN123456793'
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const filteredDonations = donations.filter(donation => {
    const matchesSearch = donation.donorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         donation.transactionId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || donation.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || donation.category === categoryFilter;
    
    let matchesDate = true;
    if (dateRange.start && dateRange.end) {
      const donationDate = new Date(donation.date);
      const startDate = new Date(dateRange.start);
      const endDate = new Date(dateRange.end);
      matchesDate = donationDate >= startDate && donationDate <= endDate;
    }
    
    return matchesSearch && matchesStatus && matchesCategory && matchesDate;
  });

  const totalAmount = donations
    .filter(d => d.status === 'completed')
    .reduce((sum, d) => sum + d.amount, 0);

  const pendingAmount = donations
    .filter(d => d.status === 'pending')
    .reduce((sum, d) => sum + d.amount, 0);

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#28A745';
      case 'pending': return '#FFC107';
      case 'failed': return '#DC3545';
      default: return '#6C757D';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'General Donation': return '#007BFF';
      case 'Education Fund': return '#28A745';
      case 'Health Fund': return '#DC3545';
      case 'Corporate Donation': return '#6F42C1';
      default: return '#6C757D';
    }
  };

  const formatCurrency = (amount, currency) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currency
    }).format(amount);
  };

  return (
    <div className="admin-donations">
      <div className="donations-header">
        <h1>Donations Management</h1>
        <p>Track and manage all donations received by the organization</p>
      </div>

      {/* Statistics Cards */}
      <motion.div 
        className="donations-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-content">
            <h3>{formatCurrency(totalAmount, 'INR')}</h3>
            <p>Total Received</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{formatCurrency(pendingAmount, 'INR')}</h3>
            <p>Pending Amount</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <h3>{donations.length}</h3>
            <p>Total Donations</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{donations.filter(d => d.status === 'completed').length}</h3>
            <p>Successful</p>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="donations-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search by donor name, email, or transaction ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-section">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            <option value="General Donation">General Donation</option>
            <option value="Education Fund">Education Fund</option>
            <option value="Health Fund">Health Fund</option>
            <option value="Corporate Donation">Corporate Donation</option>
          </select>

          <div className="date-range">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              className="date-input"
              placeholder="Start Date"
            />
            <span>to</span>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              className="date-input"
              placeholder="End Date"
            />
          </div>
        </div>

        <button className="export-btn">
          📊 Export Report
        </button>
      </div>

      {/* Donations Table */}
      <div className="donations-table-container">
        <table className="donations-table">
          <thead>
            <tr>
              <th>Donor</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Payment Method</th>
              <th>Status</th>
              <th>Date</th>
              <th>Transaction ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDonations.map((donation) => (
              <motion.tr
                key={donation.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td>
                  <div className="donor-info">
                    <div className="donor-name">{donation.donorName}</div>
                    <div className="donor-email">{donation.email}</div>
                  </div>
                </td>
                <td>
                  <div className="amount-info">
                    <span className="amount">{formatCurrency(donation.amount, donation.currency)}</span>
                  </div>
                </td>
                <td>
                  <span className={`category-badge ${donation.category.toLowerCase().replace(' ', '-')}`}>
                    {donation.category}
                  </span>
                </td>
                <td>{donation.paymentMethod}</td>
                <td>
                  <span className={`status-badge ${donation.status}`}>
                    {donation.status}
                  </span>
                </td>
                <td>{new Date(donation.date).toLocaleDateString()}</td>
                <td>
                  <span className="transaction-id">{donation.transactionId}</span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button className="action-btn view-btn">View</button>
                    <button className="action-btn edit-btn">Edit</button>
                    {donation.status === 'pending' && (
                      <button className="action-btn approve-btn">Approve</button>
                    )}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Donation Details Modal Placeholder */}
      <div className="donation-summary">
        <div className="summary-card">
          <h3>Recent Donations</h3>
          <div className="recent-donations">
            {donations.slice(0, 5).map((donation) => (
              <div key={donation.id} className="recent-donation-item">
                <div className="donation-amount">
                  {formatCurrency(donation.amount, donation.currency)}
                </div>
                <div className="donation-info">
                  <div className="donor-name">{donation.donorName}</div>
                  <div className="donation-date">{new Date(donation.date).toLocaleDateString()}</div>
                </div>
                <div className={`donation-status ${donation.status}`}>
                  {donation.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations; 