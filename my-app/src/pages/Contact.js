import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {

  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

  };
  return (
    <>
    <div className='contact-spacer'></div>
        <div className='contact'>
          <form className='form-content' action="https://formsubmit.co/andriadegoma@gmail.com" method="POST">
            <TextField
            className='input-form'
            required
                id="name"
                name="name"
                label="Name:"
                type="text"
                placeholder='Name: (Juan Dela Cruz)'
              />
            <TextField
            className='input-form'
            required
                id="email"
                name="email"
                label="Email:"
                type="email"
                placeholder='Email: (email@email.com)'
              />
              <TextField
              className='input-form'
              required
                id="message"
                name="message"
                label="Message:"
                multiline
                rows={4}
                placeholder='Message: (I want to hire you!)'
              />
              <div className='form-socials'>
                <Button type='submit' variant="contained" className='form-btn'>Get in Touch</Button>
                <div className='socials'>
                <a href='https://www.facebook.com/andriamae' target='blank'><FacebookIcon className='banner-icon'/></a>
                    <a href='https://www.linkedin.com/in/andria-mae-degoma-470aaa147/' target='blank'><LinkedInIcon className='banner-icon'/></a>
                    <a href='https://t.me/andriamae1019' target='blank'><TelegramIcon className='banner-icon'/></a>
                    <a href='https://github.com/DegomaAMD' target='blank'><GitHubIcon className='banner-icon'/></a>
                </div>
                
              </div>
          </form>
        <div className='form-information'>
          <h2>
            Let's <span>talk </span>for
          </h2>
          <h2>
            Something special
          </h2>
          <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
          <h3>andriadegoma@gmail.com</h3>
          <h3>+63 967 3724 189</h3>
        </div>
      </div>
      <div className='contact-spacer'></div>
    </>
  )
}

export default Contact