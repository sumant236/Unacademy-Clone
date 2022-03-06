import React from 'react'
import styles from "./Login.module.css";

export const Email = ({handleClick, handleLogin}) => {
  return (
    <>
    <div className={styles.inputBox}>
              <input type="text" placeholder='Email address' className={styles.inputBoxes}/>
          </div>
          <div className={styles.btnAndEmail}>
            <button className={styles.loginBtn} onClick={handleLogin}>Login</button>
            <div>
              <a href="#" className={styles.email}><h6 className={styles.h6Email} onClick={handleClick}>Continue with mobile number</h6></a>
            </div>
          </div>
        </>
  )
}
