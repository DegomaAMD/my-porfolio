import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';


function Skills() {
  const details = [{
    id: 1,
    link: 'https://www.freecodecamp.org/certification/fcc215f1c96-4e1d-45b4-adab-aec23d681ef7/responsive-web-design',
    name: 'freeCodeCamp Responsive Web Design',
    details: 'February 11, 2024'
  }, {
    id: 2,
    link: 'https://www.freecodecamp.org/certification/fcc215f1c96-4e1d-45b4-adab-aec23d681ef7/responsive-web-design',
    name: 'freeCodeCamp JavaScript Algorithms and Data Structures (Beta)',
    details: 'March 12, 2024'
  }, {
    id: 3,
    link: 'https://drive.google.com/file/d/1cz4EF4xkOiBT4oVkAE39dJPNJlx0qYv4/view?usp=drivesdk',
    name: 'kodeGo Full-stack Web Development',
    details: 'July 2023'
  }]

  const skills = [{
    name: 'HTML5',
    icon: 'fa-brands fa-html5'
  },{
    name: 'CSS3',
    icon: 'fa-brands fa-css3-alt'
  },{
    name: 'JavaScript',
    icon: 'fa-brands fa-js'
  },{
    name: 'Bootstrap',
    icon: 'fa-brands fa-bootstrap'
  },{
    name: 'React JS',
    icon: 'fa-brands fa-react'
  },{
    name: 'Node JS',
    icon: 'fa-brands fa-node'
  },{
    name: 'Wordpress',
    icon: 'fa-brands fa-wordpress'
  },{
    name: 'Git',
    icon: 'fa-brands fa-git-alt'
  },
  {
    name: 'MySql',
    icon: 'fa-solid fa-database'
  },
]
  return (
    <>
    <div className='spacer'></div>
      <div className='skills'>
        <h1>
          <span>My </span>
          <span>Skills</span>
        </h1>
        <div  className='skills-content'>
          {skills.map(item => 
            <div key={item.name}>
              <i className={item.icon}></i>
              <h2>{item.name}</h2>
            </div>
          )}
          
        </div>
        <div className='certifications'>
            <h2>
              <span>My </span>
              <span>Certificates</span>
            </h2>
            <Container maxWidth="sm" sx={{display: {xs: 'block', md: 'flex'},  justifyContent: 'center', alignItems: 'center' }}>
            {details.map(item => 
              <Card sx={{ minWidth: 280, margin: '20px', height: "auto" }} key={item.name}>
                <CardContent >
                <Link className={`item-${item.id}`} href={item.link}>{item.name}</Link>
                <Typography sx={{marginY: '10px'}}>Completed Date: {item.details}</Typography>
                </CardContent>
              </Card>
            )}            
            </Container>        
            
          </div>
      </div>
    </>
    
  )
}

export default Skills