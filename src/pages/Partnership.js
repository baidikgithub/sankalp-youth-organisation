import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Partnership = () => {
  const [formData, setFormData] = useState({
    organizationName: '',
    registrationNumber: '',
    establishedYear: '',
    contactPerson: '',
    designation: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    city: '',
    state: '',
    focusAreas: [],
    projectTitle: '',
    projectDescription: '',
    duration: '',
    expectedBudget: '',
    targetBeneficiaries: '',
    collaborationType: '',
    resources: '',
    previousPartnerships: '',
    timeline: '',
    additionalInfo: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        focusAreas: checked 
          ? [...prev.focusAreas, value]
          : prev.focusAreas.filter(area => area !== value)
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
      setSubmitMessage('Thank you for your partnership request! We will review your proposal and get back to you within 7-10 business days.');
      
      // Reset form
      setFormData({
        organizationName: '', registrationNumber: '', establishedYear: '', contactPerson: '',
        designation: '', email: '', phone: '', website: '', address: '', city: '', state: '',
        focusAreas: [], projectTitle: '', projectDescription: '', duration: '', expectedBudget: '',
        targetBeneficiaries: '', collaborationType: '', resources: '', previousPartnerships: '',
        timeline: '', additionalInfo: ''
      });
      
      setTimeout(() => setSubmitMessage(''), 8000);
    }, 2000);
  };

  const focusAreaOptions = [
    { value: 'education', label: 'Education & Literacy', icon: '📚' },
    { value: 'health', label: 'Healthcare & Wellness', icon: '🏥' },
    { value: 'environment', label: 'Environment & Conservation', icon: '🌱' },
    { value: 'women', label: 'Women Empowerment', icon: '👩' },
    { value: 'youth', label: 'Youth Development', icon: '🎯' },
    { value: 'elderly', label: 'Elderly Care', icon: '👴' },
    { value: 'poverty', label: 'Poverty Alleviation', icon: '🤝' },
    { value: 'disaster', label: 'Disaster Relief', icon: '🆘' },
    { value: 'technology', label: 'Technology & Digital', icon: '💻' },
    { value: 'arts', label: 'Arts & Culture', icon: '🎨' }
  ];

  const collaborationTypes = [
    'Joint Project Implementation',
    'Resource Sharing',
    'Capacity Building',
    'Advocacy & Awareness',
    'Fundraising Partnership',
    'Technical Expertise Exchange',
    'Community Outreach',
    'Research & Development'
  ];

  const benefits = [
    { icon: '🤝', title: 'Shared Resources', description: 'Pool resources for maximum impact' },
    { icon: '🌍', title: 'Wider Reach', description: 'Expand your geographical impact' },
    { icon: '💡', title: 'Knowledge Exchange', description: 'Learn from each other\'s expertise' },
    { icon: '📈', title: 'Increased Visibility', description: 'Enhanced credibility and recognition' },
    { icon: '💰', title: 'Cost Efficiency', description: 'Reduce costs through shared expenses' },
    { icon: '🎯', title: 'Better Outcomes', description: 'Achieve greater social impact together' }
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
      <motion.div
        className="page-header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="page-title">Partner With Us</h1>
        <p className="page-subtitle">Join forces to create lasting positive change in our communities</p>
      </motion.div>

      <motion.div
        className="container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Benefits Section */}
        <motion.section className="benefits-section" variants={itemVariants}>
          <h2 className="section-title">Why Partner With Us?</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                whileHover={{ scale: 1.05 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Partnership Form */}
        <motion.section className="form-section" variants={itemVariants}>
          <div className="form-container">
            <div className="form-header">
              <h2>Partnership Request Form</h2>
              <p>Please fill out this comprehensive form to initiate a partnership with Aarya Youth Organisation.</p>
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

            <form onSubmit={handleSubmit} className="partnership-form">
              {/* Organization Information */}
              <div className="form-section-group">
                <h3>Organization Information</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="organizationName"
                    placeholder="Organization Name *"
                    value={formData.organizationName}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="registrationNumber"
                    placeholder="Registration Number *"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <input
                    type="number"
                    name="establishedYear"
                    placeholder="Year Established *"
                    value={formData.establishedYear}
                    onChange={handleInputChange}
                    min="1900"
                    max="2024"
                    required
                  />
                  <input
                    type="url"
                    name="website"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="city"
                    placeholder="City *"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State *"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <textarea
                  name="address"
                  placeholder="Complete Address *"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  required
                ></textarea>
              </div>

              {/* Contact Person Details */}
              <div className="form-section-group">
                <h3>Contact Person Details</h3>
                <div className="form-row">
                  <input
                    type="text"
                    name="contactPerson"
                    placeholder="Full Name *"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                  />
                  <input
                    type="text"
                    name="designation"
                    placeholder="Designation *"
                    value={formData.designation}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-row">
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
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              {/* Focus Areas */}
              <div className="form-section-group">
                <h3>Primary Focus Areas</h3>
                <p>Select all areas your organization works in:</p>
                <div className="focus-areas-grid">
                  {focusAreaOptions.map((option) => (
                    <label key={option.value} className="focus-area-option">
                      <input
                        type="checkbox"
                        value={option.value}
                        checked={formData.focusAreas.includes(option.value)}
                        onChange={handleInputChange}
                      />
                      <div className="focus-area-card">
                        <span className="focus-area-icon">{option.icon}</span>
                        <span className="focus-area-label">{option.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="form-section-group">
                <h3>Proposed Collaboration Project</h3>
                <input
                  type="text"
                  name="projectTitle"
                  placeholder="Project Title *"
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  required
                />
                <textarea
                  name="projectDescription"
                  placeholder="Project Description (Objectives, activities, expected outcomes) *"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows="5"
                  required
                ></textarea>
                <div className="form-row">
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Project Duration *</option>
                    <option value="1-3 months">1-3 months</option>
                    <option value="3-6 months">3-6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2+ years">2+ years</option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                  <input
                    type="text"
                    name="expectedBudget"
                    placeholder="Expected Budget Range"
                    value={formData.expectedBudget}
                    onChange={handleInputChange}
                  />
                </div>
                <input
                  type="text"
                  name="targetBeneficiaries"
                  placeholder="Target Beneficiaries (Number and demographics) *"
                  value={formData.targetBeneficiaries}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Collaboration Type */}
              <div className="form-section-group">
                <h3>Type of Collaboration Sought</h3>
                <select
                  name="collaborationType"
                  value={formData.collaborationType}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Collaboration Type *</option>
                  {collaborationTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* Additional Information */}
              <div className="form-section-group">
                <h3>Additional Information</h3>
                <textarea
                  name="resources"
                  placeholder="Resources you can contribute (funding, volunteers, expertise, equipment, etc.)"
                  value={formData.resources}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
                <textarea
                  name="previousPartnerships"
                  placeholder="Previous partnership experiences (if any)"
                  value={formData.previousPartnerships}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
                <input
                  type="text"
                  name="timeline"
                  placeholder="Preferred start timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                />
                <textarea
                  name="additionalInfo"
                  placeholder="Any additional information or special requirements"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows="3"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting || formData.focusAreas.length === 0}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Submitting Request...
                  </>
                ) : (
                  'Submit Partnership Request'
                )}
              </motion.button>
            </form>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section className="contact-section" variants={itemVariants}>
          <div className="contact-card">
            <h3>Need More Information?</h3>
            <p>For any questions about partnerships, feel free to reach out to us directly.</p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>partnerships@aaryayouth.org</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
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
          font-size: 2.5rem;
          margin-bottom: 20px;
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

        .form-container {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          max-width: 900px;
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

        .form-section-group {
          margin-bottom: 40px;
          padding-bottom: 30px;
          border-bottom: 2px solid #f0f0f0;
        }

        .form-section-group:last-of-type {
          border-bottom: none;
        }

        .form-section-group h3 {
          color: #333;
          margin-bottom: 20px;
          font-size: 1.3rem;
          border-bottom: 2px solid #007BFF;
          padding-bottom: 8px;
        }

        .form-section-group > p {
          color: #666;
          margin-bottom: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .partnership-form input,
        .partnership-form select,
        .partnership-form textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e1e5e9;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .partnership-form input:focus,
        .partnership-form select:focus,
        .partnership-form textarea:focus {
          outline: none;
          border-color: #007BFF;
          box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
        }

        .partnership-form textarea {
          resize: vertical;
          min-height: 100px;
        }

        .focus-areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .focus-area-option {
          cursor: pointer;
        }

        .focus-area-option input {
          display: none;
        }

        .focus-area-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
          border: 2px solid #e1e5e9;
          border-radius: 10px;
          transition: all 0.3s ease;
          text-align: center;
        }

        .focus-area-option input:checked + .focus-area-card {
          border-color: #007BFF;
          background: rgba(0, 123, 255, 0.1);
        }

        .focus-area-card:hover {
          border-color: #007BFF;
        }

        .focus-area-icon {
          font-size: 1.8rem;
          margin-bottom: 10px;
        }

        .focus-area-label {
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

        .contact-section {
          margin-top: 60px;
        }

        .contact-card {
          background: rgba(255, 255, 255, 0.95);
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-card h3 {
          color: #333;
          margin-bottom: 15px;
          font-size: 1.5rem;
        }

        .contact-card p {
          color: #666;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .contact-details {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #666;
        }

        .contact-item i {
          color: #007BFF;
          width: 20px;
        }

        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
          }

          .focus-areas-grid {
            grid-template-columns: 1fr;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .form-container {
            padding: 30px 20px;
          }

          .contact-details {
            align-items: flex-start;
          }

          .contact-item {
            justify-content: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Partnership; 