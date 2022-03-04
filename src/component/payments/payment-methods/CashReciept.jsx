import React from 'react'

export default function CashReciept({setCashVal}) {
  return (
      <div>
          <div className='cash-rec-wrapper'>
              <span></span>
              <span className='cash-rec-pow'>
              POWERED BY
          
              <span className='cash-icic'>
                  <img src="https://static.uacdn.net/production/_next/static/images/payments/icici-logo.svg?q=75&w=256"/>
                  </span>
                  </span>     
          </div>
          <div className='cash-rec-gen'>
              <img src="https://static.uacdn.net/production/_next/static/images/payments/bill.svg?q=75&w=256" />
              <h4 class="cash-rec-gen-heading">Generate cash receipt</h4>
              <p class="cash-rec-desc">Take out the printed receipt at the bank</p>
              <button className='cash-rec-gen-btn' onClick={()=>setCashVal(true)}>Back to payment methods</button>
          </div>
    </div>
  )
}
