import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Button, Spin } from 'antd'

const Home = () => {
  const logOut=()=>{
    sessionStorage.removeItem('token')
    window.location.href='/login'
  }
  return (
    <>
      Home page
      <Link to='/login'>login</Link>
      <Link to='/register'>register</Link>
      <Button onClick={logOut}>LogOut</Button>
    </>
  )
}

export default Home