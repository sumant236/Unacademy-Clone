import React from 'react';
import './App.css';
import Details from './component/payments/Details';
import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { PlanDetails } from './component/subscription-plan/PlanDetails';
import { ExplorePage } from './component/Explore/ExplorePage';

import { Email } from './component/Login/Email';
import { OtpPage } from './component/Login/OtpPage';
import { Navbar } from './component/Navbar/Navbar';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(true);
  }
  
  return (
    <div className="App">



       {/* <Page/> */}
       {/* <Details/> */}
        {/* <Page/> */}
      {/* <Subscription /> */}
      {/* <ExplorePage/> */}
      {/* <Details/> */}
       {/* <Page/> */}
      {/* <Subscription/> */}
       {/* <Details/> */}
        {/* <Login handleClick={handleClick}/> */}
        {/* {click?<Email/>:<Login handleClick={handleClick}/>} */}
        {/* <Email/> */}
        {/* <OtpPage/> */}
      <Routes>
        <Route path='/' element={<ExplorePage />}/>
        <Route path='nda' element={<Page/>}/>
        <Route path='nda/subscribe' element={<Subscription />} />
        <Route path='nda/subscribe/plan' element={<PlanDetails/>}/>
      </Routes>
      {/* <Details/> */}
      {/* <ExplorePage /> */}
    </div>
  );
}
export default App;
