import React, {useState} from "react";
import {FaTimesCircle  } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";


function Bid({open, close}) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [id_no, setId] = useState();
  const [item_name, setItemName] = useState("");

  const [item_id, setItemId] = useState();
  const [your_bid, setBid] = useState();


  if(!open){return null}

  function handleSubmit(){
    alert("Bid Successful");
    fetch("https://arts-bidders.herokuapp.com/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        id_no: id_no,
        item_name: item_name,
        item_id: item_id,
        your_bid: your_bid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        console.log(data);
      });
  }


  return (
    <div>
    <section className="overlay">
    <div className="layContainer">
          <form onSubmit={handleSubmit}>
            <div className="container2">
            <Link to=''><FaTimesCircle className='closeTab' onClick={close}/></Link>
              <h1>Place Bid</h1>
              <label>
                <b>Your Name:</b>
              </label>
              <input
                type="text"
                placeholder="First Name"
                name="name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                required
              />
              <label>
              <b>ID no:</b>
            </label>
            <input
              type="number"
              placeholder="Your Identity card no"
              name="name"
              value={id_no}
                onChange={(e)=> setId(e.target.value)}
              required
            />


              <label>
                <b>Item name:</b>
              </label>
              <input
                type="text"
                placeholder="Enter Item Name"
                name="item"
                value={item_name}
                onChange={(e)=> setItemName(e.target.value)}
                required
              />
              <label>
              <b>Item Id:</b>
              </label>
              <input
              type="number"
              placeholder="Enter Item ID"
              name="itemId"
              value={item_id}
                onChange={(e)=> setItemId(e.target.value)}
              required
              />
              <label htmlFor="email">
              <b>Your Bid</b>
              </label>
              <input
              type="number"
              placeholder="$8400"
              name="name"
              value={your_bid}
                onChange={(e)=> setBid(e.target.value)}
              required
              />


              <button
                type="submit"
                className="registerbtn"
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
