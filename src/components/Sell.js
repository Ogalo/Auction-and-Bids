import React from "react";
import { Link } from "react-router-dom";
import {FaTimesCircle  } from "react-icons/fa";



function Sell() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAuction = () => {
    alert("Auctioned Successful");
  };

  return (
    <div>
      <section className="logInPage" id="logInPage">
        <div className="logIn">
          <form onSubmit={handleSubmit}>
          <span className="closeBtn1">
           
            <Link to='/'><FaTimesCircle className='closeTab' /></Link>

          </span>
            <div className="container2">
              <h1>Place Bid</h1>
              <div className="cat">
              <label for="cars">Category:</label>
              <select id="" name="" size="">
                <option value="art">Art</option>
                <option value="cars">Cars</option>
                <option value="houses">House</option>
                <option value="others">Others</option>
              </select>
              </div>
              <br/>
              <label htmlFor="name">
              <b>Item Name:</b>
              </label>
            <input
              type="text"
              placeholder="Item Name"
              name="name"
              required
            />


              <label htmlFor="psw">
                <b>Item Description:</b>
              </label>
              <input
                type="text"
                placeholder="Item Description"
                name="item"
                required
              />
              <label htmlFor="psw">
              <b>Location:</b>
              </label>
              <input
              type="url"
              placeholder="location url"
              name="location"
              required
              />
              <label htmlFor="email">
              <b>Add Photos:</b>
              </label>
              <input
              type="file"
              required
              />


              <button
                type="submit"
                className="registerbtn"
                onClick={handleAuction}
                href="/"
              >
              <Link to="/">
              POST
              </Link>

              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Sell;
