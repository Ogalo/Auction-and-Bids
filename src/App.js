import './App.css';
import Navigation from './components/Navigation'
import Products from './components/Products'
import Auction from './components/Auction';
import Bidders from './components/Bidders';
import Media from './components/Media';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn'
import Bid from './components/BidPlacement'
import Sell from './components/Sell'
function App() {
  return (
    <div>
    <div className='formPages'>
     <SignUp />
     <LogIn />
     <Bid />
     <Sell />
     </div>
   <div className='main'>
     <div className='Nav'>
      <Navigation />
     </div>
     <div className='goods'>
      <Products />
      <Auction />
     </div>
     <div className='bid'>
      <Bidders />
     </div>
   </div>
   <div className='Media'>
     <Media />
     </div>

     </div>

  );
}

export default App;
