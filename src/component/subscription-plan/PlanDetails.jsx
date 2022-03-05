import React from 'react'
import style from "./PlanDetails.module.css"
import { Slider } from './Slider'

export const PlanDetails = () => {
  return (
    <div>
        <div className={style.main}>
            <div className={style.slider}>
                <Slider/>
            </div>
            <div className={style.plandetails}>
                <div>
                    <h3>NDA subscription</h3>
                </div>

                <div>
                    <button>PLUS</button>
                    <button>ICONIC</button>
                </div>

                <div>
                    <p>No cost EMI available on 6 months & above subscription plans</p>
                </div>

                <div className={style.durationAndprice}>

                    <div className={style.plancard}>
                    
                        <div className={style.duration}>
                            <div className={style.monthdetails}>
                                <input type="checkbox" />
                                <h4>24 months</h4>
                            </div>
                            <p>SAVE 75%</p>
                        </div>

                        <div className={style.price}>
                            <div className={style.pricePerMonth}>
                                <h4>₹506</h4>
                                <span>/mo</span>
                            </div>
                            <div className={style.totalPrice}>
                                <p>Total</p>
                                <span>₹12,144</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

    
  )
}
