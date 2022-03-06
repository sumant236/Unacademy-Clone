import React from 'react'
import style from "../PlanDetails.module.css"
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

export const Plus = () => {
    
    const {value1,value2,value3,sender,setSender} = useContext(AuthContext)
    

    const [choose1, setChoose1] = useState(false);
    const [choose2, setChoose2] = useState(false);
    const [choose3, setChoose3] = useState(false)

   const onselect1=()=>{

        setSender(value1);
        setChoose1(!choose1)
        setChoose2(false)
        setChoose3(false)
    }

    const onselect2=()=>{
        setSender(value2);
        setChoose2(!choose2)
        setChoose1(false)
        setChoose3(false)
    }
    const onselect3=()=>{

        setSender(value3);
        setChoose3(!choose3)
        setChoose1(false)
        setChoose2(false)
    }
  return (
    <div>

        <div className={style.durationAndprice}>
            <div className={choose1?style.plancard2:style.plancard} onClick={onselect1}>

                <div className={style.duration}>
                    <div className={style.monthdetails}>
                        <input type="radio" name='months' value="24" checked={choose1}/>
                        <h4>24 months</h4>
                    </div>
                    <p>SAVE 75%</p>
                </div>

                <div className={style.price}>
                    <div className={style.pricePerMonth}>
                        <h4>₹506</h4>
                        <p>/mo</p>
                    </div>
                    <div className={style.totalPrice}>
                        <p>Total</p>
                        <p>₹{value1.price}</p>
                    </div>
                </div>
                
            </div>

            <div className={choose2?style.plancard2:style.plancard} onClick={onselect2}>

                <div className={style.duration}>
                    <div className={style.monthdetails}>
                        <input type="radio" name='months' value="12" checked={choose2}/>
                        <h4>12 months</h4>
                    </div>
                    <p>SAVE 58%</p>
                </div>

                <div className={style.price}>
                    <div className={style.pricePerMonth}>
                        <h4>₹843</h4>
                        <p>/mo</p>
                    </div>
                    <div className={style.totalPrice}>
                        <p>Total</p>
                        <p>₹{value2.price}</p>
                    </div>
                </div>
                
            </div>

            <div className={choose3?style.plancard2:style.plancard} onClick={onselect3}>

                <div className={style.duration}>
                    <div className={style.monthdetails}>
                        <input type="radio" name='months' value="6" checked={choose3}/>
                        <h4>6 months</h4>
                    </div>
                    <p>SAVE 33%</p>
                </div>

                <div className={style.price}>
                    <div className={style.pricePerMonth}>
                        <h4>₹1349</h4>
                        <p>/mo</p>
                    </div>
                    <div className={style.totalPrice}>
                        <p>Total</p>
                        <p>₹{value3.price}</p>
                    </div>
                </div>
                
            </div>

        </div>
    </div>
  )
}
