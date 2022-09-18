import './index.scss'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Button, Menu } from 'antd'
import React, { useState } from 'react'

const items = [
  {
    key: '1',
    label: '网络完全',
    icon: <MenuFoldOutlined />,
  },
  {
    key: '2',
    label: '网络完全',
    icon: <MenuFoldOutlined />,
  },
  {
    key: '3',
    label: '网络完全',
    icon: <MenuFoldOutlined />,
  },
]

const Example = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className="main">
      <div
        style={{
          width: 200,
        }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={collapsed}
          items={items}
        />

        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
    </div>
  )
}

export default Example
