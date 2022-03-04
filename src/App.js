import './App.css';
import Details from './component/payments/Details';
import Page from './component/nda/Page';
import { Subscription } from './component/subscription-plan/Subscription';
import { ExplorePage } from './component/Explore/ExplorePage';

function App() {
  return (
    <div className="App">
      <Page/>
      {/* <Subscription/> 
      {/* <Details/> */}
      {/* <ExplorePage />  */}
    </div>
  );
}

export default App;
