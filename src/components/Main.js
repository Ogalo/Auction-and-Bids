import Navigation from './Navigation'
import Products from './Products'
import Auction from './Auction';
import Bidders from './Bidders';
import Media from './Media';
import SignUp from './SignUp';
import LogIn from './LogIn'
import Bid from './BidPlacement'
import Sell from './Sell'


function Main() {
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

export default Main;
