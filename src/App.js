import './App.css';
import Details from './component/payments/Details';

import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { ExplorePage } from './component/Explore/ExplorePage';
import { Login } from './component/Login/Login';
import { Email } from './component/Login/Email';
import { OtpPage } from './component/Login/OtpPage';
import { Navbar } from './component/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () =>{
    setClick(true);
  }
  return (
    <div className="App">

       {/* <Page/> */}
      {/* <Subscription/> */}
       {/* <Details/> */}
       {/* <ExplorePage /> */}
        {/* <Login handleClick={handleClick}/> */}
        {/* {click?<Email/>:<Login handleClick={handleClick}/>} */}
        {/* <Email/> */}
        {/* <OtpPage/> */}
    </div>
  );
}

export default App;
