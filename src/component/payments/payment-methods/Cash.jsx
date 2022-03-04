import React from 'react'
import './cash.css'

export default function Cash() {
  return (
      <div><p className="cash-heading">Pay your subscription amount in cash or DD</p>
          <span className='power'>POWERED BY</span>
          <span className='image-wrapper'>
              <img src="https://static.uacdn.net/production/_next/static/images/payments/icici-logo.svg?q=75&w=256"/>
          </span>
          <h5 class="how-wrapper">How it works?</h5>
          <div className='first-point'>
              <div className='numerical-wrapper'>
                  <div className='inner-numerical-wrapper'>
                 
                      <img src="https://static.uacdn.net/production/_next/static/images/payments/fancy_bullets.svg?q=75&w=96" />
                   
                  </div>
                  <h4 className="inner-first-point">1</h4>
              </div>
        
          </div>
      </div>
      
  )
}
