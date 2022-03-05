import './App.css';
import Details from './component/payments/Details';
import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { PlanDetails } from './component/subscription-plan/PlanDetails';
import { ExplorePage } from './component/Explore/ExplorePage';

function App() {
  return (
    <div className="App">

      <PlanDetails/>
        {/* <Page/> */}
      {/* <Subscription/> */}
      {/* <Details/> */}
      {/* <ExplorePage />*/}
    </div>
  );
}

export default App;
