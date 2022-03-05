import React from 'react'
import style from './batches.module.css'

function Super30() {
  return (
    <div className={style.batch}>
        <div>
          <img src='https://edge.uacdn.net/static/thumbnail/batch/75a9ef03100e47299f63a0bc399b9fd6.png?q=100&w=512' alt='_Sumit_img'/>
          <p>HINDI      ENGLISH</p>
          <h4>Super 30 NDA Practice batch 2022</h4> 
          <p>Starts on 18 Feb 2022</p>
          <p>Afternoon classes</p>   
          <p>Arpit Chaudhry, Sunny Verma
            and 3 more
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
export default Super30;