import './Login.scss'
// import { useStore } from '@/store'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd'
import {
  UserOutlined,
  KeyOutlined
} from '@ant-design/icons';

function Login () {
  const nav = useNavigate()
  // const { user } = useStore()
  const onFinish = (values) => {
    // 这里就拿到了表单数据
    console.log(22)
    // user.login(values).then(() => {
    //   // nav('/', { replace: true })
    //   nav('/')
    // })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="the-main">
      <Form
        className='login-form'
        name="basic"
        labelCol={{
          span: 7,
        }}
        labelAlign="left"
        initialValues={{
          // remember: true,
          username: 'admin',
          password: 'admin123456'
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h3>登 录</h3>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
          ]}
        >
          <Input prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入用户密码',
            },
          ]}
        >
          <Input.Password prefix={<KeyOutlined />} />
        </Form.Item>
        <footer className='login-wrap'>
          <Button danger className='login-btn' htmlType="submit">登 录</Button>
        </footer>
      </Form>
    </div>
  )
}

export default Login