import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
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
import './styles/global/App.css';

function App() {
  return (
    <Router>
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
            
            {/* Admin Routes */}
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
          </Routes>
        </motion.main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 