import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/yourlinkedinprofile', label: 'LinkedIn' },
    { icon: 'fab fa-instagram', url: 'https://www.instagram.com/yourinstagramprofile', label: 'Instagram' },
    { icon: 'fab fa-youtube', url: 'https://www.youtube.com/c/yourchannel', label: 'YouTube' },
    { icon: 'fab fa-facebook', url: 'https://www.facebook.com/yourfacebookpage', label: 'Facebook' },
  ];

  return (
    <motion.footer 
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Sankalp Youth Organisation</h3>
            <p>Building a world of hope</p>
            <p>Registered under SOCIETIES ACT OF XXI OF 1860</p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="/watchlist">Watchlist</a></li>
              <li><a href="/coupons">Coupons</a></li>
              <li><a href="/payment">Payment</a></li>
              <li><a href="/join">Join Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            {/* <div className="contact-info"> */}
              <p><i className="fas fa-envelope"></i> sankalpyouth@gmail.com</p>
              <p><i className="fas fa-phone"></i> +123456789</p>
              <p><i className="fas fa-map-marker-alt"></i> 123, Main Street, Anytown, India</p>
            {/* </div> */}
          </div>
        </div>
        
        <div className="footer-social">
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Sankalp Youth Organisation. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer; 