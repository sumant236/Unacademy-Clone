import React, { useState, useEffect } from 'react'
import styles from "./Login.module.css";
import axios from 'axios';

const createData = (userData) => {
  const payload = userData
  const config = {
    url: "https://unacadmey.herokuapp.com/users",
    method: "post",
    data: payload
  };
  return axios(config);
}

export const VerificationPage = ({login}) => {
    const [userData, setUserData] = useState({
      password: "",
      name: "",
      email: ""
    })
    const [isLoading, setIsLoading] = useState(false)

    const handleChange= (e) =>{
      let {name, value, type} = e.currentTarget;
      setUserData({...userData, [name]: value});
      // console.log(userData)
    }
    
    // console.log({login});
    const handleSubmit = async () =>{
      try {
        if(userData.name === ""){
          return err
        }
        setIsLoading(true)
        await createData(userData)
        setUserData({
          name:"",
          password: "",
          email:""
        })
        // login(userData)
        // console.log();
        setIsLoading(false);
      }
      catch {
      }
    }

    if(isLoading) {
      return <div style={{color: "#08BD80"}}>...You're Logging In</div>
    }

    return (
    <>
          <h1>Enter OTP</h1>
          <div className={styles.link}><p className={styles.otpPTag}>We've sent an OTP to your registered mobile number</p></div>
          <div className={styles.inputBox}>
              <input type="password" placeholder='Password' className={styles.inputBoxes} value={userData.password} name="password" onChange={handleChange} />
          </div>
          <div className={styles.inputBox}>
              <input type="text" placeholder='Name' className={styles.inputBoxes} value={userData.name} name="name" onChange={handleChange}/>
          </div>
          <div className={styles.inputBox}>
              <input type="text" placeholder='Email address' className={styles.inputBoxes} value={userData.email} name="email" onChange={handleChange}/>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox"></input>
            <label> I agree to Unacademy’s Terms & Privacy policy</label>
          </div>
          <div className={styles.btnAndEmail}>
            <input type="submit" className={styles.loginBtn} onClick={()=>{handleSubmit(); login()}}  value="Sign Up"/>
          </div>
    </>
  )
}