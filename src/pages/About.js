import React from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/About.css';
import { organizationStats, missionVision, focusAreas, leadership, containerVariants, itemVariants } from '../config/about';
// Import images from assets
import heroImage from '../assets/about/about1.jpg';
import missionImage from '../assets/about/about2.jpeg';
import visionImage from '../assets/about/about3.jpeg';
import impactImage from '../assets/about/about4.jpeg';
import teamImage from '../assets/about/about5.jpeg';
import communityImage from '../assets/about/about6.jpeg';

const About = () => {


  return (
    <div className="about-page">
      {/* Hero Section with Background Image */}
      <section className="about-hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Sankalp Youth Organisation</h1>
              <p className="hero-subtitle">
                Established in 2018, we are a leading development organization committed to sustainable 
                development and social transformation across India.
              </p>
              <div className="hero-stats">
                <div className="hero-stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Lakh Lives Impacted</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">1500+</span>
                  <span className="stat-label">Villages Reached</span>
                </div>
                <div className="hero-stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">States Covered</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Mission & Vision Section */}
        <motion.section
          className="mission-vision-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {missionVision.map((item, index) => (
            <motion.div
              key={index}
              className={`mission-vision-card ${index % 2 === 1 ? 'reverse' : ''}`}
              variants={itemVariants}
            >
              <div className="content-side">
                <h2 className="section-title">{item.title}</h2>
                <p className="section-description">{item.description}</p>
                <ul className="mission-points">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="image-side">
                <img src={item.image} alt={item.title} className="mission-image" />
              </div>
            </motion.div>
          ))}
        </motion.section>

        {/* Impact Statistics */}
        <motion.section
          className="impact-section"
          style={{ backgroundImage: `url(${impactImage})` }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="impact-overlay">
            <motion.h2 className="section-title" variants={itemVariants}>
              Our Impact at a Glance
            </motion.h2>
            <div className="impact-grid">
              {organizationStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="impact-metric"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="impact-number">{stat.number}</div>
                  <div className="impact-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Core Focus Areas */}
        <motion.section
          className="focus-areas-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title center" variants={itemVariants}>
            Our Core Focus Areas
          </motion.h2>
          <motion.p className="section-subtitle center" variants={itemVariants}>
            We work across multiple sectors to create comprehensive and sustainable impact
          </motion.p>
          
          <div className="focus-areas-grid">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="focus-area-card"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="focus-area-header">
                  <div className="focus-area-icon">{area.icon}</div>
                  <h3 className="focus-area-title">{area.area}</h3>
                </div>
                <p className="focus-area-description">{area.description}</p>
                <ul className="focus-area-details">
                  {area.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <div className="focus-area-impact">
                  <strong>{area.impact}</strong>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Leadership Team */}
        <motion.section
          className="leadership-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="leadership-header">
            <div className="leadership-content">
              <motion.h2 className="section-title" variants={itemVariants}>
                Our Leadership Team
              </motion.h2>
              <motion.p className="section-subtitle" variants={itemVariants}>
                Led by experienced professionals committed to social change and sustainable development
              </motion.p>
            </div>
            <div className="leadership-image">
              <img src={teamImage} alt="Our Team" />
            </div>
          </div>
          
          <div className="leadership-grid">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                className="leader-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="leader-avatar">
                  {leader.initials}
                </div>
                <div className="leader-info">
                  <h4 className="leader-name">{leader.name}</h4>
                  <p className="leader-role">{leader.role}</p>
                  <p className="leader-experience">{leader.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Community Impact Section */}
        <motion.section
          className="community-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="community-content">
            <motion.div className="community-text" variants={itemVariants}>
              <h2 className="section-title">Building Stronger Communities</h2>
              <p className="section-description">
                Our approach is community-centered, evidence-based, and sustainable. We partner with 
                like-minded institutions, government agencies, and individuals to implement high-impact 
                programmes that enable access, enhance quality, and bring about long-term behavioral 
                change at the grassroots level.
              </p>
              <div className="community-features">
                <div className="feature">
                  <h4>Community Participation</h4>
                  <p>Engaging local communities in every step of our programmes</p>
                </div>
                <div className="feature">
                  <h4>Evidence-Based Approach</h4>
                  <p>Using data and research to guide our interventions</p>
                </div>
                <div className="feature">
                  <h4>Sustainable Solutions</h4>
                  <p>Creating lasting change that continues beyond our involvement</p>
                </div>
              </div>
            </motion.div>
            <motion.div className="community-image" variants={itemVariants}>
              <img src={communityImage} alt="Community Work" />
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="cta-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="cta-card" variants={itemVariants}>
            <h2>Join Our Mission for Change</h2>
            <p>
              Be part of our journey towards creating a more equitable and sustainable society. 
              Together, we can make a lasting difference in the lives of millions.
            </p>
            <div className="cta-buttons">
              <a href="/join" className="cta-button primary">
                Become a Volunteer
              </a>
              <a href="/collaborations" className="cta-button secondary">
                Partner With Us
              </a>
              <a href="/payment" className="cta-button tertiary">
                Support Our Work
              </a>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 