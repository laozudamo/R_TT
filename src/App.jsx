import './App.scss'
import 'antd/dist/antd.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from '@/layout'
import Resource from '@/views/resource'
import Port from '@/views/port'
import Example from '@/views/example'
import System from '@/views/system'
import Servce from '@/views/servce'
import Report from '@/views/report'
import Task from '@/views/task'

import Login from '@/views/login/Login'
import Notfound from '@/views/error/404'
import Forbbiden from '@/views/error/403'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path='/servce' index element={<Servce />} />
            <Route path="/port" element={<Port />} />
            <Route path="/task" element={<Task />} />
            <Route path="/example" element={<Example />} />
            <Route path="/system" element={<System />} />
            <Route path="/report" element={<Report />} />
            <Route path="/resource" element={<Resource />} />
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
