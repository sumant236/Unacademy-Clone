import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./Login.module.css";
import { Mobile } from './Mobile';
import { Email } from './Email';

export const Login = () => {
    const [open, setOpen] = React.useState(false);
    const [emailLink, setEmailLink] = useState(false); 

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleEmailClick = () => setEmailLink(true);
    const handleMobileClick = () => setEmailLink(false);

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
      <nav className={styles.navBar}>
          <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256"/>
          <button className={styles.loginButton} onClick={handleOpen}>Login</button>
      </nav>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <button onClick={handleClose} className={styles.modalBtn}>X</button>
              <h1 className={styles.h1Tag}>Login</h1>
              <div className={styles.link}><p className={styles.pTag}>or </p><a href='#' className={styles.hyper}><h6 className={styles.h6Tag}>create your account</h6></a></div>
              {emailLink?<Email handleClick={handleMobileClick}/>:<Mobile handleClick = {handleEmailClick}/>}
            </Box>
        </Modal>
    </div>
  )
}