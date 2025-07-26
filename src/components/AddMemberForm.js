import React from 'react';
import { Modal, Form, Input, Select, Button, Row, Col } from 'antd';
import { UserAddOutlined, CloseOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddMemberForm = ({ 
  visible, 
  onCancel, 
  onSubmit, 
  loading = false,
  initialValues = null,
  title = "Add New Member"
}) => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await onSubmit(values);
      form.resetFields();
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    onCancel();
  };

  // Phone number validation
  const validatePhone = (_, value) => {
    if (!value) {
      return Promise.reject(new Error('Please enter phone number'));
    }
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
    if (!phoneRegex.test(value)) {
      return Promise.reject(new Error('Please enter a valid phone number'));
    }
    return Promise.resolve();
  };

  return (
    <Modal
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <UserAddOutlined />
          {title}
        </div>
      }
      open={visible}
      onCancel={handleCancel}
      footer={null}
      width={600}
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={initialValues}
        requiredMark={false}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: 'Please enter the member name' },
                { min: 2, message: 'Name must be at least 2 characters' },
                { max: 50, message: 'Name must not exceed 50 characters' }
              ]}
            >
              <Input 
                placeholder="Enter full name"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter email address' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input 
                placeholder="Enter email address"
                size="large"
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { validator: validatePhone }
              ]}
            >
              <Input 
                placeholder="Enter phone number"
                size="large"
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Role"
              name="role"
              rules={[
                { required: true, message: 'Please select a role' }
              ]}
              initialValue="Member"
            >
              <Select 
                placeholder="Select role"
                size="large"
              >
                <Option value="Member">Member</Option>
                <Option value="Volunteer">Volunteer</Option>
                <Option value="Admin">Admin</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            { required: true, message: 'Please enter location' },
            { min: 2, message: 'Location must be at least 2 characters' }
          ]}
        >
          <Input 
            placeholder="Enter location (City, State)"
            size="large"
          />
        </Form.Item>

        <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
          <Button 
            onClick={handleCancel}
            style={{ marginRight: 8 }}
            icon={<CloseOutlined />}
          >
            Cancel
          </Button>
          <Button 
            type="primary" 
            htmlType="submit"
            loading={loading}
            icon={<UserAddOutlined />}
          >
            {initialValues ? 'Update Member' : 'Add Member'}
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddMemberForm; 