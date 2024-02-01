import React from 'react'

export const TechItem = ({title,index}) => {

  return (
    <div className='tech-box'  >
        <div className={index == 1 ? 'tech-rect-hover' : 'tech-rect'}></div>
         <div className={index == 1 ? "tech-item fw-semi-bold tech-hover" : "tech-item fw-semi-bold"}><span className=''>TECH 00{index+1}</span> <span className='tech-title'>{title}</span></div>
    </div>
  )
}
