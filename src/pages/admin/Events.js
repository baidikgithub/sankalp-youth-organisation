import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/admin/Events.css';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Youth Leadership Workshop',
      description: 'A comprehensive workshop to develop leadership skills among young volunteers',
      date: '2024-02-15',
      time: '10:00 AM',
      location: 'Mumbai Community Center',
      capacity: 50,
      registered: 35,
      status: 'upcoming',
      category: 'Workshop',
      organizer: 'Priya Sharma'
    },
    {
      id: 2,
      title: 'Environmental Cleanup Drive',
      description: 'Community cleanup initiative to promote environmental awareness',
      date: '2024-02-20',
      time: '8:00 AM',
      location: 'Beach Front, Mumbai',
      capacity: 100,
      registered: 78,
      status: 'upcoming',
      category: 'Community Service',
      organizer: 'Rahul Kumar'
    },
    {
      id: 3,
      title: 'Blood Donation Camp',
      description: 'Annual blood donation drive in collaboration with local hospitals',
      date: '2024-01-30',
      time: '9:00 AM',
      location: 'City Hospital',
      capacity: 200,
      registered: 156,
      status: 'completed',
      category: 'Health',
      organizer: 'Dr. Amit Patel'
    },
    {
      id: 4,
      title: 'Digital Literacy Program',
      description: 'Teaching basic computer skills to underprivileged children',
      date: '2024-02-10',
      time: '2:00 PM',
      location: 'Local School',
      capacity: 30,
      registered: 25,
      status: 'ongoing',
      category: 'Education',
      organizer: 'Neha Singh'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    category: 'Workshop',
    organizer: ''
  });

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleAddEvent = (e) => {
    e.preventDefault();
    const event = {
      id: events.length + 1,
      ...newEvent,
      capacity: parseInt(newEvent.capacity),
      registered: 0,
      status: 'upcoming'
    };
    setEvents([...events, event]);
    setNewEvent({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      capacity: '',
      category: 'Workshop',
      organizer: ''
    });
    setShowAddForm(false);
  };

  const handleStatusChange = (eventId, newStatus) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, status: newStatus } : event
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#007BFF';
      case 'ongoing': return '#28A745';
      case 'completed': return '#6C757D';
      case 'cancelled': return '#DC3545';
      default: return '#6C757D';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Workshop': return '#007BFF';
      case 'Community Service': return '#28A745';
      case 'Health': return '#DC3545';
      case 'Education': return '#FFC107';
      default: return '#6C757D';
    }
  };

  return (
    <div className="admin-events">
      <div className="events-header">
        <h1>Events Management</h1>
        <p>Manage and organize events for the organization</p>
      </div>

      {/* Statistics Cards */}
      <motion.div 
        className="events-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>{events.length}</h3>
            <p>Total Events</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⏳</div>
          <div className="stat-content">
            <h3>{events.filter(e => e.status === 'upcoming').length}</h3>
            <p>Upcoming</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🔄</div>
          <div className="stat-content">
            <h3>{events.filter(e => e.status === 'ongoing').length}</h3>
            <p>Ongoing</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>{events.filter(e => e.status === 'completed').length}</h3>
            <p>Completed</p>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <div className="events-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="filters-section">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming</option>
            <option value="ongoing">Ongoing</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Categories</option>
            <option value="Workshop">Workshop</option>
            <option value="Community Service">Community Service</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
          </select>
        </div>

        <button
          className="add-event-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Create Event
        </button>
      </div>

      {/* Add Event Form */}
      {showAddForm && (
        <motion.div
          className="add-event-form"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Create New Event</h3>
          <form onSubmit={handleAddEvent}>
            <div className="form-row">
              <div className="form-group">
                <label>Event Title</label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({...newEvent, category: e.target.value})}
                >
                  <option value="Workshop">Workshop</option>
                  <option value="Community Service">Community Service</option>
                  <option value="Health">Health</option>
                  <option value="Education">Education</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={newEvent.description}
                onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                rows="3"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Time</label>
                <input
                  type="time"
                  value={newEvent.time}
                  onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Location</label>
                <input
                  type="text"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Capacity</label>
                <input
                  type="number"
                  value={newEvent.capacity}
                  onChange={(e) => setNewEvent({...newEvent, capacity: e.target.value})}
                  min="1"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label>Organizer</label>
              <input
                type="text"
                value={newEvent.organizer}
                onChange={(e) => setNewEvent({...newEvent, organizer: e.target.value})}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">Create Event</button>
              <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Events Grid */}
      <div className="events-grid">
        {filteredEvents.map((event) => (
          <motion.div
            key={event.id}
            className="event-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="event-header">
              <div className="event-status" style={{ backgroundColor: getStatusColor(event.status) }}>
                {event.status}
              </div>
              <div className="event-category" style={{ backgroundColor: getCategoryColor(event.category) }}>
                {event.category}
              </div>
            </div>
            
            <div className="event-content">
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-details">
                <div className="detail-item">
                  <span className="detail-icon">📅</span>
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">🕒</span>
                  <span>{event.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>{event.location}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">👥</span>
                  <span>{event.registered}/{event.capacity} registered</span>
                </div>
              </div>
              
              <div className="event-organizer">
                <span className="organizer-label">Organized by:</span>
                <span className="organizer-name">{event.organizer}</span>
              </div>
            </div>
            
            <div className="event-actions">
              <button className="action-btn edit-btn">Edit</button>
              <button className="action-btn view-btn">View Details</button>
              <select
                value={event.status}
                onChange={(e) => handleStatusChange(event.id, e.target.value)}
                className="status-select"
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events; 