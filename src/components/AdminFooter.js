import React from 'react';
import { Layout, Row, Col, Space, Typography, Divider } from 'antd';
import { 
  CopyrightOutlined, 
  MailOutlined, 
  PhoneOutlined, 
  GlobalOutlined,
  UserOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AdminFooter = () => {
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().toLocaleTimeString('en-US', { 
    hour12: true, 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <Footer
      style={{
        background: '#f0f2f5',
        borderTop: '1px solid #d9d9d9',
        padding: '24px 50px',
        marginTop: 'auto'
      }}
    >
      <Row gutter={[32, 16]} justify="space-between" align="middle">
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical" size="small">
            <Text strong style={{ fontSize: '16px', color: '#1890ff' }}>
              Sankalp Youth Organisation
            </Text>
            <Text type="secondary" style={{ fontSize: '14px' }}>
              Admin Dashboard
            </Text>
            <Text type="secondary" style={{ fontSize: '12px' }}>
              Building a world of hope through digital innovation
            </Text>
          </Space>
        </Col>
        
        <Col xs={24} sm={12} md={8}>
          <Space direction="vertical" size="small" align="center">
            <Text strong style={{ fontSize: '14px' }}>
              Quick Contact
            </Text>
            <Space direction="vertical" size="xs">
              <Text style={{ fontSize: '12px' }}>
                <MailOutlined style={{ marginRight: '6px', color: '#1890ff' }} />
                admin@sankalpyouth.org
              </Text>
              <Text style={{ fontSize: '12px' }}>
                <PhoneOutlined style={{ marginRight: '6px', color: '#1890ff' }} />
                +91 98765 43210
              </Text>
              <Text style={{ fontSize: '12px' }}>
                <GlobalOutlined style={{ marginRight: '6px', color: '#1890ff' }} />
                www.sankalpyouth.org
              </Text>
            </Space>
          </Space>
        </Col>
        
        <Col xs={24} sm={24} md={8}>
          <Space direction="vertical" size="small" align="end">
            <Space>
              <UserOutlined style={{ color: '#1890ff' }} />
              <Text style={{ fontSize: '12px' }}>
                Logged in as: <Text strong>Admin User</Text>
              </Text>
            </Space>
            <Space>
              <ClockCircleOutlined style={{ color: '#1890ff' }} />
              <Text style={{ fontSize: '12px' }}>
                Current time: {currentTime}
              </Text>
            </Space>
            <Link 
              href="/" 
              style={{ fontSize: '12px' }}
              onClick={(e) => {
                e.preventDefault();
                window.open('/', '_blank');
              }}
            >
              View Public Site
            </Link>
          </Space>
        </Col>
      </Row>
      
      <Divider style={{ margin: '16px 0 8px 0' }} />
      
      <Row justify="center">
        <Text 
          style={{ fontSize: '12px', color: '#666' }}
        >
          <CopyrightOutlined style={{ marginRight: '4px' }} />
          {currentYear} Sankalp Youth Organisation. All rights reserved. | Admin Panel v2.0
        </Text>
      </Row>
    </Footer>
  );
};

export default AdminFooter; 