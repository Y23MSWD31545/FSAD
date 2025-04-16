import React, { useState } from "react";
import "../componens/Buyacar.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Login</h1>
        {isLoggedIn && <p style={{ color: 'green' }}>Successfully logged in!</p>}
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
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
          <p id="register-label" style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Link style={{color: 'green'}} to="/register">Register</Link>
          </p>
          
          <button style={{width: '100%', height: '3rem', textAlign: 'center'}} >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
