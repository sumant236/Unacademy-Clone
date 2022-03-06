import React, { useState } from 'react'
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import styles from "./Login.module.css";
import { Navbar } from '../Navbar/Navbar';
import { LoginPage } from './LoginPage';
import { VerificationPage } from './VerificationPage';

export const ModalPage = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleLogin = () => setValue(true)


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
      <Navbar onLogin={handleOpen}/>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
              <button onClick={handleClose} className={styles.modalBtn}>X</button>
              {value? <VerificationPage/> :<LoginPage handleLoggingIn={handleLogin}/> }
            </Box>
        </Modal>
    </div>
  )
}