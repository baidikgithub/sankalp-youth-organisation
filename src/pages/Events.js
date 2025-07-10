import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/pages/Events.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';
import home5 from '../assets/home/home5.jpg';
import home6 from '../assets/home/home6.jpg';
import home8 from '../assets/home/home8.jpg';
import home10 from '../assets/home/home10.jpg';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Event categories aligned with our programmes
  const eventCategories = [
    { id: 'all', label: 'All Events', icon: '📅' },
    { id: 'education', label: 'Education', icon: '📚' },
    { id: 'health', label: 'Healthcare', icon: '🏥' },
    { id: 'women', label: 'Women Empowerment', icon: '👩' },
    { id: 'youth', label: 'Youth Development', icon: '🎯' },
    { id: 'community', label: 'Community Outreach', icon: '🤝' }
  ];

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Digital Literacy Drive - Rural Schools",
      description: "Comprehensive digital literacy programme for students in 50 rural schools across Rajasthan and Madhya Pradesh. Training teachers and students on basic computer skills and internet usage.",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "Multiple Locations - Rajasthan & MP",
      category: "education",
      type: "Programme Launch",
      participants: "2000+ students, 200+ teachers",
      duration: "6 months",
      objectives: [
        "Bridge digital divide in rural education",
        "Train teachers on digital tools",
        "Provide computer access to students",
        "Create digital learning resources"
      ]
    },
    {
      id: 2,
      title: "Women Entrepreneurs Summit 2024",
      description: "Annual summit bringing together women entrepreneurs, mentors, and investors to foster business development and create networking opportunities for women-led enterprises.",
      date: "2024-03-08",
      time: "9:00 AM",
      location: "Delhi Convention Center",
      category: "women",
      type: "Summit",
      participants: "500+ women entrepreneurs",
      duration: "2 days",
      objectives: [
        "Networking and mentorship opportunities",
        "Business skill development workshops",
        "Access to funding and markets",
        "Policy advocacy for women entrepreneurs"
      ]
    },
    {
      id: 3,
      title: "Mobile Health Clinic Campaign",
      description: "Free health checkups, vaccination drives, and health awareness programmes in underserved tribal communities across Central India.",
      date: "2024-03-20",
      time: "8:00 AM",
      location: "Tribal Areas - Chhattisgarh",
      category: "health",
      type: "Health Camp",
      participants: "5000+ community members",
      duration: "1 month",
      objectives: [
        "Provide basic healthcare services",
        "Vaccination and immunization",
        "Health awareness and education",
        "Maternal and child health support"
      ]
    },
    {
      id: 4,
      title: "Youth Leadership Conclave",
      description: "Platform for young changemakers to discuss social issues, share solutions, and build leadership skills for community development.",
      date: "2024-04-10",
      time: "11:00 AM",
      location: "Mumbai Youth Center",
      category: "youth",
      type: "Conference",
      participants: "300+ young leaders",
      duration: "3 days",
      objectives: [
        "Leadership skill development",
        "Social innovation workshops",
        "Peer learning and networking",
        "Action planning for community projects"
      ]
    }
  ];

  // Past events with success stories
  const pastEvents = [
    {
      id: 5,
      title: "Project Udaan - Education Initiative",
      description: "Successfully completed holistic education programme benefiting 10,000 children across 100 government schools with improved learning outcomes and infrastructure development.",
      date: "2023-12-15",
      location: "Uttar Pradesh & Bihar",
      category: "education",
      type: "Programme Completion",
      impact: "10,000+ children impacted",
      achievements: [
        "80% improvement in learning outcomes",
        "200+ teachers trained",
        "50 schools received infrastructure upgrade",
        "100% enrollment of out-of-school children"
      ],
      videoId: "dQw4w9WgXcQ" // Replace with actual video
    },
    {
      id: 6,
      title: "Swasthya Seva - Community Health Programme",
      description: "Comprehensive healthcare initiative reaching 50,000 people in remote villages with mobile clinics, telemedicine, and health awareness campaigns.",
      date: "2023-11-20",
      location: "Odisha & Jharkhand",
      category: "health",
      type: "Health Campaign",
      impact: "50,000+ people reached",
      achievements: [
        "25,000+ health checkups conducted",
        "5,000+ children vaccinated",
        "500+ pregnant women received care",
        "100+ health volunteers trained"
      ],
      videoId: "J7GY1Xg6X20" // Replace with actual video
    },
    {
      id: 7,
      title: "Shakti - Women Empowerment Programme",
      description: "Successful completion of skill development and entrepreneurship programme for 2,000 women across rural Karnataka, resulting in sustainable livelihoods.",
      date: "2023-10-08",
      location: "Rural Karnataka",
      category: "women",
      type: "Skill Development",
      impact: "2,000+ women empowered",
      achievements: [
        "80% participants started income generation",
        "500+ self-help groups formed",
        "200+ micro-enterprises established",
        "100% financial literacy achieved"
      ],
      videoId: "9bZkp7q19f0" // Replace with actual video
    },
    {
      id: 8,
      title: "Disaster Relief - Kerala Floods Response",
      description: "Emergency response and rehabilitation programme during Kerala floods, providing immediate relief and long-term recovery support to affected communities.",
      date: "2023-08-25",
      location: "Kerala",
      category: "community",
      type: "Disaster Response",
      impact: "15,000+ people assisted",
      achievements: [
        "Emergency relief to 5,000 families",
        "Temporary shelters for 1,000 families",
        "Medical aid to 10,000+ people",
        "School reconstruction in 20 villages"
      ],
      videoId: "6n3pFFPSlW4" // Replace with actual video
    }
  ];

  // Featured event videos
  const eventVideos = [
    {
      id: "dQw4w9WgXcQ",
      title: "Project Udaan - Transforming Rural Education",
      description: "See how we're changing lives through quality education in government schools"
    },
    {
      id: "J7GY1Xg6X20",
      title: "Healthcare Reaches Every Door",
      description: "Our mobile health clinics bringing healthcare to remote communities"
    },
    {
      id: "9bZkp7q19f0",
      title: "Women Leading Change",
      description: "Stories of women entrepreneurs creating sustainable livelihoods"
    }
  ];

  const currentEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;
  const filteredEvents = selectedCategory === 'all' 
    ? currentEvents 
    : currentEvents.filter(event => event.category === selectedCategory);

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
      <section className="events-hero" style={{ backgroundImage: `url(${home8})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Our Events & Programmes</h1>
              <p className="hero-subtitle">
                Driving social change through impactful events and community programmes
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Event Images Gallery */}
        <motion.section
          className="event-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Event Highlights Gallery
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Visual stories from our impactful events and community programmes
          </motion.p>
          <div className="event-gallery">
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home1} alt="Community Event" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Events</h3>
                <p>Bringing communities together</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home2} alt="Education Program" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Programs</h3>
                <p>Empowering through knowledge</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home3} alt="Health Camp" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Health Camps</h3>
                <p>Healthcare for all</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home4} alt="Women Empowerment" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Women Empowerment</h3>
                <p>Building strong women leaders</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home5} alt="Youth Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Youth Development</h3>
                <p>Nurturing future leaders</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home6} alt="Rural Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Rural Development</h3>
                <p>Transforming rural communities</p>
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
            Events in Action
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            Watch highlights from our impactful programmes and community events
          </motion.p>
          <div className="video-grid">
            {eventVideos.map((video, index) => (
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
                <div style={{ textAlign: 'center', marginTop: '15px' }}>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '5px' }}>{video.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tab Navigation */}
        <motion.div
          className="tab-navigation"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            <i className="fas fa-calendar-plus"></i>
            Upcoming Events
          </button>
          <button
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            <i className="fas fa-history"></i>
            Past Events & Impact
          </button>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="category-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {eventCategories.map((category) => (
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

        {/* Events List */}
        <motion.div
          className="events-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            {filteredEvents.map((event) => (
              <motion.div
                key={event.id}
                className="event-card"
                variants={itemVariants}
                layout
                whileHover={{ scale: 1.02 }}
              >
                <div className="event-header">
                  <div className="event-date">
                    <div className="date-day">{new Date(event.date).getDate()}</div>
                    <div className="date-month">
                      {new Date(event.date).toLocaleDateString('en', { month: 'short' })}
                    </div>
                    <div className="date-year">{new Date(event.date).getFullYear()}</div>
                  </div>
                  <div className="event-details">
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-meta">
                      <span className="event-type">{event.type}</span>
                      <span className="event-location">
                        <i className="fas fa-map-marker-alt"></i>
                        {event.location}
                      </span>
                      {event.time && (
                        <span className="event-time">
                          <i className="fas fa-clock"></i>
                          {event.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="event-content">
                  <p className="event-description">{event.description}</p>
                  
                  {activeTab === 'upcoming' && (
                    <div className="event-info">
                      <div className="info-item">
                        <strong>Participants:</strong> {event.participants}
                      </div>
                      <div className="info-item">
                        <strong>Duration:</strong> {event.duration}
                      </div>
                      <div className="objectives">
                        <strong>Key Objectives:</strong>
                        <ul>
                          {event.objectives.map((objective, idx) => (
                            <li key={idx}>{objective}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'past' && (
                    <div className="event-impact">
                      <div className="impact-header">
                        <h4>Impact Achieved</h4>
                        <span className="impact-badge">{event.impact}</span>
                      </div>
                      <div className="achievements">
                        <strong>Key Achievements:</strong>
                        <ul>
                          {event.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      {event.videoId && (
                        <div className="event-video">
                          <h5>Event Highlights Video:</h5>
                          <div className="video-container" style={{ marginTop: '10px' }}>
                            <iframe
                              src={`https://www.youtube.com/embed/${event.videoId}`}
                              title={`${event.title} Highlights`}
                              allowFullScreen
                            ></iframe>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="event-footer">
                  {activeTab === 'upcoming' && (
                    <motion.button
                      className="register-btn"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Register Interest
                    </motion.button>
                  )}
                  <motion.button
                    className="details-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.section
          className="events-cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))', 
            color: 'white',
            textAlign: 'center'
          }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>
              Join Our Movement for Change
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '30px', color: 'rgba(255,255,255,0.9)' }}>
              Be part of our events and programmes. Together, we can create lasting impact in communities across India.
            </p>
            <div>
              <a href="/join" className="cta-button" style={{ 
                background: 'white', 
                color: 'var(--primary-color)', 
                marginRight: '15px' 
              }}>
                Become a Volunteer
              </a>
              <a href="/contact" className="cta-button" style={{ 
                background: 'transparent', 
                border: '2px solid white' 
              }}>
                Partner With Us
              </a>
            </div>
          </div>
        </motion.section>
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
          border: 2px solid var(--primary-color);
          background: var(--bg-secondary);
          color: var(--primary-color);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .tab-btn:hover,
        .tab-btn.active {
          background: var(--primary-color);
          color: white;
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
          background: var(--bg-secondary);
          border: 2px solid var(--border-color);
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .category-btn:hover,
        .category-btn.active {
          border-color: var(--primary-color);
          background: var(--primary-color);
          color: white;
        }

        .events-container {
          display: grid;
          gap: 30px;
          margin: 40px 0;
        }

        .event-card {
          background: var(--bg-secondary);
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px var(--shadow-light);
          border: 1px solid var(--border-color);
          transition: all 0.3s ease;
        }

        .event-header {
          display: flex;
          gap: 20px;
          padding: 30px;
          border-bottom: 1px solid var(--border-color);
          align-items: flex-start;
        }

        .event-date {
          background: var(--primary-color);
          color: white;
          padding: 15px;
          border-radius: 10px;
          text-align: center;
          min-width: 80px;
          flex-shrink: 0;
        }

        .date-day {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .date-month,
        .date-year {
          font-size: 0.9rem;
        }

        .event-details {
          flex: 1;
        }

        .event-title {
          color: var(--text-primary);
          margin-bottom: 15px;
          font-size: 1.4rem;
        }

        .event-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .event-type {
          background: var(--accent-color);
          color: white;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .event-content {
          padding: 30px;
        }

        .event-description {
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .event-info,
        .event-impact {
          background: var(--bg-primary);
          padding: 20px;
          border-radius: 10px;
          border: 1px solid var(--border-color);
        }

        .info-item {
          margin-bottom: 10px;
          color: var(--text-secondary);
        }

        .objectives,
        .achievements {
          margin-top: 15px;
        }

        .objectives ul,
        .achievements ul {
          margin-top: 10px;
          padding-left: 20px;
        }

        .objectives li,
        .achievements li {
          color: var(--text-secondary);
          margin-bottom: 5px;
        }

        .impact-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 15px;
        }

        .impact-badge {
          background: var(--accent-color);
          color: white;
          padding: 6px 15px;
          border-radius: 15px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .event-video {
          margin-top: 20px;
        }

        .event-video h5 {
          color: var(--text-primary);
          margin-bottom: 10px;
        }

        .event-footer {
          display: flex;
          gap: 15px;
          padding: 20px 30px;
          background: var(--bg-primary);
          border-top: 1px solid var(--border-color);
        }

        .register-btn,
        .details-btn {
          padding: 10px 20px;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .register-btn {
          background: var(--primary-color);
          color: white;
        }

        .details-btn {
          background: transparent;
          color: var(--primary-color);
          border: 2px solid var(--primary-color);
        }

        .events-cta {
          margin-top: 60px;
        }

        @media (max-width: 768px) {
          .event-header {
            flex-direction: column;
            text-align: center;
          }

          .event-date {
            align-self: center;
          }

          .event-meta {
            justify-content: center;
          }

          .impact-header {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }

          .event-footer {
            flex-direction: column;
          }

          .video-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Events; 