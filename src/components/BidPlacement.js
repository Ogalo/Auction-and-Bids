import React from "react";
import {FaTimesCircle  } from "react-icons/fa";
import { Link } from "react-router-dom";

function Bid({open, close}) {
  if(!open){return null}
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBid = () => {
    alert("Bid Successful");
  };

  return (
    <div>
    <section className="overlay">
    <div className="layContainer">
          <form onSubmit={handleSubmit}>
            <div className="container2">
            <Link to='/'><FaTimesCircle className='closeTab' onClick={close}/></Link>
              <h1>Place Bid</h1>
              <label htmlFor="email">
                <b>Your Name:</b>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                required
              />
              <label htmlFor="email">
              <b>ID no:</b>
            </label>
            <input
              type="number"
              placeholder="Your Identity card no"
              name="name"
              required
            />


              <label htmlFor="psw">
                <b>Item name:</b>
              </label>
              <input
                type="text"
                placeholder="Enter Item Name"
                name="item"
                required
              />
              <label htmlFor="psw">
              <b>Item Id:</b>
              </label>
              <input
              type="number"
              placeholder="Enter Item ID"
              name="itemId"
              required
              />
              <label htmlFor="email">
              <b>Your Bid</b>
              </label>
              <input
              type="number"
              placeholder="$8400"
              name="name"
              required
              />


              <button
                type="submit"
                className="registerbtn"
                onClick={handleBid}
                href="/"
              >
                Bid
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Bid;
