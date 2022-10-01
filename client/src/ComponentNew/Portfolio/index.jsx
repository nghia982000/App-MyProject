import React, { useEffect } from 'react'
import Project from './Project'
import './style.scss'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../Redux/Actions'
import { postState$ } from '../../Redux/Selectors'

const Portfolio = () => {
  const dispatch = useDispatch()
  const { data } = useSelector(postState$)
  console.log(data)
  useEffect(() => {
    dispatch(actions.postData.postDataRequest())
  }, [])
  return (
    <div className='portfolio' id='portfolio'>
      <div className="portfolioContainer">
        <div className="portfolioTitle">
          Portfolio
        </div>
        <div className="portfolioContent">
          {
            data&&(
              data.map((item,index)=>{
                return (
                  <Project item={item} key={item._id} index={index}/>
                )
              })
            )
          }
        </div>
        <div className="portfolioFooter" >
          <a href="https://github.com/nghia982000" target="_blank">
            More Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio