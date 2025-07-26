import React, { useState } from 'react';
import { message, Space, Typography } from 'antd';
import MemberTable from '../../components/MemberTable';
import AddMemberForm from '../../components/AddMemberForm';
import MemberFilters from '../../components/MemberFilters';
import MemberStats from '../../components/MemberStats';

const { Title } = Typography;

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

  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [roleFilter, setRoleFilter] = useState('all');
  
  // Form states
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [loading, setLoading] = useState(false);

  // Filter members based on search and filters
  const filteredMembers = members.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.phone.includes(searchTerm);
    const matchesStatus = statusFilter === 'all' || member.status === statusFilter;
    const matchesRole = roleFilter === 'all' || member.role === roleFilter;
    
    return matchesSearch && matchesStatus && matchesRole;
  });

  // Handle adding new member
  const handleAddMember = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newMember = {
        id: Math.max(...members.map(m => m.id), 0) + 1,
        ...values,
        joinDate: new Date().toISOString().split('T')[0],
        status: 'active'
      };
      
      setMembers(prev => [...prev, newMember]);
      setShowAddForm(false);
      message.success('Member added successfully!');
    } catch (error) {
      message.error('Failed to add member. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle editing member
  const handleEditMember = async (values) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMembers(prev => prev.map(member => 
        member.id === editingMember.id 
          ? { ...member, ...values }
          : member
      ));
      
      setEditingMember(null);
      message.success('Member updated successfully!');
    } catch (error) {
      message.error('Failed to update member. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Handle status change
  const handleStatusChange = async (memberId, newStatus) => {
    try {
      setMembers(prev => prev.map(member => 
        member.id === memberId 
          ? { ...member, status: newStatus }
          : member
      ));
      
      message.success(`Member ${newStatus === 'active' ? 'activated' : 'deactivated'} successfully!`);
    } catch (error) {
      message.error('Failed to update member status. Please try again.');
    }
  };

  // Handle edit button click
  const handleEditClick = (member) => {
    setEditingMember(member);
  };

  // Handle form cancel
  const handleFormCancel = () => {
    setShowAddForm(false);
    setEditingMember(null);
  };

  return (
    <div style={{ 
      background: '#f5f5f5', 
      minHeight: 'calc(100vh - 70px)',
      padding: '0'
    }}>

      {/* Main Content */}
      <div style={{ padding: '0 24px 24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* Member Statistics */}
          <MemberStats members={members} />
          
          {/* Filters and Search */}
          <MemberFilters
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
            roleFilter={roleFilter}
            onRoleFilterChange={setRoleFilter}
            onAddMember={() => setShowAddForm(true)}
          />
          
          {/* Members Table */}
          <div style={{ 
            background: 'white',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <MemberTable
              members={filteredMembers}
              onStatusChange={handleStatusChange}
              onEdit={handleEditClick}
            />
          </div>
          
          {/* Add Member Form Modal */}
          <AddMemberForm
            visible={showAddForm}
            onCancel={handleFormCancel}
            onSubmit={handleAddMember}
            loading={loading}
            title="Add New Member"
          />
          
          {/* Edit Member Form Modal */}
          <AddMemberForm
            visible={!!editingMember}
            onCancel={handleFormCancel}
            onSubmit={handleEditMember}
            loading={loading}
            initialValues={editingMember}
            title="Edit Member"
          />
        </Space>
      </div>
    </div>
  );
};

export default Members; 