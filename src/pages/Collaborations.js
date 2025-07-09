import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/pages/Collaborations.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';

const Collaborations = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const collaborations = [
    {
      id: 1,
      name: "Green Earth Foundation",
      logo: "🌱",
      category: "environment",
      year: "2023",
      duration: "6 months",
      status: "completed",
      description: "Joint tree plantation drive across 5 cities",
      impact: "10,000+ trees planted",
      image: "https://via.placeholder.com/300x200/28A745/FFFFFF?text=Tree+Plantation",
      details: "Collaborated on the 'Green Cities Initiative' to plant trees in urban areas and create awareness about environmental conservation."
    },
    {
      id: 2,
      name: "Hope Healthcare Initiative",
      logo: "🏥",
      category: "health",
      year: "2023",
      duration: "12 months",
      status: "ongoing",
      description: "Free medical camps in rural areas",
      impact: "5,000+ patients treated",
      image: "https://via.placeholder.com/300x200/DC3545/FFFFFF?text=Medical+Camp",
      details: "Ongoing partnership providing free healthcare services, medical checkups, and health awareness programs in underserved communities."
    },
    {
      id: 3,
      name: "Education for All Trust",
      logo: "📚",
      category: "education",
      year: "2022",
      duration: "18 months",
      status: "completed",
      description: "Digital literacy program for rural schools",
      impact: "2,000+ students trained",
      image: "https://via.placeholder.com/300x200/007BFF/FFFFFF?text=Digital+Education",
      details: "Successfully implemented digital literacy programs in 50 rural schools, providing computer training and internet access."
    },
    {
      id: 4,
      name: "Women Empowerment Society",
      logo: "👩",
      category: "social",
      year: "2024",
      duration: "8 months",
      status: "ongoing",
      description: "Skill development workshops for women",
      impact: "800+ women skilled",
      image: "https://via.placeholder.com/300x200/FFC107/FFFFFF?text=Women+Skills",
      details: "Training women in various skills including tailoring, handicrafts, and entrepreneurship to promote economic independence."
    },
    {
      id: 5,
      name: "Youth Leadership Council",
      logo: "🎯",
      category: "youth",
      year: "2023",
      duration: "4 months",
      status: "completed",
      description: "Leadership development for young adults",
      impact: "500+ youth leaders trained",
      image: "https://via.placeholder.com/300x200/6F42C1/FFFFFF?text=Leadership",
      details: "Comprehensive leadership training program focusing on community development, public speaking, and project management."
    },
    {
      id: 6,
      name: "Food Security Network",
      logo: "🍽️",
      category: "hunger",
      year: "2022",
      duration: "12 months",
      status: "completed",
      description: "Community kitchen and food distribution",
      impact: "50,000+ meals served",
      image: "https://via.placeholder.com/300x200/FD7E14/FFFFFF?text=Food+Relief",
      details: "Established community kitchens and organized food distribution drives during the pandemic and natural disasters."
    }
  ];

  const categories = [
    { id: 'all', label: 'All Collaborations', icon: '🤝' },
    { id: 'environment', label: 'Environment', icon: '🌱' },
    { id: 'health', label: 'Healthcare', icon: '🏥' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'social', label: 'Social Welfare', icon: '👥' },
    { id: 'youth', label: 'Youth Development', icon: '🎯' },
    { id: 'hunger', label: 'Hunger Relief', icon: '🍽️' }
  ];

  const stats = [
    { label: "Partner NGOs", value: "25+", icon: "🤝" },
    { label: "Joint Projects", value: "40+", icon: "📊" },
    { label: "Lives Impacted", value: "100K+", icon: "❤️" },
    { label: "Years Active", value: "5+", icon: "📅" }
  ];

  const filteredCollaborations = selectedCategory === 'all' 
    ? collaborations 
    : collaborations.filter(collab => collab.category === selectedCategory);

  const getStatusColor = (status) => {
    switch (status) {
      case 'ongoing': return '#28a745';
      case 'completed': return '#007bff';
      case 'planned': return '#ffc107';
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
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="collaborations-hero" style={{ backgroundImage: `url(${home3})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Our Collaborations</h1>
              <p className="hero-subtitle">Building stronger communities through meaningful partnerships</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Collaborations Gallery */}
        <motion.section
          className="collaborations-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Partnership Highlights
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Visual stories of our successful collaborations and joint initiatives
          </motion.p>
          <div className="collaborations-gallery">
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home1} alt="Community Partnership" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Partnership</h3>
                <p>Working together for change</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home4} alt="Women Empowerment" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Women Empowerment</h3>
                <p>Collaborative skill development</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home5} alt="Youth Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Youth Development</h3>
                <p>Joint leadership programs</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home6} alt="Rural Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Rural Development</h3>
                <p>Partnership for progress</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Statistics Section */}
        <motion.section
          className="stats-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
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
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-label">{category.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Collaborations Grid */}
        <motion.div
          className="collaborations-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredCollaborations.map((collaboration) => (
              <motion.div
                key={collaboration.id}
                className="collaboration-card"
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="collaboration-image">
                  <img src={collaboration.image} alt={collaboration.name} />
                  <div 
                    className="status-badge"
                    style={{ backgroundColor: getStatusColor(collaboration.status) }}
                  >
                    {collaboration.status}
                  </div>
                </div>

                <div className="collaboration-content">
                  <div className="collaboration-header">
                    <div className="ngo-info">
                      <div className="ngo-logo">{collaboration.logo}</div>
                      <div>
                        <h3>{collaboration.name}</h3>
                        <p className="collaboration-year">{collaboration.year} • {collaboration.duration}</p>
                      </div>
                    </div>
                  </div>

                  <p className="collaboration-description">{collaboration.description}</p>
                  <p className="collaboration-details">{collaboration.details}</p>

                  <div className="collaboration-impact">
                    <div className="impact-badge">
                      <i className="fas fa-chart-line"></i>
                      <span>{collaboration.impact}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.section
          className="cta-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="cta-card">
            <h2>Want to Collaborate?</h2>
            <p>Join us in making a positive impact. Let's work together for a better tomorrow.</p>
            <motion.a
              href="/partnership"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Partner With Us
            </motion.a>
          </div>
        </motion.section>
      </div>

      <style jsx>{`
        .stats-section {
          margin: 40px 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        .stat-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: #007BFF;
          margin-bottom: 10px;
        }

        .stat-label {
          color: #666;
          font-weight: 600;
        }

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

        .collaborations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 30px;
          margin: 40px 0;
        }

        .collaboration-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .collaboration-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .collaboration-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .status-badge {
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 6px 12px;
          border-radius: 15px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .collaboration-content {
          padding: 25px;
        }

        .collaboration-header {
          margin-bottom: 15px;
        }

        .ngo-info {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .ngo-logo {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #f8f9fa;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .ngo-info h3 {
          color: #333;
          margin: 0;
          font-size: 1.3rem;
        }

        .collaboration-year {
          color: #666;
          font-size: 0.9rem;
          margin: 5px 0 0 0;
        }

        .collaboration-description {
          color: #333;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .collaboration-details {
          color: #666;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .collaboration-impact {
          display: flex;
          justify-content: flex-end;
        }

        .impact-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #28a745;
          color: white;
          padding: 8px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .cta-section {
          margin-top: 60px;
          text-align: center;
        }

        .cta-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 50px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-card h2 {
          color: #333;
          margin-bottom: 15px;
          font-size: 2rem;
        }

        .cta-card p {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .collaborations-grid {
            grid-template-columns: 1fr;
          }

          .category-filter {
            justify-content: center;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .cta-card {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Collaborations; 