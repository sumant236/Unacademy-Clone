import React from 'react'
import style from "./PlanDetails.module.css"
import { Plus } from './priceList/Plus'
import { Plus2 } from './priceList/Plus2'
import { Iconic } from './priceList/Iconic'
import { Slider } from './Slider'
import { useState } from 'react'


export const PlanDetails = () => {


    const [show, setShow] = useState(true);
    const [view, setView] = useState(false);
    const [value, setValue] = useState();

    const onView=()=>{

        setView(true);
    }

    const onPlus =()=>{

        setShow(true);
    }
    const onIconic=()=>{

        setShow(false);
    }
    const click = () =>{

        console.log(value)
        setValue()
    }
  return (
    <div>
        <header className={style.logo}>
            <img src='https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=384' alt="logo"/>
        </header>
        <div className={style.main}>
            <div className={style.slider}>
                <Slider/>
            </div>
            <div className={style.plandetails}>
                <div className={style.topheading}>
                    <h3>NDA subscription</h3>
                </div>

                <div className={style.topbuttons}>

                    <button onClick={onPlus} className={show?style.button1:style.btn1}>PLUS</button>
                    <button onClick={onIconic} className={show?style.btn1:style.button2}>ICONIC</button>
                </div>

                <div className={style.emi}>
                    <img src='https://static.uacdn.net/production/_next/static/images/sale_discount.png?q=75&w=32'/>
                    <p>No cost EMI available on 6 months & above subscription plans</p>
                </div>

                {show?(
                    (view?(<Plus2/>):(<Plus/>))

                ):(<Iconic/>)}
                <p className={style.para}>To be paid as a one-time payment</p>

                {view?(<></>):(<button className={style.viewPlans} onClick={onView}>View all plans</button>)}
                

                <div className={style.fixedfooter}>
                    <div className={style.imgBox}>
                        <img src="https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=32"/>
                    </div>
                    <input type="text" placeholder='Have a referral code?' value={value} 
                        onChange={
                            (e)=> setValue(e.currentTarget.value)
                        }
                    />
                    <button className={style.apply}>Apply</button>
                    
                   <button className={style.paybtn}>Proceed to pay</button>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}
