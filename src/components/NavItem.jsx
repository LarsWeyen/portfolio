import React,{useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';

export const NavItem = ({title}) => {

    const [isHover,setIsHover] = useState(false);
    const [isActive,setIsActive] = useState(false);
    
  return (
    
    <div className='navitem'> 
            <div className='navitem-container'>
                <svg width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity={isHover || isActive ? 1 : 0.6} d="M30 18L-1.63133e-06 35.3205L-1.17124e-07 0.67949L30 18Z" fill="white"/>
                </svg>
                <p className={isHover || isActive ? "navitem-text-hover fw-bold" : "navitem-text fw-bold"}>{title}</p>
            </div>
            {isActive ? (
        <svg width="450" height="136" viewBox="0 0 450 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 118V21V0.5H149.5L198.5 21H449V135.5H288.5L246.5 118H1Z" stroke="#E3FFFF"/>
        <path d="M246.5 117.5H282.5L326.5 135.5H288L246.5 117.5Z" fill="#E3FFFF"/>
        <path d="M149.5 0H186.5L237 20.5H198.5L149.5 0Z" fill="#E3FFFF"/>
        <path d="M144.5 10.5H10.5V110H291L330.5 124H433V30H191.5L144.5 10.5Z" stroke="#E3FFFF" strokeWidth="5"/>
        <NavLink to={"/"+title.toString().toLowerCase()} className={({ isActive, isPending })=> {useEffect(()=>{setIsActive(isActive)})}}>
        <path d="M25 98V23H145L191.5 42.5H415.5V110H336L305.5 98H25Z" fill="#393939"/>
        </NavLink>
        </svg>
      ) : (
        <svg width="450" height="136" viewBox="0 0 450 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className='nav-svg-outer-fill' d="M1 118V21V0.5H149.5L198.5 21H449V135.5H288.5L246.5 118H1Z" stroke="#E3FFFF" opacity={0.6}/>
                <path className='nav-svg-outer' d="M246.5 117.5H282.5L326.5 135.5H288L246.5 117.5Z" fill="#E3FFFF" opacity={0.6}/>
                <path className='nav-svg-outer' d="M149.5 0H186.5L237 20.5H198.5L149.5 0Z" fill="#E3FFFF" opacity={0.6}/>
                <path className={isHover && !isActive ? "nav-svg-inner-stroke-hover" : "nav-svg-inner-stroke"} d="M144.5 10.5H10.5V110H291L330.5 124H433V30H191.5L144.5 10.5Z" stroke="#E3FFFF" strokeWidth="5" />
                <NavLink to={"/"+title.toString().toLowerCase()} className={({ isActive, isPending })=> {useEffect(()=>{setIsActive(isActive)})}}>
                <path onMouseEnter={()=>setIsHover(true)} onMouseLeave={() => setIsHover(false)} onMouseDown={()=>setIsHover(false)} className="nav-svg-inner-fill" d="M25 98V23H145L191.5 42.5H415.5V110H336L305.5 98H25Z" fill="#393939" opacity={0.0}/>
                </NavLink>
            </svg>
      )}
            
            
            
            
             

    </div>

  )
}
