import React from 'react'
import styles from "./Login.module.css"
import {AiOutlineDown} from "react-icons/ai"

export const Mobile = ({handleClick}) => {
  return (
      <>
      <div className={styles.inputBox}>
                <div className={styles.countryCode}>
                  <div className={styles.country}>
                    <img src="https://static.uacdn.net/thumbnail/country-flag-icons/in.png" className={styles.flag}/>
                    <div className={styles.codes}>
                      <p className={styles.paraTag}>+91</p>
                      <AiOutlineDown size="16px"/>
                    </div>
                  </div>
                  <input type="number" placeholder='Enter your mobile number' className={styles.mobileNo}/>
                </div>
              </div>
              <div className={styles.btnAndEmail}>
                <button className={styles.loginBtn}>Login</button>
                <div>
                  <a href="#" className={styles.email} onClick={handleClick}><h6 className={styles.h6Email}>Continue with email</h6></a>
                </div>
              </div>
              </>
  )
}
