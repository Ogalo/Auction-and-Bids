import React from "react";


function Bid() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSignIn = () => {
    alert("Welcome Back!");
  };

  return (
    <div>
      <section className="logInPage" id="logInPage">
        <div className="logIn">
          <form onSubmit={handleSubmit}>
            <div className="container2">
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
                onClick={handleSignIn}
                href="/nijenge-app"
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
