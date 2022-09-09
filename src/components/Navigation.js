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
      <ul>
      <li><FaHome /> Home</li>
      <li><FaHammer />Auction</li>
      <li><FaBoxes />Service</li>
      <li><FaPhoneAlt /> Contact Us</li>
      </ul>
      </section>
      <section className="Users">
      <FaUser />
      <p>First Name</p>
      </section>

      </header>
    </div>
  );
}

export default Navigation;
