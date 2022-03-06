import React, { useState } from 'react'
import { Email } from './Email'
import { Mobile } from './Mobile'
import styles from "./Login.module.css";

export const LoginPage = ({handleLoggingIn}) => {
    const [emailLink, setEmailLink] = useState(false);
    
    const handleEmailClick = () => setEmailLink(true);
    const handleMobileClick = () => setEmailLink(false);
  return (
      <>
        <h1 className={styles.h1Tag}>Login</h1>
        <div className={styles.link}><p className={styles.pTag}>or </p><a href='#' className={styles.hyper}><h6 className={styles.h6Tag}>create your account</h6></a></div>
        {emailLink?<Email handleClick={handleMobileClick} handleLogin = {handleLoggingIn}/>:<Mobile handleClick = {handleEmailClick} handleLogin={handleLoggingIn}/>}
      </>
  )
}