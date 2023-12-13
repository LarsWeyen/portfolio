import React from 'react'
import { NavItem } from './NavItem'
import "./navbar.css"
export const Navbar = () => {
    const items = ["About","Projects","Contact"]
  return (
    <nav>
        <div className='nav-container'>
          <div>
          {items.map((item,index)=>{
                return(<NavItem title={item} key={index}/>)
            })}
          </div>
            
           <img className='nav-hr' src="/images/hr.png" alt="hr line" />
        </div>
        
    </nav>
  )
}
