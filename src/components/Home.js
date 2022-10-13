import Navigation from './Navigation'
import Products from './Products'
import Bidders from './Bidders';
import Media from './Media';
import SignUp from './SignUp';
import LogIn from './LogIn'
import Bid from './BidPlacement'
import Sell from './Sell'


function Home() {
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

export default Home;
