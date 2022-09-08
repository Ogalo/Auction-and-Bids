import React from 'react'

function Auction() {
  return (
    <>
    <section className='Auction'>
    {/*Product information goes here*/}
    <div className='Prod-info'>
    <div className="Item">
    </div>
    <div className='Description'>
    <h2>Information</h2>
    <span>Item Name:</span>
    <p>condition description</p>
    <span>Category</span>
    <p>category description</p>
    <span>Location</span>
    <p>location description</p>

    </div>
    </div>

    {/*Auction information goes here*/}
    <div className='Auction-Info'>
    <h2>Auction</h2>
    <img/>
    <p>Price</p>
    <button>Place Bid</button>
    </div>


    </section>
    </>
  )
}

export default Auction;
