import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
import './style.scss'
import { authState$ } from '../../Redux/Selectors'
const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authLoading, isAuthenticated, user } = useSelector(authState$)
  console.log(authLoading, isAuthenticated, user)
  const onFinish = (values) => {
    if (values.password !== values.confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Success:', values)
    dispatch(actions.register.registerRequest({
      username: values.username,
      password: values.password
    }))
  }
  useEffect(() => {
    dispatch(actions.checkLogin.checkLoginRequest())
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])
  return (
    <>
      <div className="registerForm">
        <div className="registerTitle">
          Register
        </div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Confirm password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/login">Back to login</Link>
          </Form.Item>
        </Form>

      </div>
    </>
  )
}

export default Register