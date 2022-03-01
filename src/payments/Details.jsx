import * as React from 'react';
import "./details.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Avatar from '@mui/material/Avatar';
import avatar1 from '../pictures/pay_in_parts.png'
import avatar2 from '../pictures/card.png'
import avatar3 from '../pictures/net_banking.png'
import CardHeader from '@mui/material/CardHeader';
import avatar4 from '../pictures/emi-options.png'
import avatar5 from '../pictures/cash.png'
import avatar6 from '../pictures/loan.png'
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
                  <h4>Choose a payment method</h4>
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
                                        src={avatar1}
                                        />
                                    }
                                    title="Pay in Parts"
                                    />} />
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar2}
                                        />
                                    }
                                    title="Card"
                                    />} />
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar3}
                                        />
                                    }
                                    title="Net Banking"
                                    />} />
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar4}
                                        />
                                    }
                                    title="EMI"
                                    />}/>
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar5}
                                        />
                                    }
                                    title="Cash"
                                    />}/>
                        <Tab icon={<CardHeader
                                    avatar={
                                        <Avatar
                                        src={avatar6}
                                        />
                                    }
                                    title="No-cost-loan"
                                    />} />
                              
                                  
                    </Tabs>
      
     
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}
