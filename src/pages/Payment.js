import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/pages/Payment.css';

// Import images from assets
import home1 from '../assets/home/home1.jpg';
import home2 from '../assets/home/home2.jpg';
import home3 from '../assets/home/home3.jpg';
import home4 from '../assets/home/home4.jpg';

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: '',
    netbankingBank: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const paymentOptions = [
    {
      id: 'card',
      title: 'Credit/Debit Card',
      description: 'Pay securely with your card',
      icon: '💳'
    },
    {
      id: 'upi',
      title: 'UPI Payment',
      description: 'Pay with UPI ID or QR code',
      icon: '📱'
    },
    {
      id: 'netbanking',
      title: 'Net Banking',
      description: 'Pay through your bank account',
      icon: '🏦'
    },
    {
      id: 'wallet',
      title: 'Digital Wallet',
      description: 'Pay with digital wallets',
      icon: '👛'
    }
  ];

  const amountOptions = [
    { value: '500', label: '₹500' },
    { value: '1000', label: '₹1,000' },
    { value: '2500', label: '₹2,500' },
    { value: '5000', label: '₹5,000' },
    { value: '10000', label: '₹10,000' }
  ];

  const netbankingBanks = [
    'State Bank of India',
    'HDFC Bank',
    'ICICI Bank',
    'Axis Bank',
    'Kotak Mahindra Bank',
    'Punjab National Bank',
    'Bank of Baroda',
    'Canara Bank'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount('');
  };

  const getFinalAmount = () => {
    return customAmount || selectedAmount;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = getFinalAmount();
    
    if (!selectedOption || !finalAmount) {
      alert('Please select a payment method and amount');
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      console.log('Payment processed:', {
        option: selectedOption,
        amount: finalAmount,
        formData
      });
    }, 3000);
  };

  const resetForm = () => {
    setPaymentSuccess(false);
    setSelectedOption('');
    setSelectedAmount('');
    setCustomAmount('');
    setFormData({
      name: '', email: '', phone: '', cardNumber: '', 
      expiryDate: '', cvv: '', upiId: '', netbankingBank: ''
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  if (paymentSuccess) {
    return (
      <div className="page-container">
        <div className="container">
          <motion.div
            className="success-container"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="success-card">
              <div className="success-icon">✅</div>
              <h2>Payment Successful!</h2>
              <p>Thank you for your generous contribution of ₹{getFinalAmount()}</p>
              <p>Your support helps us continue our mission to create positive change in communities.</p>
              <motion.button
                className="cta-button"
                onClick={resetForm}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Make Another Donation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="payment-hero" style={{ backgroundImage: `url(${home4})` }}>
        <div className="hero-overlay">
          <div className="container">
            <motion.div
              className="hero-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">Support Our Cause</h1>
              <p className="hero-subtitle">Your contribution makes a difference in countless lives</p>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.div
        className="container payment-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Impact Gallery */}
        <motion.section
          className="payment-gallery-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Your Impact in Action
          </motion.h2>
          <motion.p className="section-subtitle" variants={itemVariants}>
            See how your donations are transforming lives and communities
          </motion.p>
          <div className="payment-gallery">
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home1} alt="Education Impact" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Education Impact</h3>
                <p>Supporting children's education</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home2} alt="Healthcare Support" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Healthcare Support</h3>
                <p>Providing medical care</p>
              </div>
            </motion.div>
            <motion.div className="gallery-item" variants={itemVariants}>
              <img src={home3} alt="Community Development" className="gallery-image" />
              <div className="gallery-overlay">
                <h3>Community Development</h3>
                <p>Building stronger communities</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Payment Options */}
        <motion.section variants={itemVariants}>
          <h2 className="section-title">Choose Payment Method</h2>
          <div className="payment-options">
            {paymentOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`payment-option ${selectedOption === option.id ? 'active' : ''}`}
                onClick={() => setSelectedOption(option.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="payment-option-icon">{option.icon}</div>
                <div className="payment-option-title">{option.title}</div>
                <div className="payment-option-description">{option.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Amount Selection */}
        <motion.section className="amount-section" variants={itemVariants}>
          <h2 className="section-title">Select Amount</h2>
          <div className="amount-options">
            {amountOptions.map((amount) => (
              <motion.button
                key={amount.value}
                className={`amount-btn ${selectedAmount === amount.value ? 'active' : ''}`}
                onClick={() => handleAmountSelect(amount.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {amount.label}
              </motion.button>
            ))}
          </div>
          <div className="custom-amount">
            <input
              type="number"
              placeholder="Enter custom amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              min="100"
            />
          </div>
        </motion.section>

        {/* Payment Form */}
        <AnimatePresence>
          {selectedOption && (
            <motion.section
              className="payment-form"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <form onSubmit={handleSubmit}>
                <h3>Payment Details</h3>

                {/* Common Fields */}
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Card Payment Fields */}
                {selectedOption === 'card' && (
                  <>
                    <div className="form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* UPI Payment Fields */}
                {selectedOption === 'upi' && (
                  <div className="form-group">
                    <label>UPI ID</label>
                    <input
                      type="text"
                      name="upiId"
                      placeholder="yourname@upi"
                      value={formData.upiId}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                )}

                {/* Net Banking Fields */}
                {selectedOption === 'netbanking' && (
                  <div className="form-group">
                    <label>Select Bank</label>
                    <select
                      name="netbankingBank"
                      value={formData.netbankingBank}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose your bank</option>
                      {netbankingBanks.map((bank) => (
                        <option key={bank} value={bank}>{bank}</option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Security Info */}
                <div className="security-info">
                  <div className="security-icon">🔒</div>
                  <div className="security-text">
                    Your payment information is encrypted and secure
                  </div>
                </div>

                {/* Payment Summary */}
                <div className="payment-summary">
                  <div className="summary-row">
                    <span>Donation Amount:</span>
                    <span>₹{getFinalAmount() || '0'}</span>
                  </div>
                  <div className="summary-row">
                    <span>Processing Fee:</span>
                    <span>₹0</span>
                  </div>
                  <div className="summary-total">
                    <span>Total Amount:</span>
                    <span>₹{getFinalAmount() || '0'}</span>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  className="submit-payment-btn"
                  disabled={isProcessing || !getFinalAmount()}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isProcessing ? (
                    <>
                      <div className="loading-spinner"></div>
                      Processing Payment...
                    </>
                  ) : (
                    `Donate ₹${getFinalAmount() || '0'}`
                  )}
                </motion.button>
              </form>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Payment; 