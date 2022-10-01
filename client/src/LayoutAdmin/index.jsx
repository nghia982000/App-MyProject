import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import HomeAdmin from '../Pages/HomeAdmin'
import HeaderAd from '../Components/HeaderAd'
import Slider from '../Components/Slider'
import FooterAd from '../Components/FooterAd'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../Redux/Actions'
import { authState$ } from '../Redux/Selectors'
import './style.scss'
const LayoutAdmin = () => {
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
      <div className="container" style={{
        'padding':'0 200px',
      }}>
        <HeaderAd/>
        <Slider/>
        <Routes>
          <Route path="/" element={<HomeAdmin />} />
        </Routes>
      </div>
    </>
  )
}

export default LayoutAdmin