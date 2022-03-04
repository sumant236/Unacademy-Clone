import * as React from 'react';
import "./details.css"
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




export default function Details() {
    
    const [value, setValue] = React.useState(0);
    const [cashVal,setCashVal]=useState(true)
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div className='payment-container'>
      <div className='payment-whole-wrapper'>
          <div className='column'>
              <div className='user-details'>  
                  <div>
                  <h3>Saurabh Kushwaha</h3>
                  <div className='details'>
                          <span>+91 1234567892</span>
                          <span style={{ marginLeft: 8,marginRight: 8}}> • </span>
                      <span>saurabh@gmail.com</span>
                      <span style={{ marginLeft: 8,marginRight: 8}}> • </span>
                      <span>Gujarat</span>
                      </div>
                      
                  </div>
                  <div className='picture'></div>
              </div>
              <div className='payment-wrapper'>
                  <h4 className='payment-choose-wraper'>Choose a payment method</h4>
                  <div class="method-wrapper">
                      <div class="column-1">
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
                                    sx={{padding:0,paddingTop:1,paddingBottom:1}}
                                    title={<strong>Cash</strong>}
                                    />}/>
                       
                              
                                  
                          </Tabs>
                         
                      </div>
                      <div className='form'>
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
      <div className='subscription-wrapper'>
        <div className='subscription-inner-wrapper'>
          <div className='subscription-first-wrapper'>
              <h4 className='sub-head-wrapper'>IIT JEE subscription</h4>
              <p className="subs-desc-wrapper">24 months </p>
              <div className='subs-valid-desc'>
                <p className="subs-inner-valid-desc">Valid till 3 Mar, 2024</p>
                <h6  className="subs-inner-change-wrapper">Change duration</h6>
              </div>
          </div>

        </div>

      </div>
      </div>
      </div>
  )
}
