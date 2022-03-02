import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import style from './Explore.module.css'

export const ChooseYourGoal = () => {
  return (
    <div className={style.inputContainer}>
      <div className={style.searchBox}>
          <h1>Choose your goal</h1>
          <div className={style.inputDiv}>
            <div className={style.icon}><label><IoSearchOutline size = "20px" color='#3C4852'/></label></div>
            <div className={style.searchInput}><input type="text" placeholder= "Search for your goal" onChange={(e)=>e.target.value}></input></div>
          </div>
      </div>
    </div>
  )
}
