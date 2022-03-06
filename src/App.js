import React from 'react';
import './App.css';
import Details from './component/payments/Details';
import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { PlanDetails } from './component/subscription-plan/PlanDetails';
import { ExplorePage } from './component/Explore/ExplorePage';


import { Email } from './component/Login/Email';
import { VerificationPage } from './component/Login/VerificationPage';
import { Navbar } from './component/Navbar/Navbar';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">

      
     
       <Routes>
       <Route path='/' element={<ExplorePage />}/>
        <Route path='page' element={<Page/>}/>
        <Route path='subscribe' element={<Subscription/>}/>

      </Routes> 

    </div>
  );
}
export default App;
