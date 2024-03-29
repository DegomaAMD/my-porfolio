import React from 'react'
import Link from '@mui/material/Link';
import personalProj1 from "../assets/img/bon-cafe.png";
import personalProj2 from "../assets/img/vizmaker-cafe.png";
import personalProj3 from "../assets/img/my-portfolio.png";
import workProj1 from "../assets/img/hb88-la.png";
import workProj2 from "../assets/img/hb88-ai.png";
import workProj3 from "../assets/img/hb88-asia.png";
import workProj4 from "../assets/img/hb88-info.png";
import workProj5 from "../assets/img/hb88-life.png";
import workProj6 from "../assets/img/hb88-mobi.png";
import workProj7 from "../assets/img/hb88-pro.png";
import workProj8 from "../assets/img/hb88-world.png";
import workProj9 from "../assets/img/rtp-live.png";

function Project() {

      const personalProjects = [{
      id: 1,
      projectName: "Bon Cafe",
      description: "This website is built using HTML5, CSS3, Bootstrap, and JavaScript",
      link: "https://degomaamd.github.io/",
      imgPath: personalProj1
      },
      {
      id: 2,
      projectName: "Vizmaker Cafe",
      description: "This website is built using ReactJS, Material-UI, and Laravel",
      link: "https://degoma-amd-eju1.vercel.app/Home",
      imgPath: personalProj2
      },
      {
        id: 3,
        projectName: "My Portfolio",
        description: "This portfolio is built using ReactJS, and Material-UI",
        link: "https://degomaamd.github.io/",
        imgPath: personalProj3
      }];

      const   workProjects = [{
        id: 1,
        count: 1,
        projectName: "HB88.la",
        description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
        link: "https://hb88.la/",
        imgPath: workProj1
        },
        {
        id: 2,
        count: 2,
        projectName: "HB88.ai",
        description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
        link: "https://hb88.ai/",
        imgPath: workProj2
        },
        {
          id: 3,
          count: 1,
          projectName: "HB88.asia",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.asia/",
          imgPath: workProj3
        },
        {
          id: 4,
          count: 2,
          projectName: "HB88.info",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.info/",
          imgPath: workProj4
          },
          {
          id: 5,
          count: 1,
          projectName: "HB88.life",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.life/",
          imgPath: workProj5
          },
          {
          id: 6,
          count: 2,
          projectName: "HB88.mobi",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.mobi/",
          imgPath: workProj6
          },
          {
          id: 7,
          count: 1,
          projectName: "HB88.pro",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.pro/",
          imgPath: workProj7
          },
          {
          id: 8,
          count: 2,
          projectName: "HB88.world",
          description: "This landing page is built using HTML5, CSS3, Wordpress, and Flatsome page builder",
          link: "https://hb88.world/",
          imgPath: workProj8
          },
          {
            id: 9,
            count: 1,
            projectName: "HB88 RTP Live",
            description: "HB88 RTP Live is a landing page that showcases the best games from various game providers, which players can enjoy on the main website. It also features a lucky roulette where players can win prizes to use on the main website. This page is built using HTML5, CSS3, Bootstrap, and JavaScript.",
            link: "https://hb88.bet/",
            imgPath: workProj9
          }];


   
  return (
    <>
    <div className='spacer'></div>
    <div className='projects'>
      <h1>
       My <span>Projects</span>
      </h1>
      <div className='personal-projects'>
        <h2>
          Personal <span>Projects</span>
        </h2>
        <div className='personal-project-content'>
        {personalProjects.map(item => 
            <div key={`project${item.id}-container`} className={`project${item.id}-container`}>
                <img src={item.imgPath} alt={item.projectName}/>
                  <div className='project-description'>
                      <strong>0{item.id}</strong>
                      <h3>{item.projectName}</h3>
                      <p>{item.description}</p>
                      <Link href={item.link} underline="none" target="_blank" rel="noopener">
                        <i className="fa-solid fa-up-right-from-square"></i>
                      </Link>
                  </div>  
              </div>
          )}
        </div>
      </div>
      <div className='work-projects'>
        <h2>
          Work <span>Projects</span>
        </h2>
        <div className='work-project-content'>
          {workProjects.map(item => 
            <div key={`project${item.id}-container`} className={`project${item.count}-container`}>
              <img src={item.imgPath} alt={item.projectName}/>
              <div className='project-description'>
                <strong>0{item.id}</strong>
                <h3>{item.projectName}</h3>
                <p>{item.description}</p>
                <Link href={item.link} underline="none" target="_blank" rel="noopener">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </Link>
              </div>  
          </div>
          )}
        </div>
      </div>
    </div>
    <div className='spacer'></div>
    </>
  )
}

export default Project