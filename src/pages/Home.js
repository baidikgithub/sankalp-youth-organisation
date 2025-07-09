import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';
import home8 from '../assets/home/home8.jpg';
import home10 from '../assets/home/home10.jpg';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quick join form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
  };

  // Impact metrics inspired by Smile Foundation
  const impactMetrics = [
    { number: "15", suffix: "LAC+", label: "children and their families impacted every year" },
    { number: "1500", suffix: "+", label: "villages and communities reached across the country" },
    { number: "200", suffix: "+", label: "projects focused on education, healthcare, and empowerment" },
    { number: "25", suffix: "+", label: "states covered including remotest areas" }
  ];

  // Programme areas aligned with social development
  const programmes = [
    {
      title: "EDUCATION",
      subtitle: "Education, nutrition and holistic development of children",
      description: "Ensuring quality education and holistic development for underprivileged children through innovative learning methods and community engagement.",
      icon: "📚",
      color: "#007BFF"
    },
    {
      title: "WOMEN EMPOWERMENT",
      subtitle: "Empowering adolescent girls & women through community engagement",
      description: "Skill development, leadership training, and economic empowerment programmes for women and adolescent girls.",
      icon: "👩",
      color: "#e91e63"
    },
    {
      title: "HEALTHCARE",
      subtitle: "Taking healthcare services to doorsteps of hard to reach communities",
      description: "Mobile health clinics, awareness campaigns, and medical camps to ensure healthcare access for all.",
      icon: "🏥",
      color: "#4caf50"
    },
    {
      title: "LIVELIHOOD",
      subtitle: "Skill training and placement support for underprivileged youth",
      description: "Vocational training, entrepreneurship development, and job placement assistance for sustainable livelihoods.",
      icon: "💼",
      color: "#ff9800"
    },
    {
      title: "DISASTER RESPONSE",
      subtitle: "Reach out and respond to the needs of disaster-affected people",
      description: "Emergency relief, rehabilitation, and community resilience building in disaster-affected areas.",
      icon: "🆘",
      color: "#f44336"
    },
    {
      title: "EMPOWERING GRASSROOTS",
      subtitle: "Helping community-based organizations become locally sustainable",
      description: "Capacity building and support for local organizations to create sustainable community development models.",
      icon: "🤝",
      color: "#9c27b0"
    }
  ];

  // SDG Goals that align with our work
  const sdgGoals = [
    { number: "1", title: "No Poverty", color: "#e5243b" },
    { number: "3", title: "Good Health", color: "#4c9f38" },
    { number: "4", title: "Quality Education", color: "#c5192d" },
    { number: "5", title: "Gender Equality", color: "#ff3a21" },
    { number: "8", title: "Decent Work", color: "#a21942" },
    { number: "10", title: "Reduced Inequalities", color: "#dd1367" }
  ];

  // YouTube videos for visual appeal
  const featuredVideos = [
    {
      id: "dQw4w9WgXcQ", // Replace with actual organizational videos
      title: "Our Education Programme Impact",
      description: "See how we're transforming lives through education"
    },
    {
      id: "J7GY1Xg6X20", // Replace with actual organizational videos  
      title: "Women Empowerment Success Stories",
      description: "Inspiring stories of women breaking barriers"
    }
  ];

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
      <motion.section
        className="hero-section"
        style={{ backgroundImage: `url(${home1})` }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="hero-overlay">
          <div className="container">
            <h1 className="page-title">Sankalp Youth Organisation</h1>
            <p className="page-subtitle">
              Established in 2018, Sankalp Youth Organisation is an Indian development organization, 
              impacting the lives of over 15 lakh children and their families every year. We work as a 
              catalyst in the cycle of change, implementing high-impact programmes for sustainable development.
            </p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/join" className="cta-button">
                Join Our Mission
              </Link>
              <Link to="/about" className="cta-button cta-link-outline">
                Learn More
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="container">
        {/* Impact Metrics Section */}
        <motion.section
          className="impact-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            OUR IMPACT
          </motion.h2>
          <div className="impact-grid">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="impact-metric"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="impact-number">
                  {metric.number}
                  <span style={{ color: '#28a745' }}>{metric.suffix}</span>
                </div>
                <div className="impact-label">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Image Gallery Section */}
        <motion.section
          className="gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Work in Pictures
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Visual stories of transformation and impact across communities
          </motion.p>
          <div className="image-gallery">
            <motion.div className="gallery-item large" variants={itemVariants}>
              <img src={home8} alt="Community Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Development</h3>
                <p>Building sustainable communities through grassroots initiatives</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home2} alt="Education Programs" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Programs</h3>
                <p>Empowering children through quality education</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home3} alt="Healthcare Initiatives" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Healthcare Initiatives</h3>
                <p>Bringing healthcare to remote communities</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home4} alt="Women Empowerment" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Women Empowerment</h3>
                <p>Supporting women's economic independence</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home5} alt="Youth Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Youth Development</h3>
                <p>Nurturing young leaders for tomorrow</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home6} alt="Rural Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Rural Development</h3>
                <p>Transforming rural communities</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home10} alt="Community Outreach" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Outreach</h3>
                <p>Reaching the most vulnerable populations</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Videos Section */}
        <motion.section
          className="video-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Stories in Motion
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Watch our impact unfold through the lives we've touched and the communities we've transformed
          </motion.p>
          <div className="video-grid">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={index}
                className="video-container"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allowFullScreen
                ></iframe>
                <div className="video-info">
                  <h4 className="video-title">{video.title}</h4>
                  <p className="video-description">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Our Programmes Section */}
        <motion.section
          className="programmes-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Programmes
          </motion.h2>
          <div className="services-grid">
            {programmes.map((programme, index) => (
              <motion.div
                key={index}
                className="service-box"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                style={{ borderTop: `4px solid ${programme.color}` }}
              >
                <div className="programme-icon">{programme.icon}</div>
                <h3 style={{ color: programme.color }}>{programme.title}</h3>
                <h4 className="programme-subtitle">
                  {programme.subtitle}
                </h4>
                <p>{programme.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        

        {/* Quick Join Section */}
        <motion.section
          className="join-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card">
            <motion.h2 className="section-title" variants={itemVariants}>
              Join Our Mission
            </motion.h2>
            <motion.p className="section-subtitle" variants={itemVariants}>
              Be part of the change. Join thousands of volunteers working towards sustainable development and social justice.
            </motion.p>
            
            <motion.form onSubmit={handleSubmit} className="quick-join-form" variants={itemVariants}>
              <div className="form-grid">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Interest Area *</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="women-empowerment">Women Empowerment</option>
                  <option value="livelihood">Livelihood</option>
                  <option value="disaster-response">Disaster Response</option>
                  <option value="grassroots">Grassroots Empowerment</option>
                </select>
              </div>
              <textarea
                name="message"
                placeholder="Tell us about your motivation to join..."
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
              <motion.button
                type="submit"
                className="cta-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Application
              </motion.button>
            </motion.form>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className="final-cta"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="card">
            <motion.h2 variants={itemVariants}>
              Ready to Make a Difference?
            </motion.h2>
            <motion.p variants={itemVariants}>
              Join us in creating lasting change and building a better tomorrow for all.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link to="/join" className="cta-button cta-link-white">
                Become a Volunteer
              </Link>
              <Link to="/payment" className="cta-button cta-link-outline">
                Support Our Cause
              </Link>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home; 