import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import { 
  UserOutlined, 
  CheckCircleOutlined, 
  HeartOutlined, 
  CalendarOutlined 
} from '@ant-design/icons';

const MemberStats = ({ members = [] }) => {
  // Calculate statistics
  const totalMembers = members.length;
  const activeMembers = members.filter(m => m.status === 'active').length;
  const volunteers = members.filter(m => m.role === 'Volunteer').length;
  
  // New members this month
  const now = new Date();
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();
  const newThisMonth = members.filter(m => {
    const joinDate = new Date(m.joinDate);
    return joinDate.getMonth() === currentMonth && joinDate.getFullYear() === currentYear;
  }).length;

  const statsData = [
    {
      title: "Total Members",
      value: totalMembers,
      icon: <UserOutlined style={{ color: '#1890ff' }} />,
      color: '#1890ff'
    },
    {
      title: "Active Members", 
      value: activeMembers,
      icon: <CheckCircleOutlined style={{ color: '#52c41a' }} />,
      color: '#52c41a'
    },
    {
      title: "Volunteers",
      value: volunteers,
      icon: <HeartOutlined style={{ color: '#fa8c16' }} />,
      color: '#fa8c16'
    },
    {
      title: "New This Month",
      value: newThisMonth,
      icon: <CalendarOutlined style={{ color: '#722ed1' }} />,
      color: '#722ed1'
    }
  ];

  return (
    <Row gutter={[16, 16]}>
      {statsData.map((stat, index) => (
        <Col xs={12} sm={12} md={6} lg={6} key={index}>
          <Card
            style={{
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            bodyStyle={{ padding: '20px' }}
            hoverable
          >
            <Statistic
              title={
                <div style={{ 
                  fontSize: '14px', 
                  color: '#8c8c8c', 
                  fontWeight: 500,
                  marginBottom: '8px'
                }}>
                  {stat.title}
                </div>
              }
              value={stat.value}
              prefix={stat.icon}
              valueStyle={{
                color: stat.color,
                fontSize: '24px',
                fontWeight: 'bold'
              }}
            />
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MemberStats; 