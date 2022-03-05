import React from 'react'
import style from './cash.module.css'
export default function Cash({ setCashVal }) {
  return (
      <div><p className={style.cash_heading}>Pay your subscription amount in cash or DD</p>
          <span className={style.power}>POWERED BY</span>
          <span className={style.image_wrapper}>
              <img src="https://static.uacdn.net/production/_next/static/images/payments/icici-logo.svg?q=75&w=256"/>
          </span>
          <h5 className={style.how_wrapper}>How it works?</h5>
          <div className={style.first_point}>
              <div className={style.numerical_wrapper}>
                  <div className={style.inner_numerical_wrapper}>
                 
                      <img src="https://static.uacdn.net/production/_next/static/images/payments/fancy_bullets.svg?q=75&w=96" />
                   
                  </div>
                  <h4 className={style.inner_first_point}>1</h4>
              </div>
              <div className={style.generate_wrapper}>
                  <h5 className={style.generate_heading}>Generate cash receipt</h5>
                  <span className={style.generate_desc}>Continue to confirm paying in cash and generate a cash receipt</span>
              </div>
        
          </div>

          <div className={style.first_point}>
              <div className={style.numerical_wrapper}>
                  <div className={style.inner_numerical_wrapper}>
                 
                      <img src="https://static.uacdn.net/production/_next/static/images/payments/fancy_bullets.svg?q=75&w=96" />
                   
                  </div>
                  <h4 className={style.inner_first_point}>2</h4>
              </div>
              <div className={style.generate_wrapper}>
                  <h5 className={style.generate_heading}>Pay ₹61,600 at ICICI Bank</h5>
                  <span className={style.generate_desc}>Print the receipt and visit your
                      <span ><a className={style.geanerate_desc_link} href="https://maps.icicibank.com/mobile/">nearby ICICI Bank branch</a></span>by Mar 10</span>
              </div>
             
          </div>
          <button className={style.continue_btn} onClick={()=>setCashVal(false)}>Continue</button>
      </div>
      
  )
}
