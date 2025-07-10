import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/JoinUs.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    interests: [],
    availability: '',
    experience: '',
    motivation: '',
    skills: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        interests: checked 
          ? [...prev.interests, value]
          : prev.interests.filter(interest => interest !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for joining us! We will contact you soon with next steps.');
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', age: '',
        occupation: '', interests: [], availability: '', experience: '', motivation: '', skills: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 2000);
  };

  const interestOptions = [
    { value: 'education', label: 'Education & Teaching', icon: '📚' },
    { value: 'health', label: 'Health & Medical', icon: '🏥' },
    { value: 'environment', label: 'Environment & Conservation', icon: '🌱' },
    { value: 'social', label: 'Social Welfare', icon: '🤝' },
    { value: 'fundraising', label: 'Fundraising & Events', icon: '💰' },
    { value: 'technology', label: 'Technology & Digital', icon: '💻' },
    { value: 'communication', label: 'Communication & Media', icon: '📢' },
    { value: 'administration', label: 'Administration', icon: '📋' }
  ];

  const membershipBenefits = [
    { icon: 'fas fa-certificate', title: 'Volunteer Certificates', description: 'Get recognition for your service hours' },
    { icon: 'fas fa-calendar-check', title: 'Priority Access', description: 'Early registration for events and programs' },
    { icon: 'fas fa-users', title: 'Community Network', description: 'Connect with like-minded individuals' },
    { icon: 'fas fa-graduation-cap', title: 'Skill Development', description: 'Free workshops and training sessions' },
    { icon: 'fas fa-gift', title: 'Member Discounts', description: 'Special discounts on merchandise and events' },
    { icon: 'fas fa-trophy', title: 'Awards & Recognition', description: 'Annual volunteer appreciation events' }
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
      <section className="join-hero" style={{ backgroundImage: `url(${home2})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Join Our Community</h1>
              <p className="hero-subtitle">Be part of the change you want to see in the world</p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Join Us Gallery */}
        <motion.section
          className="join-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Volunteer Community
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            See how our volunteers are making a difference across communities
          </motion.p>
          <div className="join-gallery">
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home3} alt="Education Volunteers" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Volunteers</h3>
                <p>Teaching and mentoring children</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home4} alt="Healthcare Volunteers" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Healthcare Volunteers</h3>
                <p>Providing medical care and support</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home5} alt="Community Outreach" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Outreach</h3>
                <p>Connecting with local communities</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home6} alt="Youth Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Youth Development</h3>
                <p>Empowering young leaders</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section className="benefits-section" variants={itemVariants}>
          <h2 className="section-title">Membership Benefits</h2>
          <div className="benefits-grid">
            {membershipBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Registration Form */}
        <motion.section className="registration-section" variants={itemVariants}>
          <div className="registration-container">
            <div className="form-header">
              <h2>Volunteer Registration Form</h2>
              <p>Fill out this form to become a volunteer and make a difference in your community.</p>
            </div>

            {submitMessage && (
              <motion.div
                className="message success"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="registration-form">
              {/* Personal Information */}
              <div className="form-section">
                <h3>Personal Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="16"
                    max="100"
                    required
                  />
                  <input
                    type="text"
                    name="occupation"
                    placeholder="Current Occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Interests */}
              <div className="form-section">
                <h3>Areas of Interest</h3>
                <p>Select all areas where you'd like to contribute (select at least one):</p>
                <div className="interests-grid">
                  {interestOptions.map((option) => (
                    <label key={option.value} className="interest-option">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.interests.includes(option.value)}
                        onChange={handleInputChange}
                      />
                      <div className="interest-card">
                        <span className="interest-icon">{option.icon}</span>
                        <span className="interest-label">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="form-section">
                <h3>Availability</h3>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your availability</option>
                  <option value="weekends">Weekends only</option>
                  <option value="weekdays">Weekdays only</option>
                  <option value="flexible">Flexible schedule</option>
                  <option value="events-only">Events only</option>
                  <option value="monthly">Once a month</option>
                </select>
              </div>

              {/* Experience & Skills */}
              <div className="form-section">
                <h3>Experience & Skills</h3>
                <textarea
                  name="experience"
                  placeholder="Previous volunteer experience (if any)"
                  value={formData.experience}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
                <textarea
                  name="skills"
                  placeholder="Special skills or talents you can contribute"
                  value={formData.skills}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>

              {/* Motivation */}
              <div className="form-section">
                <h3>Tell Us About Yourself</h3>
                <textarea
                  name="motivation"
                  placeholder="Why do you want to join our organization? What motivates you to volunteer?"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows="4"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || formData.interests.length === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Submitting...
                  </>
                ) : (
                  'Join Our Community'
                )}
              </motion.button>
            </form>
          </div>
        </motion.section>
      </motion.div>

      <style jsx>{`
        .benefits-section {
          margin-bottom: 60px;
        }

        .section-title {
          text-align: center;
          color: #fff;
          font-size: 2.2rem;
          margin-bottom: 40px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .benefit-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .benefit-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }

        .benefit-icon i {
          font-size: 1.5rem;
          color: white;
        }

        .benefit-card h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }

        .benefit-card p {
          color: #666;
          line-height: 1.6;
        }

        .registration-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 800px;
          margin: 0 auto;
        }

        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .form-header h2 {
          color: #333;
          margin-bottom: 10px;
          font-size: 1.8rem;
        }

        .form-header p {
          color: #666;
          font-size: 1.1rem;
        }

        .form-section {
          margin-bottom: 40px;
        }

        .form-section h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.3rem;
          border-bottom: 2px solid #007BFF;
          padding-bottom: 8px;
        }

        .form-section > p {
          color: #666;
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .registration-form input,
        .registration-form select,
        .registration-form textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .registration-form input:focus,
        .registration-form select:focus,
        .registration-form textarea:focus {
          outline: none;
          border-color: #007BFF;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .registration-form textarea {
          resize: vertical;
          min-height: 80px;
        }

        .interests-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .interest-option {
          cursor: pointer;
        }

        .interest-option input {
          display: none;
        }

        .interest-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .interest-option input:checked + .interest-card {
          border-color: #007BFF;
          background: rgba(0, 123, 255, 0.1);
        }

        .interest-card:hover {
          border-color: #007BFF;
        }

        .interest-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .interest-label {
          font-weight: 600;
          color: #333;
          font-size: 0.9rem;
        }

        .submit-btn {
          width: 100%;
          padding: 18px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 20px;
        }

        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0056b3, #003d82);
          transform: translateY(-2px);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .interests-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .registration-container {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default JoinUs; 