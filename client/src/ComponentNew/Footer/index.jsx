import React from 'react'
import './style.scss'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footerContainer">
        <div className="footerContent">
        <p>
          &copy; <span>{new Date().getFullYear()}</span> Nghia Nguyen. all rights
          reserved
        </p>
        </div>
      </div>
    </div>
  )
}

export default Footer