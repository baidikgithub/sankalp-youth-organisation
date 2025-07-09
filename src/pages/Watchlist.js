import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Watchlist = () => {
  const [watchlistItems, setWatchlistItems] = useState([
    {
      id: 1,
      title: "Blood Donation Camp",
      date: "2024-10-25",
      location: "Community Center",
      status: "upcoming",
      category: "health",
      description: "Help save lives by donating blood",
      image: "https://via.placeholder.com/300x150/DC3545/FFFFFF?text=Blood+Camp",
      priority: "high"
    },
    {
      id: 2,
      title: "Cloth Distribution Drive",
      date: "2024-10-30",
      location: "Local School",
      status: "upcoming",
      category: "donation",
      description: "Distribute clothes to those in need",
      image: "https://via.placeholder.com/300x150/28A745/FFFFFF?text=Cloth+Drive",
      priority: "medium"
    },
    {
      id: 3,
      title: "Educational Workshop",
      date: "2024-11-05",
      location: "Online",
      status: "upcoming",
      category: "education",
      description: "Free workshop on digital literacy",
      image: "https://via.placeholder.com/300x150/007BFF/FFFFFF?text=Workshop",
      priority: "low"
    },
    {
      id: 4,
      title: "Tree Plantation",
      date: "2024-09-15",
      location: "City Park",
      status: "completed",
      category: "environment",
      description: "Plant trees for a greener tomorrow",
      image: "https://via.placeholder.com/300x150/28A745/FFFFFF?text=Tree+Plant",
      priority: "high"
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const removeFromWatchlist = (id) => {
    setWatchlistItems(watchlistItems.filter(item => item.id !== id));
  };

  const changePriority = (id, newPriority) => {
    setWatchlistItems(watchlistItems.map(item => 
      item.id === id ? { ...item, priority: newPriority } : item
    ));
  };

  const filteredItems = watchlistItems.filter(item => {
    if (filter === 'all') return true;
    return item.status === filter || item.category === filter;
  });

  const sortedItems = filteredItems.sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(a.date) - new Date(b.date);
    }
    if (sortBy === 'priority') {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    return 0;
  });

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#7bed9f';
      default: return '#ddd';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#007BFF';
      case 'completed': return '#28a745';
      case 'cancelled': return '#dc3545';
      default: return '#6c757d';
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
    visible: { y: 0, opacity: 1 },
    exit: { 
      x: -300, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="page-container">
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">My Watchlist</h1>
        <p className="page-subtitle">Keep track of events and activities you're interested in</p>
      </motion.div>

      <div className="container">
        {/* Controls */}
        <motion.div
          className="watchlist-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="filter-section">
            <label>Filter by:</label>
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="all">All Items</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="donation">Donation</option>
              <option value="environment">Environment</option>
            </select>
          </div>

          <div className="sort-section">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="date">Date</option>
              <option value="priority">Priority</option>
            </select>
          </div>
        </motion.div>

        {/* Watchlist Items */}
        <motion.div
          className="watchlist-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {sortedItems.map((item) => (
              <motion.div
                key={item.id}
                className="watchlist-item"
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02, y: -5 }}
                exit="exit"
              >
                <div className="item-image">
                  <img src={item.image} alt={item.title} />
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(item.status) }}
                  >
                    {item.status}
                  </div>
                </div>

                <div className="item-content">
                  <div className="item-header">
                    <h3>{item.title}</h3>
                    <div 
                      className="priority-indicator"
                      style={{ backgroundColor: getPriorityColor(item.priority) }}
                      title={`${item.priority} priority`}
                    ></div>
                  </div>

                  <p className="item-description">{item.description}</p>

                  <div className="item-details">
                    <div className="detail-item">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <div className="detail-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="item-actions">
                    <select
                      value={item.priority}
                      onChange={(e) => changePriority(item.id, e.target.value)}
                      className="priority-select"
                    >
                      <option value="low">Low Priority</option>
                      <option value="medium">Medium Priority</option>
                      <option value="high">High Priority</option>
                    </select>

                    <motion.button
                      className="remove-btn"
                      onClick={() => removeFromWatchlist(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className="fas fa-trash"></i>
                      Remove
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {sortedItems.length === 0 && (
          <motion.div
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <i className="fas fa-heart"></i>
            <h3>Your watchlist is empty</h3>
            <p>Start adding events and activities you're interested in!</p>
          </motion.div>
        )}
      </div>

      <style jsx>{`
        .watchlist-controls {
          background: rgba(255, 255, 255, 0.95);
          padding: 20px;
          border-radius: 15px;
          margin-bottom: 30px;
          display: flex;
          gap: 30px;
          align-items: center;
          flex-wrap: wrap;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .filter-section,
        .sort-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .filter-section label,
        .sort-section label {
          font-weight: 600;
          color: #333;
        }

        .filter-section select,
        .sort-section select {
          padding: 8px 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          background: white;
          cursor: pointer;
        }

        .watchlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
        }

        .watchlist-item {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .item-image {
          position: relative;
          height: 150px;
          overflow: hidden;
        }

        .item-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          padding: 5px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .item-content {
          padding: 20px;
        }

        .item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }

        .item-header h3 {
          color: #333;
          margin: 0;
          font-size: 1.3rem;
        }

        .priority-indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
        }

        .item-description {
          color: #666;
          margin-bottom: 15px;
          line-height: 1.5;
        }

        .item-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #666;
          font-size: 0.9rem;
        }

        .detail-item i {
          color: #007BFF;
          width: 16px;
        }

        .item-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
        }

        .priority-select {
          padding: 8px 12px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          background: white;
          cursor: pointer;
          flex: 1;
        }

        .remove-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 15px;
          background: #dc3545;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .remove-btn:hover {
          background: #c82333;
        }

        .empty-state {
          text-align: center;
          padding: 60px 20px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
        }

        .empty-state i {
          font-size: 4rem;
          color: #ddd;
          margin-bottom: 20px;
        }

        .empty-state h3 {
          color: #333;
          margin-bottom: 10px;
        }

        .empty-state p {
          color: #666;
        }

        @media (max-width: 768px) {
          .watchlist-grid {
            grid-template-columns: 1fr;
          }
          
          .watchlist-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .filter-section,
          .sort-section {
            justify-content: space-between;
          }
        }
      `}</style>
    </div>
  );
};

export default Watchlist; 