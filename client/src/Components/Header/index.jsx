import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
const Header = () => {
  const logOut = () => {
    sessionStorage.removeItem('token')
    window.location.href = '/login'
  }
  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <p>MyProject</p>
        </div>
        <div className="headerAccount">
          <Link to='/'>Home</Link>
          <Link to='/user'>User</Link>
          <div className="headerLogOut">
            <LoginOutlined onClick={logOut} />
          </div>
        </div>
      </div>
      <hr style={{ margin: '0px' }} />
    </>
  )
}

export default Header