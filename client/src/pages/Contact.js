import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/pages/Contact.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitMessage(''), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'aaryaforworld@gmail.com',
      link: 'mailto:aaryaforworld@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+123 456 789',
      link: 'tel:+123456789'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Address',
      value: '123 Community Street, City, State 12345',
      link: null
    },
    {
      icon: 'fas fa-clock',
      title: 'Office Hours',
      value: 'Mon - Fri: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-facebook', url: 'https://facebook.com', label: 'Facebook' },
    { icon: 'fab fa-instagram', url: 'https://instagram.com', label: 'Instagram' },
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fab fa-youtube', url: 'https://youtube.com', label: 'YouTube' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
      <section className="contact-hero" style={{ backgroundImage: `url(${home1})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Contact Us</h1>
              <p className="hero-subtitle">Get in touch with us for any questions or collaborations</p>
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
        {/* Contact Images Gallery */}
        <motion.section
          className="contact-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Our Work in Action
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            See the impact of our community initiatives and programmes
          </motion.p>
          <div className="contact-gallery">
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home2} alt="Community Outreach" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Outreach</h3>
                <p>Connecting with communities</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home3} alt="Healthcare Programs" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Healthcare Programs</h3>
                <p>Bringing health to all</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home4} alt="Education Initiatives" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Initiatives</h3>
                <p>Empowering through knowledge</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <div className="contact-container">
          {/* Contact Form */}
          <motion.div className="contact-form-section" variants={itemVariants}>
            <div className="form-container">
              <h2>Send us a message</h2>
              
              {submitMessage && (
                <motion.div
                  className="message success"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {submitMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>

                <motion.button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="loading-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="contact-info-section" variants={itemVariants}>
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <div className="contact-info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-info-item"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="info-icon">
                    <i className={info.icon}></i>
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        .contact-container {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-form-section h2,
        .contact-info-section h2 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.8rem;
        }

        .contact-info-section {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          height: fit-content;
        }

        .contact-info-section p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 30px;
        }

        .contact-info-grid {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 40px;
        }

        .contact-info-item {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          background: #f8f9fa;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        .contact-info-item:hover {
          background: #e9ecef;
        }

        .info-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.2rem;
        }

        .info-content h4 {
          color: #333;
          margin-bottom: 5px;
          font-size: 1rem;
        }

        .info-content p,
        .info-content a {
          color: #666;
          margin: 0;
          text-decoration: none;
          font-size: 0.9rem;
        }

        .info-content a:hover {
          color: #007BFF;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .submit-btn:hover:not(:disabled) {
          background: linear-gradient(135deg, #0056b3, #003d82);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .social-section {
          text-align: center;
        }

        .social-section h3 {
          color: #333;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-link {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #007BFF, #0056b3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: linear-gradient(135deg, #0056b3, #003d82);
        }

        @media (max-width: 768px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-info-section {
            padding: 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact; 