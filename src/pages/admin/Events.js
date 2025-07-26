import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
  Statistic,
  Input,
  Select,
  Button,
  Modal,
  Form,
  DatePicker,
  TimePicker,
  InputNumber,
  Tag,
  Typography,
  Space,
  Tooltip,
  message,
  Progress
} from 'antd';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  SyncOutlined,
  CheckCircleOutlined,
  SearchOutlined,
  PlusOutlined,
  EditOutlined,
  EyeOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import dayjs from 'dayjs';

const { Title, Text } = Typography;
const { Option } = Select;

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

  const [showAddModal, setShowAddModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [form] = Form.useForm();

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || event.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const handleAddEvent = (values) => {
    const event = {
      id: events.length + 1,
      title: values.title,
      description: values.description,
      date: values.date.format('YYYY-MM-DD'),
      time: values.time.format('HH:mm A'),
      location: values.location,
      capacity: values.capacity,
      registered: 0,
      status: 'upcoming',
      category: values.category,
      organizer: values.organizer
    };
    setEvents([...events, event]);
    form.resetFields();
    setShowAddModal(false);
    message.success('Event created successfully!');
  };

  const handleStatusChange = (eventId, newStatus) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, status: newStatus } : event
    ));
    message.success(`Event status updated to ${newStatus}`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return 'blue';
      case 'ongoing': return 'green';
      case 'completed': return 'default';
      case 'cancelled': return 'red';
      default: return 'default';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Workshop': return 'blue';
      case 'Community Service': return 'green';
      case 'Health': return 'red';
      case 'Education': return 'orange';
      default: return 'default';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming': return <CalendarOutlined />;
      case 'ongoing': return <SyncOutlined spin />;
      case 'completed': return <CheckCircleOutlined />;
      case 'cancelled': return <ClockCircleOutlined />;
      default: return <CalendarOutlined />;
    }
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ marginBottom: '24px' }}>
        <Title level={2} style={{ marginBottom: '8px', color: '#1890ff' }}>
          Events Management
        </Title>
        <Text type="secondary" style={{ fontSize: '16px' }}>
          Manage and organize events for the organization
        </Text>
      </div>

      {/* Statistics Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Row gutter={[16, 16]} style={{ marginBottom: '24px' }}>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Total Events"
                value={events.length}
                prefix={<CalendarOutlined style={{ color: '#1890ff' }} />}
                valueStyle={{ color: '#1890ff' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Upcoming"
                value={events.filter(e => e.status === 'upcoming').length}
                prefix={<ClockCircleOutlined style={{ color: '#faad14' }} />}
                valueStyle={{ color: '#faad14' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Ongoing"
                value={events.filter(e => e.status === 'ongoing').length}
                prefix={<SyncOutlined style={{ color: '#52c41a' }} />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card>
              <Statistic
                title="Completed"
                value={events.filter(e => e.status === 'completed').length}
                prefix={<CheckCircleOutlined style={{ color: '#52c41a' }} />}
                valueStyle={{ color: '#52c41a' }}
              />
            </Card>
          </Col>
        </Row>
      </motion.div>

      {/* Controls */}
      <Card style={{ marginBottom: '24px' }}>
        <Row gutter={[16, 16]} align="middle">
          <Col xs={24} sm={24} md={8}>
            <Input
              placeholder="Search events..."
              prefix={<SearchOutlined />}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              allowClear
            />
          </Col>
          <Col xs={24} sm={8} md={4}>
            <Select
              placeholder="Status"
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: '100%' }}
            >
              <Option value="all">All Status</Option>
              <Option value="upcoming">Upcoming</Option>
              <Option value="ongoing">Ongoing</Option>
              <Option value="completed">Completed</Option>
              <Option value="cancelled">Cancelled</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8} md={4}>
            <Select
              placeholder="Category"
              value={categoryFilter}
              onChange={setCategoryFilter}
              style={{ width: '100%' }}
            >
              <Option value="all">All Categories</Option>
              <Option value="Workshop">Workshop</Option>
              <Option value="Community Service">Community Service</Option>
              <Option value="Health">Health</Option>
              <Option value="Education">Education</Option>
            </Select>
          </Col>
          <Col xs={24} sm={24} md={8}>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={() => setShowAddModal(true)}
              style={{ width: '100%' }}
            >
              Create Event
            </Button>
          </Col>
        </Row>
      </Card>

      {/* Events Grid */}
      <Row gutter={[16, 16]}>
        {filteredEvents.map((event) => (
          <Col xs={24} sm={12} lg={8} xl={6} key={event.id}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                hoverable
                style={{ height: '100%' }}
                actions={[
                  <Tooltip title="Edit">
                    <EditOutlined key="edit" />
                  </Tooltip>,
                  <Tooltip title="View Details">
                    <EyeOutlined key="view" />
                  </Tooltip>,
                  <Select
                    key="status"
                    value={event.status}
                    onChange={(value) => handleStatusChange(event.id, value)}
                    size="small"
                    style={{ width: '90px' }}
                  >
                    <Option value="upcoming">Upcoming</Option>
                    <Option value="ongoing">Ongoing</Option>
                    <Option value="completed">Completed</Option>
                    <Option value="cancelled">Cancelled</Option>
                  </Select>
                ]}
              >
                <div style={{ marginBottom: '12px' }}>
                  <Space>
                    <Tag color={getStatusColor(event.status)} icon={getStatusIcon(event.status)}>
                      {event.status.toUpperCase()}
                    </Tag>
                    <Tag color={getCategoryColor(event.category)}>
                      {event.category}
                    </Tag>
                  </Space>
                </div>
                
                <Title level={4} style={{ marginBottom: '8px' }}>
                  {event.title}
                </Title>
                
                <Text type="secondary" style={{ display: 'block', marginBottom: '16px' }}>
                  {event.description}
                </Text>
                
                <Space direction="vertical" size="small" style={{ width: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CalendarOutlined style={{ color: '#1890ff' }} />
                    <Text>{new Date(event.date).toLocaleDateString()}</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ClockCircleOutlined style={{ color: '#1890ff' }} />
                    <Text>{event.time}</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <EnvironmentOutlined style={{ color: '#1890ff' }} />
                    <Text>{event.location}</Text>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <TeamOutlined style={{ color: '#1890ff' }} />
                    <Text>{event.registered}/{event.capacity} registered</Text>
                  </div>
                </Space>
                
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f0f0f0' }}>
                  <Space>
                    <UserOutlined style={{ color: '#666' }} />
                    <Text type="secondary">Organized by: </Text>
                    <Text strong style={{ color: '#1890ff' }}>{event.organizer}</Text>
                  </Space>
                </div>
                
                <div style={{ marginTop: '12px' }}>
                  <Text type="secondary" style={{ fontSize: '12px' }}>Registration Progress</Text>
                  <Progress 
                    percent={Math.round((event.registered / event.capacity) * 100)} 
                    size="small"
                    status={event.registered === event.capacity ? 'success' : 'active'}
                  />
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Add Event Modal */}
      <Modal
        title="Create New Event"
        open={showAddModal}
        onCancel={() => {
          setShowAddModal(false);
          form.resetFields();
        }}
        footer={null}
        width={800}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleAddEvent}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Event Title"
                rules={[{ required: true, message: 'Please enter event title' }]}
              >
                <Input placeholder="Enter event title" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="category"
                label="Category"
                rules={[{ required: true, message: 'Please select category' }]}
              >
                <Select placeholder="Select category">
                  <Option value="Workshop">Workshop</Option>
                  <Option value="Community Service">Community Service</Option>
                  <Option value="Health">Health</Option>
                  <Option value="Education">Education</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please enter description' }]}
          >
            <Input.TextArea rows={3} placeholder="Enter event description" />
          </Form.Item>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="date"
                label="Date"
                rules={[{ required: true, message: 'Please select date' }]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="time"
                label="Time"
                rules={[{ required: true, message: 'Please select time' }]}
              >
                <TimePicker style={{ width: '100%' }} format="HH:mm A" />
              </Form.Item>
            </Col>
          </Row>
          
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true, message: 'Please enter location' }]}
              >
                <Input placeholder="Enter event location" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true, message: 'Please enter capacity' }]}
              >
                <InputNumber 
                  min={1} 
                  placeholder="Enter capacity" 
                  style={{ width: '100%' }}
                />
              </Form.Item>
            </Col>
          </Row>
          
          <Form.Item
            name="organizer"
            label="Organizer"
            rules={[{ required: true, message: 'Please enter organizer name' }]}
          >
            <Input placeholder="Enter organizer name" />
          </Form.Item>
          
          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Space>
              <Button onClick={() => {
                setShowAddModal(false);
                form.resetFields();
              }}>
                Cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Create Event
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Events; 