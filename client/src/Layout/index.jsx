import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Redux/Actions'
import { authState$ } from '../Redux/Selectors'
const Layout = () => {
  const dispatch = useDispatch()
  const { authLoading, isAuthenticated, } = useSelector(authState$)

  useEffect(() => {
    dispatch(actions.checkLogin.checkLoginRequest())
  }, [])

  if(!isAuthenticated){
    window.location.href='/login'
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}

export default Layout