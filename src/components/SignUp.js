import React from "react";
import {FaTimesCircle  } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp({open, close}) {
  if(!open){return null}

  return (
    <div>
      <section id="signUp" className="SignPage">
        <div className="form">
          <form action="#" id="signUpForm">

            <div className="container">
            <Link to='/'><FaTimesCircle className='closeTab' onClick={close}/></Link>

              <h1>Register</h1>
              <div>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email"
                required
              />
              </div>

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw"
                required
              />

              <label htmlFor="psw-repeat">
                <b>Repeat Password</b>
              </label>
              <input
                type="password"
                placeholder="Repeat Password"
                name="psw-repeat"
                id="psw-repeat"
                required
              />

              <p>
                By creating an account you agree to our{" "}
                <a href="./Services.js">Terms & Privacy</a>.
              </p>
              <button type="submit" className="registerbtn">
                Register
              </button>
            </div>

            <div className="container-signin">
              <p>
                Already have an account?{" "}
                <a href="/signIn" id="signIn">
                 Log in
                </a>
                .
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
