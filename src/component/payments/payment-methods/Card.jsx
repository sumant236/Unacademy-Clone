import React from 'react'


export default function Card() {
  return (
      <div >
          <input type="text" placeholder="Card number" name="card_number" id="card_number" className="card_number" autocomplete="off" data-form_id="#payment_form_new_card_1" onkeypress="return isOnlyNumeric(event);" maxlength="23" data-merchant_id="unacademy"></input>
          <div className='card-details-wrapper'>
              <div className='first'>
                 <h6 className='valid'>Valid through</h6> 
                  <div className='frame'>
                      <input type="text" placeholder="MM" name="card_exp_month" id="card_exp_month" className="card_exp_month" autocomplete="off" data-form_id="#payment_form_new_card_1" maxlength="2" onkeypress="return isOnlyNumeric(event);"></input>
                      <h6 className='slash'>/</h6>
                      <input type="text" placeholder="YY" name="card_exp_year" id="card_exp_year" className="card_exp_year" autocomplete="off" data-form_id="#payment_form_new_card_1" maxlength="2" onkeypress="return isOnlyNumeric(event);"></input>
                  </div>
              </div>
              <div>
                      <input type="text" placeholder="CVV" name="security_code" id="security_code" className="security_code" autocomplete="off" data-form_id="#payment_form_new_card_3" maxlength="4" onkeypress="return isOnlyNumeric(event);"></input>
                     </div>
          </div>
          <input type="text" placeholder="Name on the Card" name="card_number" id="card_name" className="card_number" autocomplete="off" data-form_id="#payment_form_new_card_1" onkeypress="return isOnlyNumeric(event);" maxlength="23" data-merchant_id="unacademy"></input>
          <button className='pay-btn'>
        Pay 
      </button>
    </div>
  )
}

