import './App.css';
import Navigation from './components/Navigation'
import Products from './components/Products'
import Auction from './components/Auction';
import Bidders from './components/Bidders';

function App() {
  return (
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
  );
}

export default App;
