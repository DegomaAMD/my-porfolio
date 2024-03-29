import React from 'react'
import Link from '@mui/material/Link';
import project1 from '../assets/img/thumbs.jpg'

function Project() {
  const projects = [
    { 
      personalProjects: [{
      count: 1,
      projectName: "Bon Cafe",
      description: "",
      link: "https://degomaamd.github.io/"
      },
      {
      count: 2,
      projectName: "Vizmaker Cafe",
      description: "",
      link: "https://degomaamd.github.io/"
      },
      {
        count: 3,
        projectName: "My Portfolio",
        description: "",
        link: "https://degomaamd.github.io/"
      }]
    },
    {
      workProjects: [{
        count: 1,
        projectName: "HB88.la",
        description: "",
        link: "https://hb88.la/"
        },
        {
        count: 2,
        projectName: "HB88.ai",
        description: "",
        link: "https://hb88.ai/"
        },
        {
          count: 3,
          projectName: "HB88.asia",
          description: "",
          link: "https://hb88.asia/"
        },
        {
          count: 4,
          projectName: "HB88.info",
          description: "",
          link: "https://hb88.info/"
          },
          {
          count: 5,
          projectName: "HB88.life",
          description: "",
          link: "https://hb88.life/"
          },
          {
          count: 6,
          projectName: "HB88.mobi",
          description: "",
          link: "https://hb88.mobi/"
          },
          {
          count: 7,
          projectName: "HB88.pro",
          description: "",
          link: "https://hb88.pro/"
          },
          {
          count: 8,
          projectName: "HB88.world",
          description: "",
          link: "https://hb88.world/"
          },
          {
            count: 9,
            projectName: "HB88 RTP Live",
            description: "",
            link: "https://hb88.bet/"
          }]
    }
   ]
   const projectWorks = projects.workProjects;
   console.log(projectWorks);
  //  const workProject = workProjects.map(item => {
  //   return `<strong>${item.count.length < 2 ? `0${item.count}` : item.count}</strong>
  //   <h3>${item.projectName}</h3>
  //   <p>${item.description}</p>
  //   <Link href=${item.link} underline="none">
  //     <i className="fa-solid fa-up-right-from-square"></i>
  //   </Link>`
  //  });
   
  document.getElementsByTagName("h1").item(0).style.display = "none;"
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
          <div className='project1-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              {/* {workProject} */}
            </div>  
          </div>
        </div>
      </div>
      <div className='work-projects'>
      <h2>
          Work <span>Projects</span>
        </h2>
        <div className='work-project-content'>
          <div className='project1-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>01</strong>
              <h3>Bon Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project2-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>02</strong>
              <h3>Vizmaker Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
          <div className='project3-container'>
            <img src={project1} alt=''/>
            <div className='project-description'>
              <strong>03</strong>
              <h3>Bon Cafe</h3>
              <p>I'm Kalvin Doe Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
              <Link href="https://degomaamd.github.io/" underline="none">
                <i className="fa-solid fa-up-right-from-square"></i>
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
    <div className='spacer'></div>
    </>
  )
}

export default Project