import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import { UserOutlined } from '@ant-design/icons'
const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <p>MyProject</p>
        </div>
        <div className="headerAccount">
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <div className="headerAccountUser">
            <UserOutlined />
          </div>
        </div>
      </div>
      <hr style={{margin: '0px'}}/>
    </>
  )
}

export default Header