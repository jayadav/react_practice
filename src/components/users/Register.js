import React, { useState } from "react";
const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState()

  const handleSubmit = ()=>{

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
          <hr />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="psw-repeat">
            <b>Repeat Password</b>
          </label>
          <input
            type="password"
            placeholder="Repeat Password"
            name="psw-repeat"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />

          <label>
            <input type="checkbox" defaultChecked name="remember" style={{ marginBottom: "15px" }} /> Remember me
          </label>

          <p>
            By creating an account you agree to our <a href="#!" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.
          </p>

          <div className="clearfix">
            {/* <button type="button" className="cancelbtn">
              Switch Login
            </button> */}
            <button type="submit" className="signupbtn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;