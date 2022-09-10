import React from 'react'
import { FaHome, FaUser, FaHammer, FaBoxes, FaPhoneAlt } from "react-icons/fa";


function Navigation() {
  return (
    <div className="Nav">
      <header className="Nav-header">
      <section className="Brand-Name">
      <h1>Auctions and Bids</h1>
      </section>
      <section className="Nav-Bar">

      <h4><FaHome /> Home</h4>
      <h4><FaHammer /> Auction</h4>
      <h4><FaBoxes /> Service</h4>
      <h4><FaPhoneAlt /> Contact Us</h4>

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
