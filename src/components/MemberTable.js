import React from 'react';
import { Table, Tag, Button, Space, Tooltip } from 'antd';
import { EditOutlined, UserDeleteOutlined, UserAddOutlined } from '@ant-design/icons';

const MemberTable = ({ 
  members, 
  loading = false, 
  onStatusChange, 
  onEdit,
  pagination = true 
}) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (role) => {
        const color = role === 'Admin' ? 'blue' : role === 'Member' ? 'green' : 'orange';
        return (
          <Tag color={color} key={role}>
            {role.toUpperCase()}
          </Tag>
        );
      },
      filters: [
        { text: 'Member', value: 'Member' },
        { text: 'Volunteer', value: 'Volunteer' },
        { text: 'Admin', value: 'Admin' },
      ],
      onFilter: (value, record) => record.role === value,
    },
    {
      title: 'Location',
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: 'Join Date',
      dataIndex: 'joinDate',
      key: 'joinDate',
      render: (date) => new Date(date).toLocaleDateString(),
      sorter: (a, b) => new Date(a.joinDate) - new Date(b.joinDate),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'active' ? 'success' : 'error'}>
          {status.toUpperCase()}
        </Tag>
      ),
      filters: [
        { text: 'Active', value: 'active' },
        { text: 'Inactive', value: 'inactive' },
      ],
      onFilter: (value, record) => record.status === value,
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space size="small">
          <Tooltip title="Edit Member">
            <Button
              type="primary"
              size="small"
              icon={<EditOutlined />}
              onClick={() => onEdit && onEdit(record)}
            >
              Edit
            </Button>
          </Tooltip>
          <Tooltip title={record.status === 'active' ? 'Deactivate' : 'Activate'}>
            <Button
              type={record.status === 'active' ? 'default' : 'primary'}
              size="small"
              danger={record.status === 'active'}
              icon={record.status === 'active' ? <UserDeleteOutlined /> : <UserAddOutlined />}
              onClick={() => onStatusChange && onStatusChange(record.id, record.status === 'active' ? 'inactive' : 'active')}
            >
              {record.status === 'active' ? 'Deactivate' : 'Activate'}
            </Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={members}
      loading={loading}
      rowKey="id"
      pagination={pagination ? {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => 
          `${range[0]}-${range[1]} of ${total} members`,
        pageSizeOptions: ['10', '20', '50', '100'],
        defaultPageSize: 10,
      } : false}
      scroll={{ x: 800 }}
    />
  );
};

export default MemberTable; 