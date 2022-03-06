import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./Login.module.css";
import { LoginPage } from './LoginPage';
import { VerificationPage } from './VerificationPage';
import { Navbar } from '../Navbar/Navbar';
import Navbar2 from '../Navbar2/Navbar2';

export const ModalPage = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState(false);
    const [loginNavbar, setLoginNavbar] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLogin = () => setValue(true)
    const handleNavbar = () => {
      setLoginNavbar(true)
      setOpen(false)
    };

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
        padding: "24px 0px 0px 48px",
      };
      
    return (
    <div>
      {loginNavbar?<Navbar2/>:<Navbar onLogin={handleOpen}/>}
        <Modal
            open={open}
            onClose={handleClose} 
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <button onClick={handleClose} className={styles.modalBtn}>X</button>
              {value? <VerificationPage login={handleNavbar}/> :<LoginPage handleLoggingIn={handleLogin}/> }
            </Box>
        </Modal>
    </div>
  )
}