import {
  UserOutlined,
  SettingOutlined,
  ControlOutlined,
  MailOutlined,
  FullscreenOutlined
} from '@ant-design/icons'

import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Menu, Divider } from 'antd'
import React, { useState, useEffect } from 'react'

const items = [
  {
    label: '服务',
    key: '/servce',
    icon: <ControlOutlined />,
  },
  {
    label: '用例',
    key: '/example',
    icon: <MailOutlined />,
  },
  {
    label: '任务',
    key: '/task',
    icon: <MailOutlined />,
  },
  {
    label: '端口监控',
    key: '/port',
    icon: <MailOutlined />,
  },
  {
    label: '报告',
    key: '/report',
    icon: <MailOutlined />,
  },
  {
    label: '资源',
    key: '/resource',
    icon: <ControlOutlined />,
  },
  {
    label: '系统设置',
    key: '/system',
    icon: <SettingOutlined />,
  },
]
export default function layout() {
  const [current, setCurrent] = useState('servce')
  const navigate = useNavigate();
  const location = useLocation();

  const onClick = (e) => {
    navigate(e.key)
    setCurrent(e.key)
  }
  useEffect(() => {
    setCurrent(location.pathname)
    console.log(location.pathname)
  }, [location])

  return (
    <div className='page'>
      <header className="hearder">
        <Menu
          className="hearder-menu"
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
        <div className="heard-user">
          <div style={{ paddingLeft: '10px' }}>
            <FullscreenOutlined />
          </div>

          <div>
            <Divider type="vertical" />
          </div>

          <div style={{ paddingLeft: '10px' }}>
            <UserOutlined />
          </div>
          <div style={{ paddingLeft: '10px' }}>张三</div>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
