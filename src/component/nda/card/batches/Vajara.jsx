import React from 'react'
import style from './batches.module.css'
function Vajara() {
  return (
    <div className = {style.batch}>
        <div>
          <img src='https://edge.uacdn.net/static/thumbnail/batch/5208775ca0014db29d0c0a14d40dd185.png?q=100&w=512' alt='_Sumit_img'/>
          <p>HINDI      ENGLISH</p>
          <h4>VAJRA - Sureshot Series for NDA (1) 2022</h4> 
          <p>Starts tomorrow 2 Mar 2022</p>
          <p>Morning classes</p>   
          <p>Mayank Parashar, Sumit Kumar and
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
export default Vajara;