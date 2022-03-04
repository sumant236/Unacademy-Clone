import React from 'react'
import '../payment-methods/net_bank.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function NetBanking() {
  let navigate = useNavigate();

  const [isNet, setIsNet] = useState(true)
  
  const netPayHander = () => {
    window.location="https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page"
  //   navigate("https://shopping.icicibank.com/corp/BANKAWAY?IWQRYTASKOBJNAME=bay_mc_login&BAY_BANKID=ICI");
   }

    return (
      <div>
      <button className={isNet?'net-wrapper':'net-green-wapper'} onClick={()=>setIsNet(!isNet)}>
         
              <div className='icici-bank-wrapper'>
                  <img src="https://static.uacdn.net/app_icons/payments/icici.png" />
              </div>
              <h6 class="bank-heading">ICICI Netbanking</h6>
        
            </button>
            <button className='net-btn' onClick={netPayHander}>
        Pay 
      </button>
            </div>
  )
}
