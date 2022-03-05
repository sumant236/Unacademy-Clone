import React from 'react'
import style from '../card.module.css'

function Month6() {
  return (
    <div  className={style.month_payment}>
       <span>20% OFF</span>
      <div>
        <h3>6 month</h3>
        <h1>₹8,096</h1>
        <p>Total (Incl. of all taxes)</p>
        <button>Get subscription</button>
      </div>
    </div>
  )
}

export default Month6