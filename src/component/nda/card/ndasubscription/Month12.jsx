import React from 'react'
import style from '../card.module.css'

function Month12() {
  return (
   <div  className={style.month_payment}>
      <span>25% OFF</span>
      <div>
        <h3>12 month</h3>
        <h1> ₹10, 120</h1>
        <p>Total (Incl. of all taxes)</p>
        <button>Get subscription</button>
      </div>
    </div>
  )
}

export default Month12