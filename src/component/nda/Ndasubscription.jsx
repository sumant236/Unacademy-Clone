import React from 'react'
import Month1 from './card/ndasubscription/Month1'
import Month12 from './card/ndasubscription/Month12'
import Month3 from './card/ndasubscription/Month3'
import Month6 from './card/ndasubscription/Month6'
import style from './nda.module.css'
import Review from './Review'

function Ndasubscription() {
  return (
    <div>
    <h1>NDA Subscription</h1>      
    <div className={style.subscription_card}>
        <Month1 />
        <Month3 />
        <Month6 />
        <Month12/>  
    </div>
    <h4>Have questions? Read our FAQs</h4>  
    <Review/>  
    </div>          
  )
}

export default Ndasubscription