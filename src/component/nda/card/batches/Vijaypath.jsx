import React from 'react'
import style from './batches.module.css'

function Vijaypath() {
  return (
    <div className = {style.batch}>
        <div>
          <img src='https://edge.uacdn.net/static/thumbnail/batch/7bedb6fadd694066b1c21436a449b2a2.png?q=100&w=512' alt='_Sumit_img'/>
          <p>HINDI      ENGLISH</p>
          <h4>Vijaypath NDA Batch Course 2022</h4> 
          <p>Starts on 11 Feb 2022</p>
          <p>Afternoon classes</p>   
          <p>Mayank Parashar, Shyam Sharma,
           and 2 more
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
export default Vijaypath;