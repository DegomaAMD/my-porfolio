import React from 'react'
import aboutImage from '../assets/img/3.webp'
import resume from '../assets/document/AndriaMaeDegoma-Resume.pdf'
import { Button } from '@mui/material';


function About() {

  const openDocument = () => {
    window.open(resume, '_blank');
  }


  return (
    <>
        <div className='aboutpage'>
          <img src={aboutImage} alt='About ' aria-label='About '/>
          <div className='about-description'>
            <h1>
              <span>About </span>
              <span>Me</span>
            </h1>
            <p>I have a strong passion for full-stack web development, with a keen interest in expanding my expertise in React.js and Node.js. My journey in web development began in 2022 after joining the kodeGo Full-stack web development Bootcamp, which kick-started my career. Since then, I've been continuously learning and taking on new projects. I'm dedicated to creating user-friendly and responsive website, ensuring they are not only good-looking but also perform well. Currently, I'm working on web applications using technologies like Wordpress, Flatsome page builder, HTML, CSS3, Javascript, ReactJS, NodeJS, and MySql.</p>
            <p>When I'm not coding, I'm probably checking out Facebook, hanging out with my kids and family, or just relaxing. If you need something from me, drop a message on the contact page, and I'll get back to you super fast.</p>
            <Button className='viewResumeBtn' onClick={openDocument}><i class="fa-solid fa-file-arrow-down"></i> View my resume</Button>
          </div>
          
        </div>
      <div className='about-spacer'></div>
    </>
    
  )
}

export default About