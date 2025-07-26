import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import 'antd/dist/reset.css'; // Ant Design CSS
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Events from './pages/Events';
import JoinUs from './pages/JoinUs';
import Payment from './pages/Payment';
import Coupons from './pages/Coupons';
import Collaborations from './pages/Collaborations';
import Footer from './components/Footer';
import AdminLayout from './components/AdminLayout';
import Dashboard from './pages/admin/Dashboard';
import Settings from './pages/admin/Settings';
import Members from './pages/admin/Members';
import AdminEvents from './pages/admin/Events';
import Donations from './pages/admin/Donations';
import './styles/global/App.css';

// Component to handle conditional rendering
const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  // Apply different styles for admin routes
  React.useEffect(() => {
    const body = document.body;
    const root = document.getElementById('root');
    
    if (isAdminRoute) {
      // Apply admin styles
      body.className = 'admin-page-body';
      root.className = 'admin-page-root';
      body.style.background = '#f0f2f5';
      body.style.backgroundAttachment = 'initial';
      body.style.minHeight = '100vh';
      body.style.margin = '0';
      body.style.padding = '0';
      body.style.overflow = 'hidden';
    } else {
      // Restore original styles for public pages
      body.className = '';
      root.className = '';
      body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
      body.style.backgroundAttachment = 'fixed';
      body.style.minHeight = '100vh';
      body.style.overflow = 'visible';
    }

    // Cleanup function
    return () => {
      if (!isAdminRoute) {
        body.className = '';
        root.className = '';
        body.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        body.style.backgroundAttachment = 'fixed';
        body.style.overflow = 'visible';
      }
    };
  }, [isAdminRoute]);

  if (isAdminRoute) {
    // Admin layout - full screen, no extra containers
    return (
      <div 
        className="admin-layout"
        style={{ 
          height: '100vh', 
          overflow: 'hidden',
          margin: 0,
          padding: 0
        }}
      >
        <Routes>
          <Route path="/admin" element={
            <AdminLayout>
              <Dashboard />
            </AdminLayout>
          } />
          <Route path="/admin/settings" element={
            <AdminLayout>
              <Settings />
            </AdminLayout>
          } />
          <Route path="/admin/members" element={
            <AdminLayout>
              <Members />
            </AdminLayout>
          } />
          <Route path="/admin/events" element={
            <AdminLayout>
              <AdminEvents />
            </AdminLayout>
          } />
          <Route path="/admin/donations" element={
            <AdminLayout>
              <Donations />
            </AdminLayout>
          } />
        </Routes>
      </div>
    );
  }

  // Public pages layout - original structure
  return (
    <div className="App">
      <Navigation />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/coupons" element={<Coupons />} />
        </Routes>
      </motion.main>
      
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App; 