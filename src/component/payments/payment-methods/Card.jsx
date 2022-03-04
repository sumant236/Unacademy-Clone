import React from 'react'
import { useState } from 'react'
import Alert from '@mui/material/Alert';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';



export default function Card() {
  const [cardNo, setCardNo] = useState();
  const [cardName,setCardName]=useState()
  const [mm, setMM] = useState();
  const [yy, setYY] = useState();
  const [cv, setCV] = useState();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
      <div >
      <input type="text" placeholder="Card number" name="card_number" onChange={(e)=>setCardNo(e.target.value)} id="card_number" className="card_number" autocomplete="off" data-form_id="#payment_form_new_card_1" onkeypress="return isOnlyNumeric(event);" maxlength="23" data-merchant_id="unacademy"></input>
          <div className='card-details-wrapper'>
              <div className='first'>
                 <h6 className='valid'>Valid through</h6> 
                  <div className='frame'>
                      <input type="text" placeholder="MM" name="card_exp_month" id="card_exp_month" onChange={(e)=>setMM(e.target.value)} className="card_exp_month" autocomplete="off" data-form_id="#payment_form_new_card_1" maxlength="2" onkeypress="return isOnlyNumeric(event);"></input>
                      <h6 className='slash'>/</h6>
                      <input type="text" placeholder="YY" onChange={(e)=>setYY(e.target.value)} name="card_exp_year" id="card_exp_year" className="card_exp_year" autocomplete="off" data-form_id="#payment_form_new_card_1" maxlength="2" onkeypress="return isOnlyNumeric(event);"></input>
                  </div>
              </div>
              <div>
          <input type="text" placeholder="CVV" onChange={(e)=>{setCV(e.target.value)}} name="security_code" id="security_code" className="security_code" autocomplete="off" data-form_id="#payment_form_new_card_3" maxlength="4" onkeypress="return isOnlyNumeric(event);"></input>
                     </div>
          </div>
          <input type="text" placeholder="Name on the Card" onChange={(e)=>{setCardName(e.target.value)}} name="card_number" id="card_name" className="card_number" autocomplete="off" data-form_id="#payment_form_new_card_1" onkeypress="return isOnlyNumeric(event);" maxlength="23" data-merchant_id="unacademy"></input>
      <button className={cardName && mm && yy && cv && cardNo ?
        "pay-green-btn" : "pay-btn"
      } onClick={() => { handleClickOpen() }}>
        Pay 
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
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

