import React from 'react'
import style from "./PlanDetails.module.css"
import { Plus } from './priceList/Plus'
import { Plus2 } from './priceList/Plus2'
import { Iconic } from './priceList/Iconic'
import { Slider } from './Slider'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


export const PlanDetails = () => {

    const {value1,value2,value3,value4,value5,value6,con,sender} = useContext(AuthContext);

    const {setvalue1,setvalue2,setvalue3,setvalue4,setvalue5,setvalue6,setCon,setSender} = useContext(AuthContext);
    
    const [show, setShow] = useState(!con);
    const [view, setView] = useState(false);
    const [value, setValue] = useState("");
   
    const addDiscount=()=>{ 
        setvalue1({
            dur: value1.dur,
            price:value1.price-value,
        })
        setvalue2({
            dur: value2.dur,
            price:value2.price-value,
        })
        setvalue3({
            dur: value3.dur,
            price:value3.price-value,
        })
        setvalue4({
            dur: value4.dur,
            price:value4.price-value,
        })
        setvalue5({
            dur: value5.dur,
            price:value5.price-value,
        })
        setvalue6({
            dur: value6.dur,
            price:value6.price-value,
        })

        
    }

    const onView=()=>{

        setView(true);
    }

    const onPlus =()=>{

        setShow(true);
    }
    const onIconic=()=>{
        setShow(false);
    }
    // // console.log(sender === {});
   const navigate = useNavigate();
    const processHandler = () => {
         console.log(Object.keys(sender).length);
        if (Object.keys(sender).length !== 0) {
            navigate('payment')
        }
    }
  return (
    <div>
        <header className={style.ulogo}>
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
                    <button onClick={onIconic} className={show ? style.btn1 : style.button2}>ICONIC</button>
                      
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
                    <button className={style.apply} onClick={addDiscount}>Apply</button>
                    
               <button className={Object.keys(sender).length!==0? style.paybtn: style.disable_pay} onClick = {processHandler} >Proceed to pay</button> 
                </div>
            </div>
        </div>
        
    </div>
    
  )
}
