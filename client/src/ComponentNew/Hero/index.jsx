import React from 'react'
import heroImg from '../../assets/hero-img.jpg';
import Socials from './Socials';
import './style.scss'
const Hero = () => {
  return (
    <div className='hero'id='home'>
      <div className="heroContainer">
        <div className="heroInfo">
          <h1>i'm a web developer</h1>
          <p>I love building beautiful web experience</p>
          <ul className="heroInfoSocial">
          <Socials/>
          </ul>
        </div>
        <div className="heroImage">
          <img src={heroImg} className="heroPhoto" alt="nghia nguyen" />
        </div>
      </div>
    </div>
  )
}

export default Hero