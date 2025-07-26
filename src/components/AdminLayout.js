import React, { useState } from 'react';
import { Layout } from 'antd';
import AdminNavigation from './AdminNavigation';
import AdminFooter from './AdminFooter';

const { Content } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AdminNavigation collapsed={collapsed} onCollapse={handleCollapse}>
      <Layout style={{ minHeight: '100vh' }}>
        <Content
          style={{
            margin: '24px 24px 0',
            padding: '24px',
            background: '#fff',
            borderRadius: '8px',
            flex: 1,
            overflow: 'auto'
          }}
        >
          {children}
        </Content>
        <AdminFooter />
      </Layout>
    </AdminNavigation>
  );
};

export default AdminLayout; 