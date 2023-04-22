import React from 'react';
import './App.css';
import Details from './component/payments/Details';
import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { PlanDetails } from './component/subscription-plan/PlanDetails';
import { ExplorePage } from './component/Explore/ExplorePage';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<ExplorePage />}/> */}
        <Route path='/' element={<Page/>}/>
        <Route path='subscribe' element={<Subscription />} />
        <Route path='subscribe/plan' element={<PlanDetails />} />
        <Route path='subscribe/plan/payment' element={<Details />}/>
      </Routes>
    </div>
  );
}
export default App;
