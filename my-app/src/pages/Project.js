import React from 'react'
import Link from '@mui/material/Link';
import personalProj1 from "../assets/img/bon-cafe.webp";
import personalProj2 from "../assets/img/vizmaker-cafe.webp";
import personalProj3 from "../assets/img/my-portfolio.webp";
import workProj1 from "../assets/img/hb88-la.webp";
import workProj2 from "../assets/img/hb88-ai.webp";
import workProj3 from "../assets/img/hb88-asia.webp";
import workProj4 from "../assets/img/hb88-info.webp";
import workProj5 from "../assets/img/hb88-life.webp";
import workProj6 from "../assets/img/hb88-mobi.webp";
import workProj7 from "../assets/img/hb88-pro.webp";
import workProj8 from "../assets/img/hb88-world.webp";
import workProj9 from "../assets/img/rtp-live.webp";

function Project() {

      const personalProjects = [{
      id: 1,
      projectName: "Bon Cafe",
      description: "Bon Cafe is a website for coffee shops designed to help small business owners grow their business and find new customers by displaying their products online. This site is my first mini-project for the KodeGo full-stack web development bootcamp.",
      link: "https://degomaamd.github.io/",
      imgPath: personalProj1,
      language: ['html', 'css', 'javascript', 'bootstrap']
      },
      {
      id: 2,
      projectName: "Vizmaker Cafe",
      description: "Vizmaker Cafe is an improved version of the Bon Cafe website for coffee shops. It's my final project for the KodeGo full-stack web development bootcamp. Currently, the site is being updated because the database needs to be set up again.",
      link: "https://degoma-amd-eju1.vercel.app/Home",
      imgPath: personalProj2,
      language: ['react', 'mui', 'laravel']
      },
      {
        id: 3,
        projectName: "My Portfolio",
        description: "This portfolio showcases my journey as a web developer, highlighting various websites and projects I've developed. It illustrates my use of coding and design skills to create user-friendly and visually appealing websites. Through this portfolio, I aim to share my process of building a website from the ground up, with a focus on delivering high-quality work. Whether you're considering hiring a web developer, searching for inspiration, or simply interested in my work, this collection reflects my dedication to excellence and my growth from having no web development knowledge to where I am today.",
        link: "https://my-porfolio-sage.vercel.app",
        imgPath: personalProj3,
        language: ['react', 'mui']
      }];

      const   workProjects = [{
        id: 1,
        count: 1,
        projectName: "HB88.la",
        description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
        link: "https://hb88.la/",
        imgPath: workProj1,
        language: ['html', 'css', 'javascript', 'wordpress', 'flatsome']
        },
        {
        id: 2,
        count: 2,
        projectName: "HB88.ai",
        description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
        link: "https://hb88.ai/",
        imgPath: workProj2,
        language: ['html', 'css', 'wordpress', 'flatsome']
        },
        {
          id: 3,
          count: 1,
          projectName: "HB88.asia",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.asia/",
          imgPath: workProj3,
          language: ['html', 'css', 'javascript', 'wordpress', 'flatsome']
        },
        {
          id: 4,
          count: 2,
          projectName: "HB88.info",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.info/",
          imgPath: workProj4,
          language: ['html', 'css', 'javascript', 'wordpress', 'flatsome']
          },
          {
          id: 5,
          count: 1,
          projectName: "HB88.life",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.life/",
          imgPath: workProj5,
          language: ['html', 'css', 'javascript', 'wordpress', 'flatsome']
          },
          {
          id: 6,
          count: 2,
          projectName: "HB88.mobi",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.mobi/",
          imgPath: workProj6,
          language: ['html', 'css', 'wordpress', 'flatsome']
          },
          {
          id: 7,
          count: 1,
          projectName: "HB88.pro",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.pro/",
          imgPath: workProj7,
          language: ['html', 'css', 'javascript', 'wordpress', 'flatsome']
          },
          {
          id: 8,
          count: 2,
          projectName: "HB88.world",
          description: "This landing page is crafted to educate users about HB88, while the blog page keeps them informed with the latest sports news.",
          link: "https://hb88.world/",
          imgPath: workProj8,
          language: ['html', 'css', 'wordpress', 'flatsome']
          },
          {
            id: 9,
            count: 1,
            projectName: "HB88 RTP Live",
            description: "HB88 RTP Live is a landing page that showcases the best games from various game providers, which players can enjoy on the main website. It also features a lucky roulette where players can win prizes to use on the main website. This page is built using HTML5, CSS3, Bootstrap, and JavaScript.",
            link: "https://hb88.bet/",
            imgPath: workProj9,
            language: ['html', 'css', 'bootstrap', 'javascript']
      }];

      const languages = {
        html: { name: 'HTML5', color: '#DC6B19' },
        css: { name: 'CSS3', color: '#40A2E3' },
        bootstrap: { name: 'Bootstrap', color: '#7F27FF' },
        javascript: { name: 'JavaScript', color: '#FFC436' },
        react: { name: 'ReactJS', color: '#5BBCFF' },
        mui: { name: 'MUI', color: '#0061c2' },
        laravel: { name: 'Laravel', color: '#E72929' },
        mysql: { name: 'MySql', color: '#0174BE' },
        wordpress: { name: 'Wordpress', color: '#222831' },
        flatsome: { name: 'Flatsome Theme', color: '#446084' }
      }

      const findLangArr = (arr) => {
        console.log(arr)
       return  arr.map(lang => {
          const langs = languages[lang];
          return (
            <span key={lang} style={{backgroundColor: langs.color}} className='language'>{langs.name}</span>
          )
        })
         
        }

    
   
  return (
    <>
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
                      <div>
                        <div className='language-wrapper'>{findLangArr(item.language)}</div>
                      </div>
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
                <div>
                    <div className='language-wrapper'>{findLangArr(item.language)}</div>
                </div>
                <Link href={item.link} underline="none" target="_blank" rel="noopener">
                  <i className="fa-solid fa-up-right-from-square"></i>
                </Link>
              </div>  
          </div>
          )}
        </div>
      </div>
    </div>
    </>
  )
}

export default Project