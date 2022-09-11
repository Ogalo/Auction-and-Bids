import React from "react";


function LogIn() {
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
              <h1>Log In</h1>

              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                name="email"
                id="email2"
                required
              />

              <label htmlFor="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                id="psw2"
                required
              />

              <button
                type="submit"
                className="registerbtn"
                onClick={handleSignIn}
                href="/nijenge-app"
              >
                Log In
              </button>
            </div>

            <div className="container signin">
              <p>
                Don't have an account?{" "}
                <a href="/signUp" id="butt2">
                  Sign Up
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

export default LogIn;
