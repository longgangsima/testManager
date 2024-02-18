/* eslint-disable react/react-in-jsx-scope */
// components/Sidebar.tsx
import { Layout, Menu, theme } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Make sure to import the stylesheet
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
const { Header, Sider, Content } = Layout;

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    { key: '/', label: 'Home', icon: <i className="bi bi-house"></i> },
    { key: '/calendar', label: 'Calendar', icon: <i className="bi bi-calendar"></i> },
    { key: '/about', label: 'About', icon: <i className="bi bi-person-lines-fill"></i> },
  ];

  return (
    // <div className={`sidebar ${collapsed ? 'w-14' : 'w-64'} transition-width duration-300`}>
    //   <button onClick={() => setCollapsed(!collapsed)} className="btn">
    //     {collapsed ? 'Expand' : 'Collapse'}
    //   </button>
    //   <Menu
    //     mode="inline"
    //     selectedKeys={[router.pathname]}
    //     items={menuItems.map(item => ({
    //       key: item.key,
    //       icon: item.icon,
    //       label: <Link href={item.key}>{item.label}</Link>,
    //     }))}
    //   />
    // </div>
    <Sider trigger={null} width={160} collapsible collapsed={collapsed} className="flex h-screen h-200">
      {/* create a logo  with a border under bottom */}

      <div className="flex items-center justify-center h-16 bg-gray-800 text-white border-b">
        <h1 className="text-2xl font-bold">Logo</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        className="bg-gray-800 border-r border-gray-800 border-opacity-50 h-full"
        defaultSelectedKeys={[router.pathname]}
        items={menuItems.map(item => ({
          key: item.key,
          icon: item.icon,
          label: <Link href={item.key}>{item.label}</Link>,
        }))}
      />
    </Sider>
  );
};

export default Sidebar;
