import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MemberDues = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMonth, setSelectedMonth] = useState('2024-03');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const members = [
    {
      id: 1,
      name: "Rajesh Kumar",
      membershipId: "AYO001",
      membershipType: "Executive",
      email: "rajesh.kumar@email.com",
      phone: "+91 98765 43210",
      joinDate: "2023-01-15",
      monthlyDue: 500,
      payments: {
        "2024-01": { status: "paid", amount: 500, paidDate: "2024-01-05", method: "UPI" },
        "2024-02": { status: "paid", amount: 500, paidDate: "2024-02-03", method: "Card" },
        "2024-03": { status: "pending", amount: 500, dueDate: "2024-03-31" },
        "2024-04": { status: "overdue", amount: 500, dueDate: "2024-04-30" }
      }
    },
    {
      id: 2,
      name: "Priya Sharma",
      membershipId: "AYO002",
      membershipType: "Regular",
      email: "priya.sharma@email.com",
      phone: "+91 87654 32109",
      joinDate: "2023-03-20",
      monthlyDue: 300,
      payments: {
        "2024-01": { status: "paid", amount: 300, paidDate: "2024-01-10", method: "Bank Transfer" },
        "2024-02": { status: "paid", amount: 300, paidDate: "2024-02-08", method: "UPI" },
        "2024-03": { status: "paid", amount: 300, paidDate: "2024-03-12", method: "Cash" },
        "2024-04": { status: "pending", amount: 300, dueDate: "2024-04-30" }
      }
    },
    {
      id: 3,
      name: "Amit Patel",
      membershipId: "AYO003",
      membershipType: "Student",
      email: "amit.patel@email.com",
      phone: "+91 76543 21098",
      joinDate: "2023-06-10",
      monthlyDue: 200,
      payments: {
        "2024-01": { status: "paid", amount: 200, paidDate: "2024-01-15", method: "UPI" },
        "2024-02": { status: "overdue", amount: 200, dueDate: "2024-02-28" },
        "2024-03": { status: "overdue", amount: 200, dueDate: "2024-03-31" },
        "2024-04": { status: "pending", amount: 200, dueDate: "2024-04-30" }
      }
    },
    {
      id: 4,
      name: "Sneha Reddy",
      membershipId: "AYO004",
      membershipType: "Executive",
      email: "sneha.reddy@email.com",
      phone: "+91 65432 10987",
      joinDate: "2022-11-05",
      monthlyDue: 500,
      payments: {
        "2024-01": { status: "paid", amount: 500, paidDate: "2024-01-01", method: "Auto-Debit" },
        "2024-02": { status: "paid", amount: 500, paidDate: "2024-02-01", method: "Auto-Debit" },
        "2024-03": { status: "paid", amount: 500, paidDate: "2024-03-01", method: "Auto-Debit" },
        "2024-04": { status: "paid", amount: 500, paidDate: "2024-04-01", method: "Auto-Debit" }
      }
    },
    {
      id: 5,
      name: "Vikram Singh",
      membershipId: "AYO005",
      membershipType: "Regular",
      email: "vikram.singh@email.com",
      phone: "+91 54321 09876",
      joinDate: "2023-08-22",
      monthlyDue: 300,
      payments: {
        "2024-01": { status: "paid", amount: 300, paidDate: "2024-01-20", method: "Card" },
        "2024-02": { status: "paid", amount: 300, paidDate: "2024-02-18", method: "UPI" },
        "2024-03": { status: "pending", amount: 300, dueDate: "2024-03-31" },
        "2024-04": { status: "pending", amount: 300, dueDate: "2024-04-30" }
      }
    }
  ];

  const membershipTypes = [
    { type: "Executive", monthlyFee: 500, benefits: ["All events access", "Voting rights", "Leadership opportunities"] },
    { type: "Regular", monthlyFee: 300, benefits: ["Most events access", "Newsletter", "Community network"] },
    { type: "Student", monthlyFee: 200, benefits: ["Student events", "Mentorship", "Skill workshops"] },
    { type: "Honorary", monthlyFee: 0, benefits: ["Recognition events", "Advisory role", "Lifetime access"] }
  ];

  // Filter members based on search and status
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.membershipId.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterStatus === 'all') return matchesSearch;
    
    const monthPayment = member.payments[selectedMonth];
    const matchesStatus = monthPayment && monthPayment.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  // Calculate statistics
  const calculateStats = () => {
    const totalMembers = members.length;
    const currentMonth = selectedMonth;
    
    let paidCount = 0;
    let pendingCount = 0;
    let overdueCount = 0;
    let totalCollected = 0;
    let totalPending = 0;

    members.forEach(member => {
      const payment = member.payments[currentMonth];
      if (payment) {
        if (payment.status === 'paid') {
          paidCount++;
          totalCollected += payment.amount;
        } else if (payment.status === 'pending') {
          pendingCount++;
          totalPending += payment.amount;
        } else if (payment.status === 'overdue') {
          overdueCount++;
          totalPending += payment.amount;
        }
      } else {
        pendingCount++;
        totalPending += member.monthlyDue;
      }
    });

    return {
      totalMembers,
      paidCount,
      pendingCount,
      overdueCount,
      totalCollected,
      totalPending,
      collectionRate: totalMembers > 0 ? ((paidCount / totalMembers) * 100).toFixed(1) : 0
    };
  };

  const stats = calculateStats();

  const getStatusColor = (status) => {
    switch (status) {
      case 'paid': return '#28a745';
      case 'pending': return '#ffc107';
      case 'overdue': return '#dc3545';
      default: return '#6c757d';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'paid': return 'fas fa-check-circle';
      case 'pending': return 'fas fa-clock';
      case 'overdue': return 'fas fa-exclamation-triangle';
      default: return 'fas fa-question-circle';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Member Dues Management</h1>
        <p className="page-subtitle">Track and manage monthly membership payments</p>
      </motion.div>

      <div className="container">
        {/* Tab Navigation */}
        <motion.div
          className="tab-navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <i className="fas fa-chart-pie"></i>
            Overview
          </button>
          <button
            className={`tab-btn ${activeTab === 'members' ? 'active' : ''}`}
            onClick={() => setActiveTab('members')}
          >
            <i className="fas fa-users"></i>
            Members
          </button>
          <button
            className={`tab-btn ${activeTab === 'membership' ? 'active' : ''}`}
            onClick={() => setActiveTab('membership')}
          >
            <i className="fas fa-id-card"></i>
            Membership Types
          </button>
        </motion.div>

        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Month Selector */}
              <motion.div className="controls-section" variants={itemVariants}>
                <div className="month-selector">
                  <label>Select Month:</label>
                  <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                    <option value="2024-01">January 2024</option>
                    <option value="2024-02">February 2024</option>
                    <option value="2024-03">March 2024</option>
                    <option value="2024-04">April 2024</option>
                  </select>
                </div>
              </motion.div>

              {/* Statistics Cards */}
              <motion.div className="stats-grid" variants={itemVariants}>
                <div className="stat-card">
                  <div className="stat-icon total">
                    <i className="fas fa-users"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.totalMembers}</div>
                    <div className="stat-label">Total Members</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon paid">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.paidCount}</div>
                    <div className="stat-label">Paid</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon pending">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.pendingCount}</div>
                    <div className="stat-label">Pending</div>
                  </div>
                </div>

                <div className="stat-card">
                  <div className="stat-icon overdue">
                    <i className="fas fa-exclamation-triangle"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stats.overdueCount}</div>
                    <div className="stat-label">Overdue</div>
                  </div>
                </div>

                <div className="stat-card wide">
                  <div className="stat-icon money">
                    <i className="fas fa-rupee-sign"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">₹{stats.totalCollected.toLocaleString()}</div>
                    <div className="stat-label">Collected This Month</div>
                  </div>
                </div>

                <div className="stat-card wide">
                  <div className="stat-icon pending-money">
                    <i className="fas fa-hourglass-half"></i>
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">₹{stats.totalPending.toLocaleString()}</div>
                    <div className="stat-label">Pending Amount</div>
                  </div>
                </div>
              </motion.div>

              {/* Collection Rate */}
              <motion.div className="collection-rate-card" variants={itemVariants}>
                <h3>Collection Rate: {stats.collectionRate}%</h3>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${stats.collectionRate}%` }}
                  ></div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Members Tab */}
          {activeTab === 'members' && (
            <motion.div
              key="members"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Controls */}
              <motion.div className="controls-section" variants={itemVariants}>
                <div className="search-filter-row">
                  <div className="search-box">
                    <i className="fas fa-search"></i>
                    <input
                      type="text"
                      placeholder="Search members..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="overdue">Overdue</option>
                  </select>
                  <select
                    value={selectedMonth}
                    onChange={(e) => setSelectedMonth(e.target.value)}
                  >
                    <option value="2024-01">January 2024</option>
                    <option value="2024-02">February 2024</option>
                    <option value="2024-03">March 2024</option>
                    <option value="2024-04">April 2024</option>
                  </select>
                </div>
              </motion.div>

              {/* Members Table */}
              <motion.div className="members-table-container" variants={itemVariants}>
                <div className="members-table">
                  <div className="table-header">
                    <div>Member Details</div>
                    <div>Membership</div>
                    <div>Monthly Due</div>
                    <div>Payment Status</div>
                    <div>Action</div>
                  </div>
                  {filteredMembers.map((member) => {
                    const payment = member.payments[selectedMonth];
                    const status = payment ? payment.status : 'pending';
                    
                    return (
                      <motion.div
                        key={member.id}
                        className="table-row"
                        whileHover={{ backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
                      >
                        <div className="member-info">
                          <div className="member-name">{member.name}</div>
                          <div className="member-id">{member.membershipId}</div>
                          <div className="member-contact">{member.email}</div>
                        </div>
                        <div className="membership-info">
                          <div className="membership-type">{member.membershipType}</div>
                          <div className="join-date">Joined: {new Date(member.joinDate).toLocaleDateString()}</div>
                        </div>
                        <div className="due-amount">₹{member.monthlyDue}</div>
                        <div className="payment-status">
                          <div 
                            className="status-badge"
                            style={{ backgroundColor: getStatusColor(status) }}
                          >
                            <i className={getStatusIcon(status)}></i>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </div>
                          {payment && payment.status === 'paid' && (
                            <div className="payment-details">
                              Paid: {new Date(payment.paidDate).toLocaleDateString()}
                              <br />
                              Method: {payment.method}
                            </div>
                          )}
                          {payment && payment.status !== 'paid' && (
                            <div className="due-date">
                              Due: {new Date(payment.dueDate).toLocaleDateString()}
                            </div>
                          )}
                        </div>
                        <div className="actions">
                          {status !== 'paid' && (
                            <motion.button
                              className="pay-btn"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Mark Paid
                            </motion.button>
                          )}
                          <motion.button
                            className="view-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            View Details
                          </motion.button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Membership Types Tab */}
          {activeTab === 'membership' && (
            <motion.div
              key="membership"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <motion.div className="membership-types-grid" variants={itemVariants}>
                {membershipTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    className="membership-card"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="membership-header">
                      <h3>{type.type} Membership</h3>
                      <div className="membership-fee">
                        ₹{type.monthlyFee}
                        <span>/month</span>
                      </div>
                    </div>
                    <div className="membership-benefits">
                      <h4>Benefits:</h4>
                      <ul>
                        {type.benefits.map((benefit, idx) => (
                          <li key={idx}>
                            <i className="fas fa-check"></i>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Add New Member Button */}
              <motion.div className="add-member-section" variants={itemVariants}>
                <motion.button
                  className="add-member-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-plus"></i>
                  Add New Member
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx>{`
        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 15px 25px;
          border: 2px solid #007BFF;
          background: rgba(255, 255, 255, 0.9);
          color: #007BFF;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
          backdrop-filter: blur(10px);
        }

        .tab-btn:hover,
        .tab-btn.active {
          background: #007BFF;
          color: white;
        }

        .controls-section {
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .month-selector {
          display: flex;
          align-items: center;
          gap: 15px;
          justify-content: center;
        }

        .month-selector label {
          font-weight: 600;
          color: #333;
        }

        .month-selector select {
          padding: 10px 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
        }

        .search-filter-row {
          display: flex;
          gap: 20px;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          position: relative;
          flex: 1;
          min-width: 250px;
        }

        .search-box i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .search-box input {
          width: 100%;
          padding: 12px 15px 12px 45px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 30px 0;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-card.wide {
          grid-column: span 2;
        }

        .stat-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .stat-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }

        .stat-icon.total { background: #007BFF; }
        .stat-icon.paid { background: #28a745; }
        .stat-icon.pending { background: #ffc107; }
        .stat-icon.overdue { background: #dc3545; }
        .stat-icon.money { background: #28a745; }
        .stat-icon.pending-money { background: #ffc107; }

        .stat-value {
          font-size: 1.8rem;
          font-weight: bold;
          color: #333;
        }

        .stat-label {
          color: #666;
          font-weight: 600;
        }

        .collection-rate-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          margin: 30px 0;
        }

        .collection-rate-card h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        .progress-bar {
          width: 100%;
          height: 20px;
          background: #e9ecef;
          border-radius: 10px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(135deg, #28a745, #20c997);
          border-radius: 10px;
          transition: width 0.3s ease;
        }

        .members-table-container {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .members-table {
          width: 100%;
        }

        .table-header {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1.5fr 1fr;
          gap: 20px;
          padding: 20px;
          background: #f8f9fa;
          font-weight: 600;
          color: #333;
          border-bottom: 2px solid #e9ecef;
        }

        .table-row {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1fr 1.5fr 1fr;
          gap: 20px;
          padding: 20px;
          border-bottom: 1px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .member-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .member-name {
          font-weight: 600;
          color: #333;
        }

        .member-id {
          color: #007BFF;
          font-size: 0.9rem;
        }

        .member-contact {
          color: #666;
          font-size: 0.9rem;
        }

        .membership-info {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .membership-type {
          font-weight: 600;
          color: #333;
        }

        .join-date {
          color: #666;
          font-size: 0.9rem;
        }

        .due-amount {
          font-weight: 600;
          color: #333;
          font-size: 1.1rem;
        }

        .payment-status {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .status-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
          width: fit-content;
        }

        .payment-details,
        .due-date {
          font-size: 0.8rem;
          color: #666;
        }

        .actions {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pay-btn,
        .view-btn {
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pay-btn {
          background: #28a745;
          color: white;
        }

        .view-btn {
          background: #007BFF;
          color: white;
        }

        .membership-types-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .membership-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .membership-header {
          text-align: center;
          margin-bottom: 25px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }

        .membership-header h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .membership-fee {
          font-size: 2rem;
          font-weight: bold;
          color: #007BFF;
        }

        .membership-fee span {
          font-size: 1rem;
          color: #666;
        }

        .membership-benefits h4 {
          color: #333;
          margin-bottom: 15px;
        }

        .membership-benefits ul {
          list-style: none;
          padding: 0;
        }

        .membership-benefits li {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
          color: #666;
        }

        .membership-benefits i {
          color: #28a745;
        }

        .add-member-section {
          text-align: center;
          margin-top: 40px;
        }

        .add-member-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 30px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .add-member-btn:hover {
          background: linear-gradient(135deg, #0056b3, #003d82);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card.wide {
            grid-column: span 1;
          }

          .search-filter-row {
            flex-direction: column;
            align-items: stretch;
          }

          .search-box {
            min-width: auto;
          }

          .table-header,
          .table-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .membership-types-grid {
            grid-template-columns: 1fr;
          }

          .tab-navigation {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MemberDues; 