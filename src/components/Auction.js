import React from 'react'
import jaguar from '../Images/1957 Jaguar XKSS.webp'
import { FaStar } from "react-icons/fa";


function Auction() {
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
    <div>
    <h3>Item Name:</h3>
    <p>condition description</p>
    </div>
    <div>
    <h3>Category:</h3>
    <p>category description</p>
    </div>
    <div>
    <h3>Location:</h3>
    <p>location description</p>
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
    <button>Place Bid</button>
    </div>
    </div>
    </div>
    </div>



    </section>
    </>
  )
}

export default Auction;
