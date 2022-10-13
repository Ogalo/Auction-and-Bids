import React from 'react'
import { FaHome, FaUser, FaHammer, FaBoxes, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


function Navigation() {
  return (
    <div className="Nav">
      <header className="Nav-header">
      <section className="Brand-Name">
      <h1>Auctions and Bids</h1>
      </section>
      <section className="Nav-Bar">

      <h4><FaHome /><Link to="/">
      Home
    </Link></h4>
      <h4><FaHammer /><Link to="/Auction">
      Auction
    </Link></h4>
      <h4><FaBoxes /><Link to="/main">
      Top Bid
    </Link></h4>
      <h4><FaPhoneAlt /><Link to="">
      Contact Us
    </Link></h4>

      </section>
      <section className="Users">
      <FaUser className='icon' />
      <p>First Name</p>
      </section>

      </header>
    </div>
  );
}

export default Navigation;
