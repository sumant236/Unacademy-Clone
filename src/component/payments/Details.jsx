import * as React from 'react';
import "./details.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import avatar1 from './pictures/pay_in_parts.png'
import avatar2 from './pictures/card.png'
import avatar3 from './pictures/net_banking.png'
import CardHeader from '@mui/material/CardHeader';
import avatar4 from './pictures/emi-options.png'
import avatar5 from './pictures/cash.png'
import avatar6 from './pictures/loan.png'
import TabPanel from './TabPanel';
import Cash from './payment-methods/Cash';
import Card from './payment-methods/Card'
import NetBanking from './payment-methods/NetBanking';
import { useState } from 'react';



export default function Details() {
    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
      <div>
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
                        <TabPanel value={value} index={2}>
                            <Cash/>
                        </TabPanel>
      
                        </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
