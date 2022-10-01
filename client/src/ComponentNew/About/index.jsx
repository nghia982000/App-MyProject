import React from 'react'
import './style.scss'
const About = () => {
  return (
    <div className='about' id='about'>
      <div className="aboutContainer">
        <div className="aboutTitle">
          About me
        </div>
        <div className="aboutContent">
          <div className="aboutIntro">
            <h3>Get to know me!</h3>
            <p>
              My name is Nghia Nguyen. I started learning how to code in January
              2021 and spent most of my day experimenting with HTML, CSS and
              JavaScript, React.
              <br />I enjoy coding and the challenge of learning something new
              everyday. My goal is to pursue a career in the field of front-end
              development.
            </p>
          </div>
          <div className="aboutEducation">
            <h3>Education</h3>
            <div>
              <p>2018-Now</p>
              <h4>Computer Engineering Technology - HCMC University of Technology and Education</h4>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About