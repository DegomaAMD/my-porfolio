import React from 'react'
import aboutImage from '../assets/img/3.png'


function About() {
  return (
    <>
      <div className='about-spacer'></div>
        <div className='aboutpage'>
          <img src={aboutImage} alt='About ' aria-label='About '/>
          <div>
            
          </div>
          <div className='about-description'>
            <h1>
              <span>About </span>
              <span>Me</span>
            </h1>
            <p>I'm passionate about full-stack development, focusing on both React.js and Node.js. My journey in web development began in 2022 after joining the kodeGo Full-stack web development Bootcamp, which kick-started my career. Since then, I've been continuously learning and taking on new projects. I'm dedicated to creating user-friendly and visually appealing digital products, ensuring they are not only good-looking but also perform well. Currently, I'm working on web applications using technologies like Wordpress, Flatsome page builder, HTML, CSS3, Javascript, ReactJS, NodeJS, and MySql.</p>
            <p>When I'm not coding, I'm probably checking out Facebook, hanging out with my kids and family, or just relaxing. If you need something from me, drop a message on the contact page, and I'll get back to you super fast.</p>
          </div>
          
        </div>
      <div className='about-spacer'></div>
    </>
    
  )
}

export default About