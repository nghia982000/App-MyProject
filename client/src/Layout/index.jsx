import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home'
import User from '../Pages/User'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Redux/Actions'
import { authState$ } from '../Redux/Selectors'
import './style.scss'
const Layout = () => {
  const dispatch = useDispatch()
  const { authLoading, isAuthenticated, } = useSelector(authState$)

  useEffect(() => {
    dispatch(actions.checkLogin.checkLoginRequest())
  }, [])

  if (!isAuthenticated) {
    window.location.href = '/login'
  }
  return (
    <>
      <div className="container">
        <Header/>
        <Slider/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default Layout