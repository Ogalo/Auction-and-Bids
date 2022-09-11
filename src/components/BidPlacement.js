import React from "react";


function SignIn() {
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
              <input
                type="text"
                placeholder="Select Category"
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
                Post
              </button>
            </div>
           </form>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
