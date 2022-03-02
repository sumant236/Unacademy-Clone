import './App.css';
import Details from './component/payments/Details';

import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';

function App() {
  return (
    <div className="App">

      {/* <Page/> */}
      <Subscription/>
       <Page/>
       <Details/>

    </div>
  );
}

export default App;
