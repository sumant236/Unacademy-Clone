import React from 'react'
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import style from '../details.module.css'


export default function Card() {
  const [cardNo, setCardNo] = useState("");
  const [cardName,setCardName]=useState("")
  const [mm, setMM] = useState("");
  const [yy, setYY] = useState("");
  const [cv, setCV] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCV(" ");
    setCardName(" ");
    setMM(" ");
    setYY(" ");
    setCardNo(" ")
    setOpen(false);
  };

  

  return (
      <div >
      <input type="text" value={cardNo} placeholder="Card number" name="card_number" onChange={(e) => setCardNo(e.target.value)} id="card_number" className={style.card_number} ></input>
          <div className={style.card_details_wrapper}>
              <div className={style.first}>
                 <h6 className={style.valid}>Valid through</h6> 
                  <div className={style.frame}>
            <input type="text" placeholder="MM" name="card_exp_month" id="card_exp_month" onChange={(e) => setMM(e.target.value)} className={style.card_exp_month} value={mm} maxlength = "2"></input>
            <h6 className={style.slash}>/</h6>
            <input type="text" value={yy} placeholder="YY" onChange={(e) => setYY(e.target.value)} name="card_exp_year" id="card_exp_year" className={style.card_exp_year} maxlength = "2"></input>
                  </div>
              </div>
              <div>
          <input type="text" value={cv} placeholder="CVV" onChange={(e) => { setCV(e.target.value) }} name="security_code" id="security_code" className={style.security_code} maxlength = "3" ></input>
                     </div>
          </div>
      <input type="text" value={cardName} placeholder="Name on the Card" onChange={(e) => { setCardName(e.target.value) }} name="card_number" id="card_name" className={style.card_number} ></input>
      <button className={cardName && mm && yy && cv && cardNo ?
        style.pay_green_btn : style.pay_btn
      } onClick={() => { handleClickOpen() }}>
        Pay 
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle style={{ cursor: 'move' }}>
          Payment Successfull
        </DialogTitle>
       
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  )
}

