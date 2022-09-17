import './App.scss'
import 'antd/dist/antd.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/layout'
import Resource from '@/views/resource'
import Login from '@/views/login/Login'
import Notfound from '@/views/error/404'
import Forbbiden from '@/views/error/403'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Resource />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/403" element={<Forbbiden />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
