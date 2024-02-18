import { CalendarOutlined, IssuesCloseOutlined, LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Layout, Select } from 'antd';
import React, { useState } from 'react';

const { Header } = Layout;
const { Option } = Select;

const CaendarHeader: React.FC = () => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [selectedView, setSelectedView] = useState('month');

  const isSidebarOpen = false;

  const handleSearchClick = () => {
    setIsSearchMode(true);
  };

  const handleGoBackClick = () => {
    setIsSearchMode(false);
  };

  const handleViewChange = (value: string) => {
    setSelectedView(value);
  };

  const displayButtonStyle = false;

  const buttonStyle = displayButtonStyle ? 'border border-yellow-200' : '';

  const iconInButton = !displayButtonStyle ? 'bg-blue-400 justify-between items-center inline-flex' : '';

  return (
    <div
      className={`flex justify-between items-center p-4 border border-red-600 fixed top-0 right-0 bg-red-600 h-16 bg-gray-200 transition-all duration-300 ${
        isSidebarOpen ? 'left-60' : 'left-32'
      }`}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {!isSearchMode ? (
          // {/* How to make sure following 4 items stay in the same vertical */}
          <div className="flex justify-between items-center space-x-2">
            <Button className={buttonStyle} type="primary">
              Today
            </Button>
            <Button className={buttonStyle} type="primary" shape="circle" icon={<LeftOutlined />} />
            <Button className={buttonStyle} type="primary" shape="circle" icon={<RightOutlined />} />
            <span className={buttonStyle}>{selectedView === 'month' ? 'Feb 2024' : 'Current Day/Week/Year'}</span>
          </div>
        ) : (
          <div className="cursor-pointer" onClick={handleGoBackClick}>
            <Button type="primary" shape="circle" icon={<LeftOutlined />} />
            <span className="hover:bg-blue-400">Go back</span>
          </div>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }} className="bg-yellow-400">
        {isSearchMode ? (
          <Input.Search size="large" />
        ) : (
          <div className="flex">
            <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={handleSearchClick} />
            <Select defaultValue="month" onChange={handleViewChange}>
              <Option value="month">Month</Option>
              <Option value="week">Week</Option>
              <Option value="day">Day</Option>
              <Option value="year">Year</Option>
            </Select>
            <div className="flex space-x-2">
              {/* how to add CalendarOutlined in the center of botton */}
              <Button className={iconInButton} type="primary">
                <CalendarOutlined />
              </Button>
            </div>
            <Button className={iconInButton} type="primary">
              <IssuesCloseOutlined />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaendarHeader;
