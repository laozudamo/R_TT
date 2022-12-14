import React from 'react'
import ReactDOM from 'react-dom/client'
import zhCN from 'antd/es/locale/zh_CN'
import { ConfigProvider } from 'antd'

import App from './App'
import 'normalize.css'

// import './App.scss'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
