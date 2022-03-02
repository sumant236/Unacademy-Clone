import React from 'react'
import '../payment-methods/net_bank.css'

export default function NetBanking() {
    return (
      <div>
      <div className='net-wrapper'>
         
              <div className='icici-bank-wrapper'>
                  <img src="https://static.uacdn.net/app_icons/payments/icici.png" />
              </div>
              <h6 class="bank-heading">ICICI Netbanking</h6>
        
            </div>
            <button className='net-btn'>
        Pay 
      </button>
            </div>
  )
}
