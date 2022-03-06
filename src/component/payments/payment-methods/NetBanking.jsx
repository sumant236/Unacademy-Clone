import React from 'react'
import { useState } from 'react';
import style from './net_bank.module.css'
import { useNavigate } from "react-router-dom";

export default function NetBanking() {
  let navigate = useNavigate();

  const [isNet, setIsNet] = useState(true)
  
  const netPayHander = () => {
    window.open("https://www.icicibank.com/Personal-Banking/insta-banking/internet-banking/index.page",'_blank')
  //   navigate("https://shopping.icicibank.com/corp/BANKAWAY?IWQRYTASKOBJNAME=bay_mc_login&BAY_BANKID=ICI");
   }

    return (
      <div>
        <button className={isNet ? style.net_wrapper :style.net_green_wapper} onClick={()=>setIsNet(!isNet)}>
         
          <div className={style.icici_bank_wrapper}>
                  <img src="https://static.uacdn.net/app_icons/payments/icici.png" />
              </div>
          <h6 className={style.bank_heading}>ICICI Netbanking</h6>
        
            </button>
        <button className={style.net_btn} onClick={netPayHander}>
        Pay 
      </button>
            </div>
  )
}
