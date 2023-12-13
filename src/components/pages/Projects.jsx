import React, { useState } from 'react'
import './projects.css'
import { TechItem } from '../TechItem'
import { Pagination } from '../Pagination'

export const Projects = () => { 
 

  const projects =[{
    id:1,
    title: "Game Review App",
    stack:["C#", "MS SQL Server",".NET Maui","Xaml"],
    image: "/images/OnePlus 10T.png",
    description: "Developed a mobile game review app using .NET MAUI, leveraging its cross-platform capabilities to create a consistent user experience across iOS and Android. Implemented an API for the backend, allowing users to review and rate games. Integrated a separate API to fetch game information, including descriptions, ratings, and screenshots, to provide users with up-to-date and comprehensive details.",
    github: "https://github.com/LarsWeyen/Project-C-Mobile-2022-2023"
  },
  {
    id:2,
    title: "Configuration Management Database",
    stack:["Python", "Django","HTML","JavaScript"],
    image: "/images/cmdb.png",
    description: "During my internship, I had the opportunity to work on building a CMDB system that serves as a centralized repository for storing and managing information related to hardware, software, and other IT assets. This project is a result of my hard work and dedication to creating a reliable and user-friendly CMDB solution.",
    github: "https://github.com/LarsWeyen/cmdb-django"
  },
  {
    id:3,
    title: "Flan Webshop",
    stack:["C#", "ASP .NET","MS SQL Server","Blazor","Oauth"],
    image: "/images/pie.png",
    description: "With a team of 3, we developed an e-commerce website as part of a school project. We used ASP .NET for the frontend and backend with Blazor pages, implementing features such as being able to login using a Github, Google or Duende account, and product catalog management."
  }
]

const onPageChange = (newPage) => {
  setCurrentPage(newPage);
};

const [currentPage, setCurrentPage] = useState(1);
const projectsPerPage = 1;
const indexOfLastProject = currentPage * projectsPerPage;
const indexOfFirstProject = indexOfLastProject - projectsPerPage;
const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
const [isHover,setIsHover] = useState(false);

  return (
    <div>
      {currentProjects.map((project,index)=>{
                return(
                  <div className='projects-container' key={index}>
                    <div className='project-image-container'>
                      <img className='project-image' src={project.image} alt="project image" />
                      <svg width="504" height="346" viewBox="0 0 504 346" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M260 331H296L353.5 345.5H320L260 331Z" fill="#E3FFFF"/>
                        <path d="M108 1H139L208 21.5H178L108 1Z" fill="#E3FFFF"/>
                        <rect x="14" y="29" width="471" height="287" stroke="#E3FFFF" strokeWidth="2"/>
                        <path d="M138.724 1L207.994 21H503V345H353.867L296.007 330.5H1V1H138.724Z" stroke="#E3FFFF"/>
                      </svg>  
                    </div>
                   
              
                    <div className='tech-container'>
                      <div className='tech-container-inner'>
                        {project.stack.map((tech,index)=>{
                          return(
                            <TechItem title={tech} key={index} index={index}/>
                          )
                        })}
                      </div>
                    </div>
                    <div className='project-title'>
                      <span className='fw-bold'>{project.title}</span>
                    </div>
                    <div className='project-description'>
                      <p className='fw-regular'>{project.description}</p>
                    </div>
                    <div className='project-buttons'>
                      {project.github ? (
                        
                          <svg className='github-button' width="641" height="61" viewBox="0 0 641 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <path className='button-hover' onMouseEnter={()=>setIsHover(true)} onMouseLeave={() => setIsHover(false)} opacity={isHover ? "0.6":"0"} d="M12 12H229.5L243 24.7869V51H12V12Z" fill="#B6C5C9"/>
                        </a>
                        <path d="M233 32L218 40.6603L218 23.3397L233 32Z" fill="white"/>
                        <path d="M29.095 39C28.563 39 28.073 38.867 27.625 38.601C27.191 38.335 26.841 37.985 26.575 37.551C26.309 37.103 26.176 36.613 26.176 36.081V26.799C26.176 26.267 26.309 25.784 26.575 25.35C26.841 24.902 27.191 24.545 27.625 24.279C28.073 24.013 28.563 23.88 29.095 23.88H38.356C38.888 23.88 39.378 24.013 39.826 24.279C40.274 24.545 40.631 24.902 40.897 25.35C41.163 25.784 41.296 26.267 41.296 26.799V27.975H38.503V26.925C38.503 26.855 38.475 26.799 38.419 26.757C38.363 26.701 38.3 26.673 38.23 26.673H29.2C29.13 26.673 29.067 26.701 29.011 26.757C28.969 26.799 28.948 26.855 28.948 26.925V35.955C28.948 36.025 28.969 36.088 29.011 36.144C29.067 36.186 29.13 36.207 29.2 36.207H38.23C38.3 36.207 38.363 36.186 38.419 36.144C38.475 36.088 38.503 36.025 38.503 35.955V33.225H35.08V30.432H41.296V36.081C41.296 36.613 41.163 37.103 40.897 37.551C40.631 37.985 40.274 38.335 39.826 38.601C39.378 38.867 38.888 39 38.356 39H29.095ZM43.5236 39V26.82H46.2746V39H43.5236ZM43.5236 25.602V22.83H46.2746V25.602H43.5236ZM51.385 39C50.853 39 50.37 38.867 49.936 38.601C49.502 38.335 49.152 37.985 48.886 37.551C48.62 37.117 48.487 36.634 48.487 36.102V23.082H51.238V26.82H55.984V29.571H51.238V35.997C51.238 36.067 51.259 36.13 51.301 36.186C51.357 36.228 51.42 36.249 51.49 36.249H55.984V39H51.385ZM58.0442 39V22.83H60.7952V26.82H67.5152C68.0472 26.82 68.5302 26.953 68.9642 27.219C69.3982 27.485 69.7482 27.835 70.0142 28.269C70.2802 28.703 70.4132 29.186 70.4132 29.718V39H67.6622V29.823C67.6622 29.753 67.6342 29.697 67.5782 29.655C67.5362 29.599 67.4802 29.571 67.4102 29.571H61.0472C60.9772 29.571 60.9142 29.599 60.8582 29.655C60.8162 29.697 60.7952 29.753 60.7952 29.823V39H58.0442ZM74.9485 39C74.4165 39 73.9265 38.867 73.4785 38.601C73.0445 38.335 72.6945 37.985 72.4285 37.551C72.1765 37.117 72.0505 36.634 72.0505 36.102V26.82H74.8015V35.997C74.8015 36.067 74.8225 36.13 74.8645 36.186C74.9205 36.228 74.9835 36.249 75.0535 36.249H81.4165C81.4865 36.249 81.5425 36.228 81.5845 36.186C81.6405 36.13 81.6685 36.067 81.6685 35.997V26.82H84.4195V36.102C84.4195 36.634 84.2865 37.117 84.0205 37.551C83.7685 37.985 83.4255 38.335 82.9915 38.601C82.5575 38.867 82.0675 39 81.5215 39H74.9485ZM86.2014 39V22.83H88.9524V26.82H95.6724C96.2044 26.82 96.6874 26.953 97.1214 27.219C97.5694 27.485 97.9194 27.835 98.1714 28.269C98.4374 28.703 98.5704 29.186 98.5704 29.718V36.102C98.5704 36.634 98.4374 37.117 98.1714 37.551C97.9194 37.985 97.5694 38.335 97.1214 38.601C96.6874 38.867 96.2044 39 95.6724 39H86.2014ZM89.2044 36.249H95.5674C95.6374 36.249 95.6934 36.228 95.7354 36.186C95.7914 36.13 95.8194 36.067 95.8194 35.997V29.823C95.8194 29.753 95.7914 29.697 95.7354 29.655C95.6934 29.599 95.6374 29.571 95.5674 29.571H89.2044C89.1344 29.571 89.0714 29.599 89.0154 29.655C88.9734 29.697 88.9524 29.753 88.9524 29.823V35.997C88.9524 36.067 88.9734 36.13 89.0154 36.186C89.0714 36.228 89.1344 36.249 89.2044 36.249Z" fill="white"/>
                        <path d="M0.5 0.5H241.273L258.5 20.1879V60.5H0.5V0.5Z" stroke="#C7F5F5"/>
                        <path opacity="0.6" d="M6.5 6.5H235.285L250.5 22.5924V55.5H6.5V6.5Z" stroke="#C7F5F5"/>
                        </svg>
                        
                      ):(
                        <></>
                      )}
                    
                    </div>
                  </div>
                 
                )
            })}
      
        <Pagination projects={projects} currentPage={currentPage} onPageChange={onPageChange}/>
    </div>
  )
}
