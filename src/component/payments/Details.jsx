import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import avatar1 from './pictures/pay_in_parts.png'
import avatar2 from './pictures/card.png'
import avatar3 from './pictures/net_banking.png'
import CardHeader from '@mui/material/CardHeader';
import { useState } from 'react';
import avatar4 from './pictures/emi-options.png'
import avatar5 from './pictures/cash.png'
import avatar6 from './pictures/loan.png'
import TabPanel from './TabPanel';
import Cash from './payment-methods/Cash';
import CashReciept from './payment-methods/CashReciept';
import Card from './payment-methods/Card'
import NetBanking from './payment-methods/NetBanking';
import { Link } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { AuthContext } from '../../context/AuthProvider';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import style from './details.module.css'



export default function Details() {
  const { sender, setSender } = useContext(AuthContext)
  const navigate = useNavigate();
  const changeHandler = () => {
    setSender({})
    navigate('/nda/subscribe')
  }
  

  const [value, setValue] = React.useState(0);
  const [credit,setCredit]=useState(520)
  const [isRedeem, setRedeem] = useState(false)
  const [oldfee,setOldFee]=useState(sender.price)
  const [newfee, setNewFee] = useState(oldfee);
 
    const [cashVal,setCashVal]=useState(true)
    const handleChange = (event, newValue) => {
        setValue(newValue);
  };
  const redeemHandler = () => {
    setRedeem(!isRedeem);
    const newAmt = oldfee - credit;
    const b = parseInt(credit / 10);
    
    if (!isRedeem == true) {
      const id = setInterval(() => {
      
        setNewFee(prevState => {
          console.log("ne",prevState)
          if (newAmt < prevState) {
            return prevState - b
          }
          else {
            console.log("clear")
            clearInterval(id)
            return newAmt
          }
        })
    
       
      }, 100);
    } else {
      
        const id = setInterval(() => {
        
          setNewFee(prevState => {
            console.log("ne",prevState)
            if (oldfee >prevState) {
              return prevState + b
            }
            else {
              console.log("clear")
              clearInterval(id)
              return oldfee
            }
          })
      
         
        }, 100);
    }
   
    // setNewFee(newAmt);
    
  }
  return (
    <div className={style.payment_container}>
      <div className={style.payment_whole_wrapper}>
        <div className={style.column}>
          <div className={style.user_details}>  
                  <div>
                  <h3>Saurabh Kushwaha</h3>
              <div className={style.details}>
                          <span>+91 1234567892</span>
                          <span style={{ marginLeft: 8,marginRight: 8}}> • </span>
                      <span>saurabh@gmail.com</span>
                      <span style={{ marginLeft: 8,marginRight: 8}}> • </span>
                      <span>Gujarat</span>
                      </div>
                      
                  </div>
            <div>
            <Avatar>S</Avatar>
            </div>
              </div>
          <div className={style.payment_wrapper}>
            <h4 className={style.payment_choose_wraper}>Choose a payment method</h4>
            <div className={style.method_wrapper}>
              <div className={style.column_1}>
                          <Tabs
                            orientation="vertical"
                            variant="scrollable"
                              value={value}
                            onChange={handleChange}
                              aria-label="Vertical tabs example"
                              
                              TabIndicatorProps={{
                                style: {
                                      backgroundColor: "transparent",
                                      color: "black",
                                     
                                 }
                              }}
                          >
                              
                            
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar2}
                                        />
                                    }
                                  sx={{ padding: 0,paddingTop:1,paddingBottom:1}}
                                    title={<strong style={{fontSize: "14px"}}>Card</strong>}
                                    />} />
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar3}
                                        />
                                    }
                                    sx={{padding:0,paddingTop:1,paddingBottom:1}}
                                    title={<strong style={{fontSize: "14px"}}>Net Banking</strong>}
                                    />} />
                      
                              <Tab sx={{fontWeight:"bold"}}icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar5}
                                        />
                                    }
                                sx={{ padding: 0, paddingTop: 1, paddingBottom: 1 }}
                                className={style.tab_bkg}
                                    title={<strong>Cash</strong>}
                                    />}/>
                       
                              
                                  
                          </Tabs>
                         
                      </div>
                      <div className={style.form} >
                    <TabPanel value={value} index={0}>
                              <Card/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <NetBanking/>
                          </TabPanel>
                          {cashVal ?   <TabPanel value={value} index={2}>
                            <Cash  cashVal={cashVal} setCashVal={ setCashVal}/>
                        </TabPanel> :  <TabPanel value={value} index={2}>
                             <CashReciept cashVal={cashVal} setCashVal={ setCashVal}/>
                        </TabPanel>
                         }
                      
                        </div>
                  </div>
              </div>
      </div>
        <div className={style.subscription_wrapper}>
          <div className={style.subscription_inner_wrapper}>
            <div className={style.subscription_first_wrapper}>
              <h4 className={style.sub_head_wrapper}>NDA subscription</h4>
              <p className={style.subs_desc_wrapper}>{sender.dur} months </p>
              <div className={style.subs_valid_desc}>
                <p className={style.subs_inner_valid_desc}>Valid till 3 Mar, 2024</p>
                <h6 className={style.subs_inner_change_wrapper} onClick={changeHandler}>Change duration</h6>
               
              </div>
          </div>

          </div>
          
          <div className={style.refer_wrapper}>
            <div className={style.refer_inner_wrapper}>
              <div className={style.gift_wrapper}>
                <img src='https://static.uacdn.net/production/_next/static/images/gift.svg?q=75&w=48' />
                <div className={style.refer_code_wrapper}>
                  <div className={style.refer_text_code_wrapper}>
                    <input type="text" placeholder="Have a referral code?" className={style.refer_input_text} />
                 
                </div>
                </div>
                
              </div>
           
            </div>
            <div className={style.coin_wrapper}>
              <img src="https://static.uacdn.net/production/_next/static/images/credit.png?q=75&w=48" width="24px" height="24px" />
              <h6 className={style.credits_wrapper}>{credit} credits</h6>
              {isRedeem==false ?
                <Link to='' className={style.redeem_wrapper} onClick={redeemHandler}>Redeem</Link> :
                <CloseIcon onClick={ redeemHandler}/> 
              }
              
            </div>
          </div>
          <div className={style.fee_wrapper}>
            <div className={style.amount_subscription_fee}>
              <p className={style.sub_fee_amt}>Subscription fee</p>
              <p className={style.sub_fee_amt}>₹{ oldfee.toLocaleString()}</p>
            </div>
            {isRedeem ?
              <div className={style.discount_wrapper}>
                <p className={style.cred_app}>Credits applied</p>
                <p className={style.cred_app}>- { credit}</p>
           </div>:""
            }
           
            <hr className={style.hr_divider}></hr>
            <div className={style.total_amt}>
              <h4 className={style.total} >Total<p className={style.include_tax}> (Incl. of all taxes)</p></h4>
              <span className={style.total_fee_pay}>₹{ newfee.toLocaleString()}</span>
            </div>
          </div>

      </div>
      </div>
      
      </div>
  )
}
