import React, { useState } from 'react'
import style from "./Navbar.module.css"

export const Navbar = ({onLogin}) => {

  return (
      <nav className={style.navBar}>
          <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"/>
          <button className={style.loginBtn} onClick={onLogin}>Login</button>
      </nav>
  )
}
