import React, { useState } from 'react';
import {
  Card,
  Tabs,
  Form,
  Input,
  Switch,
  Button,
  Space,
  Typography,
  Row,
  Col,
  InputNumber,
  message,
  Divider
} from 'antd';
import {
  SettingOutlined,
  BankOutlined,
  BellOutlined,
  SecurityScanOutlined,
  PhoneOutlined,
  SaveOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Title, Text } = Typography;
const { TextArea } = Input;

const Settings = () => {
  const [form] = Form.useForm();
  const [settings, setSettings] = useState({
    organizationName: 'Sankalp Youth Organisation',
    email: 'info@sankalpyouth.org',
    phone: '+91 98765 43210',
    address: 'Mumbai, Maharashtra, India',
    website: 'www.sankalpyouth.org',
    socialMedia: {
      facebook: 'https://facebook.com/sankalpyouth',
      twitter: 'https://twitter.com/sankalpyouth',
      instagram: 'https://instagram.com/sankalpyouth',
      linkedin: 'https://linkedin.com/company/sankalpyouth'
    },
    notifications: {
      emailNotifications: true,
      smsNotifications: false,
      pushNotifications: true
    },
    security: {
      twoFactorAuth: false,
      sessionTimeout: 30,
      passwordExpiry: 90
    }
  });

  const handleSave = (values) => {
    console.log('Settings saved:', values);
    setSettings(values);
    message.success('Settings saved successfully!');
  };

  const tabItems = [
    {
      key: 'general',
      label: (
        <span>
          <SettingOutlined />
          General Settings
        </span>
      ),
      children: (
        <Card>
          <Title level={4} style={{ marginBottom: '24px' }}>General Settings</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                name="organizationName"
                label="Organization Name"
                rules={[{ required: true, message: 'Please enter organization name' }]}
              >
                <Input placeholder="Enter organization name" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="email"
                label="Contact Email"
                rules={[
                  { required: true, message: 'Please enter contact email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Enter contact email" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[{ required: true, message: 'Please enter phone number' }]}
              >
                <Input placeholder="Enter phone number" />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name="website"
                label="Website"
                rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
              >
                <Input placeholder="Enter website URL" />
              </Form.Item>
            </Col>
            <Col xs={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true, message: 'Please enter address' }]}
              >
                <TextArea rows={3} placeholder="Enter organization address" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      )
    },
    {
      key: 'social',
      label: (
        <span>
          <PhoneOutlined />
          Social Media
        </span>
      ),
      children: (
        <Card>
          <Title level={4} style={{ marginBottom: '24px' }}>Social Media Links</Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} md={12}>
              <Form.Item
                name={['socialMedia', 'facebook']}
                label="Facebook"
                rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
              >
                <Input 
                  placeholder="https://facebook.com/yourpage" 
                  prefix="📘"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name={['socialMedia', 'twitter']}
                label="Twitter"
                rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
              >
                <Input 
                  placeholder="https://twitter.com/yourhandle" 
                  prefix="🐦"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name={['socialMedia', 'instagram']}
                label="Instagram"
                rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
              >
                <Input 
                  placeholder="https://instagram.com/yourhandle" 
                  prefix="📷"
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                name={['socialMedia', 'linkedin']}
                label="LinkedIn"
                rules={[{ type: 'url', message: 'Please enter a valid URL' }]}
              >
                <Input 
                  placeholder="https://linkedin.com/company/yourcompany" 
                  prefix="💼"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      )
    },
    {
      key: 'notifications',
      label: (
        <span>
          <BellOutlined />
          Notifications
        </span>
      ),
      children: (
        <Card>
          <Title level={4} style={{ marginBottom: '24px' }}>Notification Preferences</Title>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Row justify="space-between" align="middle">
                <Col>
                  <div>
                    <Text strong>Email Notifications</Text>
                    <br />
                    <Text type="secondary">Receive notifications via email</Text>
                  </div>
                </Col>
                <Col>
                  <Form.Item 
                    name={['notifications', 'emailNotifications']} 
                    valuePropName="checked"
                    style={{ margin: 0 }}
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            
            <Divider />
            
            <div>
              <Row justify="space-between" align="middle">
                <Col>
                  <div>
                    <Text strong>SMS Notifications</Text>
                    <br />
                    <Text type="secondary">Receive notifications via SMS</Text>
                  </div>
                </Col>
                <Col>
                  <Form.Item 
                    name={['notifications', 'smsNotifications']} 
                    valuePropName="checked"
                    style={{ margin: 0 }}
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            
            <Divider />
            
            <div>
              <Row justify="space-between" align="middle">
                <Col>
                  <div>
                    <Text strong>Push Notifications</Text>
                    <br />
                    <Text type="secondary">Receive browser push notifications</Text>
                  </div>
                </Col>
                <Col>
                  <Form.Item 
                    name={['notifications', 'pushNotifications']} 
                    valuePropName="checked"
                    style={{ margin: 0 }}
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
            </div>
          </Space>
        </Card>
      )
    },
    {
      key: 'security',
      label: (
        <span>
          <SecurityScanOutlined />
          Security
        </span>
      ),
      children: (
        <Card>
          <Title level={4} style={{ marginBottom: '24px' }}>Security Settings</Title>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <div>
              <Row justify="space-between" align="middle">
                <Col span={16}>
                  <div>
                    <Text strong>Two-Factor Authentication</Text>
                    <br />
                    <Text type="secondary">Add an extra layer of security to your account</Text>
                  </div>
                </Col>
                <Col>
                  <Form.Item 
                    name={['security', 'twoFactorAuth']} 
                    valuePropName="checked"
                    style={{ margin: 0 }}
                  >
                    <Switch />
                  </Form.Item>
                </Col>
              </Row>
            </div>
            
            <Divider />
            
            <Row gutter={[16, 16]}>
              <Col xs={24} md={12}>
                <Form.Item
                  name={['security', 'sessionTimeout']}
                  label="Session Timeout (minutes)"
                  rules={[{ required: true, message: 'Please enter session timeout' }]}
                >
                  <InputNumber
                    min={5}
                    max={120}
                    style={{ width: '100%' }}
                    placeholder="Enter timeout in minutes"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={12}>
                <Form.Item
                  name={['security', 'passwordExpiry']}
                  label="Password Expiry (days)"
                  rules={[{ required: true, message: 'Please enter password expiry' }]}
                >
                  <InputNumber
                    min={30}
                    max={365}
                    style={{ width: '100%' }}
                    placeholder="Enter expiry in days"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Space>
        </Card>
      )
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2} style={{ marginBottom: '8px', color: '#1890ff' }}>
          Settings
        </Title>
        <Text type="secondary" style={{ fontSize: '16px' }}>
          Manage your organization's settings and preferences
        </Text>
      </div>

      {/* Settings Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={settings}
          onFinish={handleSave}
        >
          <Card>
            <Tabs
              items={tabItems}
              type="card"
              size="large"
            />
          </Card>
          
          {/* Save Button */}
          <Card style={{ marginTop: '24px', textAlign: 'right' }}>
            <Space>
              <Button 
                onClick={() => form.resetFields()}
                size="large"
              >
                Reset
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                icon={<SaveOutlined />}
                size="large"
              >
                Save Changes
              </Button>
            </Space>
          </Card>
        </Form>
      </motion.div>
    </div>
  );
};

export default Settings; 