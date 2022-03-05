import React from 'react'
import style from './navbar.module.css';
function Navbar() {
  return (
    <div className={style.navbar_border}>
        <img src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256' alt='nav_logo_img' />
        <select>     
            <option>NDA</option> 
            <option>Navy</option>
        </select>  
    </div>
  )
}
export default Navbar