import React from 'react'
import style from './batches.module.css'

function Combatnda() {
  return (
    <div className = {style.batch}>
        <div>
          <img src='https://edge.uacdn.net/static/thumbnail/batch/03044b2202e44594a02814837e5f3b54.png?q=100&w=512' alt='_Sumit_img'/>
          <p>HINDI      ENGLISH</p>
          <h4>Combat NDA Practice Course 2022</h4> 
          <p>Starts on 23 Mar 2022</p>
          <p>Afternoon classes</p>   
          <p>Sumit Kumar and
           Anish Pathak
          </p>  
      </div>
      <hr />
      <div className={style.view_schehule_}>
        <img src='https://static.uacdn.net/production/_next/static/images/batch-play-all.svg?q=75&w=32' alt='dicr' />
        <h5>View full schedule</h5>
      </div>
    </div>        
  )
}
export default Combatnda;