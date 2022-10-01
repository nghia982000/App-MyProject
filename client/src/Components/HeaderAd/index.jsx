import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
import { LoginOutlined, UserOutlined } from '@ant-design/icons'
const HeaderAd = () => {
  const navigate=useNavigate()
  const logOut = () => {
    sessionStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
      <div className="header">
        <div className="headerLogo">
          <p>MyProject</p>
        </div>
        <div className="headerAccount">
          <Link to='/'>Home</Link>
          <div className="headerLogOut">
            <LoginOutlined onClick={logOut} />
          </div>
        </div>
      </div>
      <hr style={{ margin: '0px' }} />
    </>
  )
}

export default HeaderAd