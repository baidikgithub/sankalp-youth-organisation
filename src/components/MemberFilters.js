import React from 'react';
import { Row, Col, Input, Select, Button, Space } from 'antd';
import { SearchOutlined, UserAddOutlined, ClearOutlined } from '@ant-design/icons';

const { Option } = Select;

const MemberFilters = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
  roleFilter,
  onRoleFilterChange,
  onAddMember,
  onClearFilters
}) => {
  const handleClearFilters = () => {
    onSearchChange('');
    onStatusFilterChange('all');
    onRoleFilterChange('all');
    if (onClearFilters) {
      onClearFilters();
    }
  };

  const hasActiveFilters = searchTerm || statusFilter !== 'all' || roleFilter !== 'all';

  return (
    <div style={{ 
      background: 'white', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
    }}>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={24} md={12} lg={8} xl={6}>
          <Input
            size="large"
            placeholder="Search members..."
            prefix={<SearchOutlined />}
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            allowClear
          />
        </Col>
        
        <Col xs={12} sm={8} md={6} lg={4} xl={3}>
          <Select
            size="large"
            value={statusFilter}
            onChange={onStatusFilterChange}
            style={{ width: '100%' }}
            placeholder="All Status"
          >
            <Option value="all">All Status</Option>
            <Option value="active">Active</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
        </Col>
        
        <Col xs={12} sm={8} md={6} lg={4} xl={3}>
          <Select
            size="large"
            value={roleFilter}
            onChange={onRoleFilterChange}
            style={{ width: '100%' }}
            placeholder="All Roles"
          >
            <Option value="all">All Roles</Option>
            <Option value="Member">Member</Option>
            <Option value="Volunteer">Volunteer</Option>
            <Option value="Admin">Admin</Option>
          </Select>
        </Col>
        
        <Col xs={24} sm={8} md={12} lg={8} xl={12}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            gap: '8px',
            width: '100%'
          }}>
            <Space wrap>
              {hasActiveFilters && (
                <Button
                  onClick={handleClearFilters}
                  icon={<ClearOutlined />}
                  size="large"
                >
                  Clear Filters
                </Button>
              )}
              <Button
                type="primary"
                size="large"
                icon={<UserAddOutlined />}
                onClick={onAddMember}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none'
                }}
              >
                Add Member
              </Button>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MemberFilters; 