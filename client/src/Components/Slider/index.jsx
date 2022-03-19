import React from 'react'
import './style.scss'
import { Carousel } from 'antd'

const Slider = () => {
  return (
    <div className='sliderPageFacility'>
        <Carousel autoplay >
          <div>
            <div className='imgSlider' style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/2026601.jpg)' }}></div>
          </div>
          <div>
            <div className='imgSlider' style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1615493.jpg)' }}></div>
          </div>
          <div>
            <div className='imgSlider' style={{ backgroundImage: 'url(https://wallbox.ru/resize/1680x1050/wallpapers/main/201336/anime-panorama-priroda-5d1a803.jpg)' }}></div>
          </div>
        </Carousel>
      </div>
  )
}

export default Slider