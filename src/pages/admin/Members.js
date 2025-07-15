import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../../styles/pages/admin/Members.css';

const Members = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'Rahul Kumar',
      email: 'rahul.kumar@email.com',
      phone: '+91 98765 43210',
      joinDate: '2023-01-15',
      status: 'active',
      role: 'Volunteer',
      location: 'Mumbai, Maharashtra'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      email: 'priya.sharma@email.com',
      phone: '+91 87654 32109',
      joinDate: '2023-02-20',
      status: 'active',
      role: 'Member',
      location: 'Delhi, NCR'
    },
    {
      id: 3,
      name: 'Amit Patel',
      email: 'amit.patel@email.com',
      phone: '+91 76543 21098',
      joinDate: '2023-03-10',
      status: 'inactive',
      role: 'Volunteer',
      location: 'Bangalore, Karnataka'
    },
    {
      id: 4,
      name: 'Neha Singh',
      email: 'neha.singh@email.com',
      phone: '+91 65432 10987',
      joinDate: '2023-04-05',
      status: 'active',
      role: 'Member',
      location: 'Chennai, Tamil Nadu'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Member',
    location: ''
  });

  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  const handleAddMember = (e) => {
    e.preventDefault();
    const member = {
      id: members.length + 1,
      ...newMember,
      joinDate: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    setMembers([...members, member]);
    setNewMember({ name: '', email: '', phone: '', role: 'Member', location: '' });
    setShowAddForm(false);
  };

  const handleStatusChange = (memberId, newStatus) => {
    setMembers(members.map(member => 
      member.id === memberId ? { ...member, status: newStatus } : member
    ));
  };

  return (
    <div className="admin-members">
      <div className="members-header">
        <h1>Members Management</h1>
        <p>Manage organization members and volunteers</p>
      </div>

      {/* Filters and Search */}
      <div className="members-controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search members..."
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Roles</option>
            <option value="Member">Member</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          className="add-member-btn"
          onClick={() => setShowAddForm(true)}
        >
          + Add Member
        </button>
      </div>

      {/* Add Member Form */}
      {showAddForm && (
        <motion.div
          className="add-member-form"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Add New Member</h3>
          <form onSubmit={handleAddMember}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  value={newMember.name}
                  onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={newMember.email}
                  onChange={(e) => setNewMember({...newMember, email: e.target.value})}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={newMember.phone}
                  onChange={(e) => setNewMember({...newMember, phone: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Role</label>
                <select
                  value={newMember.role}
                  onChange={(e) => setNewMember({...newMember, role: e.target.value})}
                >
                  <option value="Member">Member</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Location</label>
              <input
                type="text"
                value={newMember.location}
                onChange={(e) => setNewMember({...newMember, location: e.target.value})}
                required
              />
            </div>
            <div className="form-actions">
              <button type="submit" className="save-btn">Add Member</button>
              <button type="button" className="cancel-btn" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Members Table */}
      <div className="members-table-container">
        <table className="members-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
              <th>Location</th>
              <th>Join Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMembers.map((member) => (
              <motion.tr
                key={member.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>{member.phone}</td>
                <td>
                  <span className={`role-badge ${member.role.toLowerCase()}`}>
                    {member.role}
                  </span>
                </td>
                <td>{member.location}</td>
                <td>{new Date(member.joinDate).toLocaleDateString()}</td>
                <td>
                  <span className={`status-badge ${member.status}`}>
                    {member.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button
                      className={`status-toggle ${member.status === 'active' ? 'deactivate' : 'activate'}`}
                      onClick={() => handleStatusChange(member.id, member.status === 'active' ? 'inactive' : 'active')}
                    >
                      {member.status === 'active' ? 'Deactivate' : 'Activate'}
                    </button>
                    <button className="edit-btn">Edit</button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Stats */}
      <div className="members-summary">
        <div className="summary-card">
          <h3>Total Members</h3>
          <p>{members.length}</p>
        </div>
        <div className="summary-card">
          <h3>Active Members</h3>
          <p>{members.filter(m => m.status === 'active').length}</p>
        </div>
        <div className="summary-card">
          <h3>Volunteers</h3>
          <p>{members.filter(m => m.role === 'Volunteer').length}</p>
        </div>
        <div className="summary-card">
          <h3>New This Month</h3>
          <p>{members.filter(m => {
            const joinDate = new Date(m.joinDate);
            const now = new Date();
            return joinDate.getMonth() === now.getMonth() && joinDate.getFullYear() === now.getFullYear();
          }).length}</p>
        </div>
      </div>
    </div>
  );
};

export default Members; 