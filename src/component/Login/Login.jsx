import React from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./Login.module.css";
import {AiOutlineDown} from "react-icons/ai"

export const Login = ({handleClick}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: "absolute",
        left: "50%",
        width: "50%",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        fontFamily: "sans-serif",
        maxHeight: "1024px",
        overflowX: "hidden",
        transform: "none",
        transition: "transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms",
        height: "100%",
        padding: "24px 115px 0px 48px",
      };

      
    return (
    <div>
        <button onClick={handleOpen}>Log In</button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <button onClick={handleClose} className={styles.modalBtn}>X</button>
              <h1>Login</h1>
              <div className={styles.link}><p className={styles.pTag}>or </p><a href='#' className={styles.hyper}><h6 className={styles.h6Tag}>create your account</h6></a></div>
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
            </Box>
        </Modal>
    </div>
  )
}