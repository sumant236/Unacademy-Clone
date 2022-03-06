import React from 'react'
import style from './cash.module.css'
export default function CashReciept({setCashVal}) {
  return (
      <div>
      <div className={style.cash_rec_wrapper}>
              <span></span>
        <span className={style.cash_rec_pow}>
              POWERED BY
          
          <span className={style.cash_icic}>
                  <img src="https://static.uacdn.net/production/_next/static/images/payments/icici-logo.svg?q=75&w=256"/>
                  </span>
                  </span>     
          </div>
      <div className={style.cash_rec_gen}>
              <img src="https://static.uacdn.net/production/_next/static/images/payments/bill.svg?q=75&w=256" />
        <h4 className={style.cash_rec_gen_heading}>Generate cash receipt</h4>
        <p className={style.cash_rec_desc}>Take out the printed receipt at the bank</p>
        <button className={style.cash_rec_gen_btn} onClick={()=>setCashVal(true)}>Back to payment methods</button>
          </div>
    </div>
  )
}
