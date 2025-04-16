import React from "react";
import "../componens/Buyacar.css";

const Register = () => {
  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Register</h1>
        <form className="form" action="">
        <input
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            required
          />
          <br />
          <input
            type="usesrname "
            id="username"
            name="username"
            placeholder="Username"
            required
          />
          <br />
          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            placeholder="Phone Number"
            required
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <br />
          <br />
          <button style={{width: '100%', height: '3rem', textAlign: 'center'}} >Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
