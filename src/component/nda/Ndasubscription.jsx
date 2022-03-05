import React from 'react'
import { Link } from 'react-router-dom'
import Month1 from './card/ndasubscription/Month1'
import Month12 from './card/ndasubscription/Month12'
import Month3 from './card/ndasubscription/Month3'
import Month6 from './card/ndasubscription/Month6'
import style from './nda.module.css'
import Review from './Review'

function Ndasubscription() {
  return (
    <>
      <div className={style.ndasubscription_pay}>
        <h2>NDA Subscription</h2>      
        <div className={style.subscription_card}>
          <Month1 />
          <Month3 />
          <Month6 />
          <Month12/>  
        </div>
        <h4>Have questions? <Link className={style.view_sub} to=''>Read our FAQs</Link></h4>  
      </div>  
    <Review/>  
    </>          
  )
}
export default Ndasubscription