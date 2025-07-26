import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Layout, 
  Menu, 
  Button, 
  Avatar, 
  Dropdown, 
  Space, 
  Typography 
} from 'antd';
import { 
  DashboardOutlined, 
  TeamOutlined, 
  CalendarOutlined, 
  DollarOutlined, 
  SettingOutlined, 
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Sider, Header } = Layout;
const { Text } = Typography;

const AdminNavigation = ({ collapsed, onCollapse, children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '/admin',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
      onClick: () => navigate('/admin')
    },
    {
      key: '/admin/members',
      icon: <TeamOutlined />,
      label: 'Members',
      onClick: () => navigate('/admin/members')
    },
    {
      key: '/admin/events',
      icon: <CalendarOutlined />,
      label: 'Events',
      onClick: () => navigate('/admin/events')
    },
    {
      key: '/admin/donations',
      icon: <DollarOutlined />,
      label: 'Donations',
      onClick: () => navigate('/admin/donations')
    },
    {
      key: '/admin/settings',
      icon: <SettingOutlined />,
      label: 'Settings',
      onClick: () => navigate('/admin/settings')
    }
  ];

  const profileMenuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile'
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: () => {
        // Handle logout logic here
        console.log('Logout clicked');
      }
    }
  ];

  const handleBackToSite = () => {
    navigate('/');
  };

  return (
    <Layout style={{ minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Sidebar */}
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '2px 0 8px 0 rgba(29,35,41,.05)',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000
        }}
        width={250}
        collapsedWidth={60}
      >
        {/* Logo Section */}
        <motion.div
          style={{
            height: '64px',
            margin: '16px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: collapsed ? 'center' : 'flex-start',
            padding: collapsed ? '0' : '0 16px',
            transition: 'all 0.3s'
          }}
          whileHover={{ background: 'rgba(255, 255, 255, 0.2)' }}
        >
          <img 
            src="/logo.png" 
            alt="Sankalp Youth" 
            style={{ 
              width: '32px', 
              height: '32px', 
              borderRadius: '50%' 
            }} 
          />
          {!collapsed && (
            <Text 
              style={{ 
                color: 'white', 
                marginLeft: '12px', 
                fontWeight: 600,
                fontSize: '16px'
              }}
            >
              Sankalp Youth
            </Text>
          )}
        </motion.div>

        {/* Navigation Menu */}
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{
            background: 'transparent',
            border: 'none'
          }}
        />

        {/* Back to Site Button */}
        <div style={{ 
          position: 'absolute', 
          bottom: '16px', 
          left: '16px', 
          right: '16px' 
        }}>
          <Button
            type="text"
            icon={<HomeOutlined />}
            onClick={handleBackToSite}
            style={{
              color: 'white',
              width: '100%',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: collapsed ? 'center' : 'flex-start',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '6px'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            {!collapsed && <span style={{ marginLeft: '8px' }}>Back to Site</span>}
          </Button>
        </div>
      </Sider>

      {/* Main Layout */}
      <Layout style={{ 
        marginLeft: collapsed ? 60 : 250, 
        transition: 'margin-left 0.2s',
        minHeight: '100vh'
      }}>
        {/* Header */}
        <Header
          style={{
            padding: '0 24px',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 1px 4px rgba(0,21,41,.08)',
            position: 'sticky',
            top: 0,
            zIndex: 100
          }}
        >
          {/* Left side - Toggle button */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onCollapse}
            style={{
              fontSize: '16px',
              width: 40,
              height: 40,
            }}
          />

          {/* Right side - Profile */}
          <Dropdown
            menu={{ items: profileMenuItems }}
            placement="bottomRight"
            arrow
          >
            <Space style={{ cursor: 'pointer' }}>
              <div style={{ textAlign: 'right', marginRight: '8px' }}>
                <div style={{ 
                  fontSize: '14px', 
                  fontWeight: 600, 
                  lineHeight: '20px' 
                }}>
                  Admin User
                </div>
                <div style={{ 
                  fontSize: '12px', 
                  color: '#666', 
                  lineHeight: '16px' 
                }}>
                  Administrator
                </div>
              </div>
              <Avatar 
                size={40} 
                icon={<UserOutlined />}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
              />
            </Space>
          </Dropdown>
        </Header>

        {/* Content */}
        {children}
      </Layout>
    </Layout>
  );
};

export default AdminNavigation; 