import React from 'react'
import style from '../card.module.css'
import { Link } from 'react-router-dom';

function Month1() {
  return (
    <div className={style.month_payment}>
      <span>16% OFF</span>
      <div>
        <h3>1 month</h3>
        <h1>₹2,000</h1>
        <p>Total (Incl. of all taxes)</p>
        <Link to='subscribe' ><button>Get subscription</button></Link>
      </div>
    </div>
  )
}

export default Month1