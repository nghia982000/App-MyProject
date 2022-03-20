import React, { useCallback, useEffect } from 'react'
import { Form, Input, Button, Spin } from 'antd'
import { Link ,useNavigate} from 'react-router-dom'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
import { authState$ } from '../../Redux/Selectors'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { authLoading, isAuthenticated, user } = useSelector(authState$)
  console.log(authLoading, isAuthenticated, user)
  const onFinish = (values) => {
    console.log('Success:', values)
    dispatch(actions.login.loginRequest(values))
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
    <div className="account" style={{textAlign:'center',fontSize:'20px',color:'red'}}>
      Username:admin; Password:123456789
    </div>
      <div className="loginForm">
        <div className="loginTitle">
          Login
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

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/Register">Don't have an account?</Link>
          </Form.Item>
        </Form>

      </div>
      {
        !authLoading && (
          <div className="loadingSpin">
            <Spin size='large' />
          </div>
        )
      }
    </>
  )
}

export default React.memo(Login)