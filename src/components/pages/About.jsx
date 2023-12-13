import React from 'react'
import './about.css'

export const About = () => {
  return (
    <div className='about-container'>
      <div className='about-image-container'>
      <svg width="310" height="346" viewBox="0 0 310 346" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M181 330H217L249 344.5H217.5L181 330Z" fill="#E3FFFF"/>
        <path d="M85.5 0.5H116.5L158.5 20.5H128L85.5 0.5Z" fill="#E3FFFF"/>
        <rect x="14" y="29" width="284" height="287" stroke="#E3FFFF" strokeWidth="2"/>
        <path d="M85.5 1L128 21H309V345H217.5L182 330.5H1V1H85.5Z" stroke="#E3FFFF"/>
      </svg>
      <img className='about-image' src="src/assets/headshot 1.png" alt="headshot" />
      </div>
     
      <div>
        <p className='about-description'>Hello, I'm Lars, an aspiring web developer and software developer with a strong passion for creating user-friendly and visually appealing websites. While I may not have a long list of professional projects under my belt, my journey has been fueled by my dedication to mastering the craft of web development.</p>
      </div>
    </div>
  )
}
