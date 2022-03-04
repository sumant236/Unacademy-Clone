import './App.css';
import Details from './component/payments/Details';

import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { PlanDetails } from './component/subscription-plan/PlanDetails';

function App() {
  return (
    <div className="App">

       {/* <Page/>  */}
      <Subscription/>
    </div>
  );
}

export default App;
