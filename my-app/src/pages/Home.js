import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css';
import homeImage from '../assets/img/2.png';




function Home() {
  return (
    <>
        <div className='home-spacer'></div>
        <div className='homepage'>
            <div>
                <h1>
                    <span className='heading-light'>Hello I'am </span>
                    <span className='heading-bold'>Andria Mae.</span>
                </h1>
                <h1>
                    <span className='heading-bold'>Web </span>
                    <span className='heading-outline'>Developer</span>
                </h1>
                <h1>
                    <span className='heading-light'>Based in the </span>
                    <span className='heading-bold'>Philippines</span>
                </h1>
                <p className='banner-description'>
                Entry-level web developer with a passion for crafting user-friendly and responsive websites. Competent in HTML, CSS, JavaScript, React.js, and Node.js. Dedicated to continuous learning and staying updated with the latest web development trends. Eager to contribute to a team and collaborate on innovative projects.
                </p>
                <div className='socials'>
                    <a href='https://www.facebook.com/andriamae' target='blank'><FacebookIcon className='banner-icon'/></a>
                    <a href='https://www.linkedin.com/in/andria-mae-degoma-470aaa147/' target='blank'><LinkedInIcon className='banner-icon'/></a>
                    <a href='https://www.whatsapp.com/' target='blank'><WhatsAppIcon className='banner-icon'/></a>
                    <a href='https://t.me/andriamae1019' target='blank'><TelegramIcon className='banner-icon'/></a>
                    <a href='https://github.com/DegomaAMD' target='blank'><GitHubIcon className='banner-icon'/></a>
                </div>
            </div>
            <div className='img-container'>
                <img src={homeImage} alt='banner img' aria-label='banner img' className='banner-img'/>
            </div>  
        </div>
    </>   
  )
}

export default Home