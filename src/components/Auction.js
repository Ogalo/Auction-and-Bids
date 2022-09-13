import React,{useState} from 'react'
import jaguar from '../Images/1957 Jaguar XKSS.webp'
import { FaStar, FaRegClock, FaArrowAltCircleUp, FaHashtag} from "react-icons/fa";
import Bid from './BidPlacement';


function Auction() {
  const[bet, setBet]=useState(false)


  return (
    <>
    <section className='Auction'>
    {/*Product information goes here*/}
    <div className='Prod-info'>

    <div className="Item">
    <div className='image'>
    <h3>1957 Jaguar XKSS</h3>
    <img src={jaguar} alt='jaguar'/>
    </div>
    <div className='Review'>
    <h4><FaStar className='star'/>  <span>0</span></h4>
    <p><span>0</span> Reviews</p>
    <button className='butt2'>Save Item</button>
    </div>
    </div>


    <div className='Desc'>
    <div className='Description'>
    <h2>Information</h2>
    <div className='Table'>
      <table>
      <tr>
      <th><FaRegClock/> Time Left :</th>
      <td>4 hr</td>
      </tr>
      <tr>
      <th><FaArrowAltCircleUp/> High Bid: </th>
      <td>$ 841</td>
      </tr>
      <tr>
      <th><FaHashtag/> Bids :</th>
      <td>10</td>
      </tr>
      </table>
    </div>
    <div className='arrange'>
    <div>
    <h3>Item Description:</h3>
    </div>
    <div className="DescMe">5-Speed Manual, 4WD, BMW Turbodiesel Power, U.S. Title

    Morganville, NJ 07751{/*Item description goes here */}</div>

    </div>
    <div>
    <h3>Location:</h3>
    <p>Location url</p>
    </div>
    </div>



    {/*Auction information goes here*/}
    <div className='Auction-Info'>
    <div>
    <h2>Auction</h2>


    {/*Image goes here*/}
    {}
    <p>Price</p>
    <h3>$800</h3>
    <button onClick={()=> setBet(true)}>Place Bid</button>
    <Bid open={bet} close={()=> setBet(false)}/>
    </div>
    </div>
    </div>
    </div>



    </section>
    </>
  )
}

export default Auction;
