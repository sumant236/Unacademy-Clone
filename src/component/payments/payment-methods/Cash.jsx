import React from 'react'
import './cash.css'

export default function Cash({ setCashVal }) {
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
              <div className='generate-wrapper'>
                  <h5 className='generate-heading'>Generate cash receipt</h5>
                  <span className='generate-desc'>Continue to confirm paying in cash and generate a cash receipt</span>
              </div>
        
          </div>

          <div className='first-point'>
              <div className='numerical-wrapper'>
                  <div className='inner-numerical-wrapper'>
                 
                      <img src="https://static.uacdn.net/production/_next/static/images/payments/fancy_bullets.svg?q=75&w=96" />
                   
                  </div>
                  <h4 className="inner-first-point">2</h4>
              </div>
              <div className='generate-wrapper'>
                  <h5 className='generate-heading'>Pay ₹61,600 at ICICI Bank</h5>
                  <span className='generate-desc'>Print the receipt and visit your
                  <span ><a className='geanerate-desc-link' href="https://maps.icicibank.com/mobile/">nearby ICICI Bank branch</a></span>by Mar 10</span>
              </div>
             
          </div>
          <button className='continue-btn' onClick={()=>setCashVal(false)}>Continue</button>
      </div>
      
  )
}
