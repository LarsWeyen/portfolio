import React,{useState} from 'react'

export const TechItem = ({title,index}) => {
    const [isHover,setIsHover] = useState(false);

  return (
    <div className='tech-box'  >
        <div className={isHover ? 'tech-rect-hover' : 'tech-rect'}></div>
         <div onMouseEnter={()=>setIsHover(true)} onMouseLeave={() => setIsHover(false)} className={isHover ? "tech-item fw-semi-bold tech-hover" : "tech-item fw-semi-bold"}><span className=''>TECH 00{index+1}</span> <span className='tech-title'>{title}</span></div>
    </div>
  )
}
