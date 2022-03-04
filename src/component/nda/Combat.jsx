import React from 'react'
import style from './nda.module.css'
import Plussubscription from './Plussubscription';

function Combat() {
  return (
    <>
    <div className={style.combat} >
        <div>
          <img src='https://static.uacdn.net/production/_next/static/images/combat/logo.svg?q=75&w=256' alt='icon_of_combat_1'/>         
          <h1> The most competitive, gamified NDA battle till date </h1>
          <p>Compete with thousands of learners in the weekly scholarship test </p>
          <p> Next Combat on Mar 6, 2022 at 12:00 PM </p>
          <button>Learn more</button>   
        </div>  
        <img className={style.combat_left_img} src='https://static.uacdn.net/production/_next/static/images/combat/listing-banner.svg?q=75&w=640' alt='icon_of_combat_2' />  
    </div>
    <Plussubscription/>      
    </>      
  )
}
export default Combat