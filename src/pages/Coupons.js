import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/pages/Coupons.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';

const Coupons = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedCoupon, setCopiedCoupon] = useState(null);

  const coupons = [
    {
      id: 1,
      code: "DONATE50",
      title: "First Time Donor",
      description: "Get 50% off on event merchandise for your first donation",
      discount: "50% OFF",
      category: "donation",
      validUntil: "2024-12-31",
      minAmount: 500,
      icon: "❤️",
      color: "#ff6b6b"
    },
    {
      id: 2,
      code: "EVENT20",
      title: "Event Participant",
      description: "20% discount on next event registration",
      discount: "20% OFF",
      category: "events",
      validUntil: "2024-11-30",
      minAmount: 200,
      icon: "🎉",
      color: "#4ecdc4"
    },
    {
      id: 3,
      code: "VOLUNTEER100",
      title: "Volunteer Special",
      description: "Free merchandise for volunteers with 10+ hours",
      discount: "FREE",
      category: "volunteer",
      validUntil: "2024-10-31",
      minAmount: 0,
      icon: "🤝",
      color: "#45b7d1"
    },
    {
      id: 4,
      code: "STUDENT30",
      title: "Student Discount",
      description: "30% off on all workshops and training programs",
      discount: "30% OFF",
      category: "education",
      validUntil: "2024-12-15",
      minAmount: 300,
      icon: "📚",
      color: "#f9ca24"
    },
    {
      id: 5,
      code: "HEALTH25",
      title: "Health Camp",
      description: "25% discount on health checkup camps",
      discount: "25% OFF",
      category: "health",
      validUntil: "2024-11-20",
      minAmount: 150,
      icon: "🏥",
      color: "#6c5ce7"
    },
    {
      id: 6,
      code: "FAMILY15",
      title: "Family Pack",
      description: "15% off when registering 3+ family members",
      discount: "15% OFF",
      category: "events",
      validUntil: "2024-12-25",
      minAmount: 1000,
      icon: "👨‍👩‍👧‍👦",
      color: "#fd79a8"
    },
    {
      id: 7,
      code: "EARLYBIRD40",
      title: "Early Bird Special",
      description: "40% off for early event registrations",
      discount: "40% OFF",
      category: "events",
      validUntil: "2024-10-15",
      minAmount: 500,
      icon: "🐦",
      color: "#00b894"
    },
    {
      id: 8,
      code: "MENTOR75",
      title: "Mentor Program",
      description: "75% discount on mentorship program enrollment",
      discount: "75% OFF",
      category: "education",
      validUntil: "2024-11-10",
      minAmount: 1500,
      icon: "🎓",
      color: "#e17055"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Coupons', icon: '🎫' },
    { id: 'donation', label: 'Donations', icon: '❤️' },
    { id: 'events', label: 'Events', icon: '🎉' },
    { id: 'volunteer', label: 'Volunteer', icon: '🤝' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'health', label: 'Health', icon: '🏥' }
  ];

  const filteredCoupons = activeCategory === 'all' 
    ? coupons 
    : coupons.filter(coupon => coupon.category === activeCategory);

  const copyToClipboard = (code, id) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCoupon(id);
      setTimeout(() => setCopiedCoupon(null), 2000);
    });
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      y: -20, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="coupons-hero" style={{ backgroundImage: `url(${home5})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Exclusive Coupons</h1>
              <p className="hero-subtitle">Save more while supporting our cause</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Coupons Gallery */}
        <motion.section
          className="coupons-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={cardVariants}>
            Our Programs & Events
          </motion.h2>
          <motion.p className="section-subtitle" variants={cardVariants}>
            Discover the initiatives where your coupons can make a difference
          </motion.p>
          <div className="coupons-gallery">
            <motion.div className="gallery-item" variants={cardVariants}>
              <img src={home1} alt="Community Events" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Events</h3>
                <p>Join our community gatherings</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={cardVariants}>
              <img src={home2} alt="Education Programs" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Programs</h3>
                <p>Learn and grow with us</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={cardVariants}>
              <img src={home3} alt="Healthcare Camps" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Healthcare Camps</h3>
                <p>Health for everyone</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={cardVariants}>
              <img src={home4} alt="Volunteer Programs" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Volunteer Programs</h3>
                <p>Make a difference</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={cardVariants}>
              <img src={home6} alt="Rural Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Rural Development</h3>
                <p>Supporting rural communities</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Coupons Grid */}
        <motion.div
          className="coupons-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredCoupons.map((coupon) => (
              <motion.div
                key={coupon.id}
                className="coupon-card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
                whileHover={{ scale: 1.03, y: -5 }}
                style={{ '--coupon-color': coupon.color }}
              >
                <div className="coupon-header">
                  <div className="coupon-icon">{coupon.icon}</div>
                  <div className="coupon-discount">{coupon.discount}</div>
                </div>
                
                <div className="coupon-content">
                  <h3 className="coupon-title">{coupon.title}</h3>
                  <p className="coupon-description">{coupon.description}</p>
                  
                  <div className="coupon-details">
                    <div className="coupon-validity">
                      <i className="fas fa-calendar-alt"></i>
                      Valid until: {new Date(coupon.validUntil).toLocaleDateString()}
                    </div>
                    {coupon.minAmount > 0 && (
                      <div className="coupon-min-amount">
                        <i className="fas fa-coins"></i>
                        Min amount: ₹{coupon.minAmount}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="coupon-footer">
                  <div className="coupon-code">
                    <span className="code-label">Code:</span>
                    <span className="code-value">{coupon.code}</span>
                  </div>
                  <motion.button
                    className="copy-btn"
                    onClick={() => copyToClipboard(coupon.code, coupon.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {copiedCoupon === coupon.id ? (
                      <>
                        <i className="fas fa-check"></i>
                        Copied!
                      </>
                    ) : (
                      <>
                        <i className="fas fa-copy"></i>
                        Copy
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Terms and Conditions */}
        <motion.div
          className="terms-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="terms-card">
            <h3>Terms & Conditions</h3>
            <ul>
              <li>Coupons are valid for limited time only</li>
              <li>Cannot be combined with other offers</li>
              <li>Minimum amount restrictions apply where mentioned</li>
              <li>Coupons are non-transferable and non-refundable</li>
              <li>Organization reserves the right to modify or cancel coupons</li>
              <li>Valid for registered members only</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          justify-content: center;
          margin: 40px 0;
        }

        .category-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #e1e5e9;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .category-btn:hover {
          border-color: #007BFF;
          background: rgba(255, 255, 255, 1);
        }

        .category-btn.active {
          background: #007BFF;
          color: white;
          border-color: #007BFF;
        }

        .category-icon {
          font-size: 1.2rem;
        }

        .category-label {
          font-weight: 600;
        }

        .coupons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .coupon-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          padding: 0;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-left: 5px solid var(--coupon-color);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .coupon-header {
          background: linear-gradient(135deg, var(--coupon-color), rgba(0, 0, 0, 0.1));
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: white;
        }

        .coupon-icon {
          font-size: 2.5rem;
        }

        .coupon-discount {
          font-size: 1.5rem;
          font-weight: bold;
          background: rgba(255, 255, 255, 0.2);
          padding: 8px 16px;
          border-radius: 20px;
          backdrop-filter: blur(10px);
        }

        .coupon-content {
          padding: 25px;
        }

        .coupon-title {
          font-size: 1.4rem;
          color: #333;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .coupon-description {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .coupon-details {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 20px;
        }

        .coupon-validity,
        .coupon-min-amount {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #666;
        }

        .coupon-validity i,
        .coupon-min-amount i {
          color: var(--coupon-color);
        }

        .coupon-footer {
          background: #f8f9fa;
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .coupon-code {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .code-label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .code-value {
          font-family: 'Courier New', monospace;
          font-weight: bold;
          font-size: 1.1rem;
          color: #333;
          background: #e9ecef;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .copy-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: var(--coupon-color);
          color: white;
          border: none;
          border-radius: 20px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .copy-btn:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        .terms-section {
          margin-top: 60px;
          text-align: center;
        }

        .terms-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 800px;
          margin: 0 auto;
        }

        .terms-card h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.4rem;
        }

        .terms-card ul {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .terms-card li {
          padding: 8px 0;
          color: #666;
          position: relative;
          padding-left: 25px;
        }

        .terms-card li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #28a745;
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .coupons-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .category-filter {
            justify-content: center;
          }

          .category-btn {
            flex-direction: column;
            text-align: center;
            min-width: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default Coupons; 