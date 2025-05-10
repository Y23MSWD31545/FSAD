import React, { useState } from "react";
import "../componens/Buyacar.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear any previous errors
    
    try {
      // Set headers to handle potential CORS issues
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // You might need to add Authorization headers if required by your API
        },
        withCredentials: true // Include cookies if your API uses session-based auth
      };

      const response = await axios.post(
        "http://localhost:8080/api/register/login",
        { username, password },
        config
      );

      console.log("Login successful:", response.data);

      // Store user/token after successful login
      localStorage.setItem("user", JSON.stringify(response.data));
      
      // Redirect to home page instead of dashboard
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      
      // Provide more specific error messages based on the response
      if (error.response) {
        console.log("Error status:", error.response.status);
        console.log("Error data:", error.response.data);
        
        if (error.response.status === 403) {
          setError("Access forbidden. You may not have permission to use this service.");
        } else if (error.response.status === 401) {
          setError("Invalid username or password.");
        } else {
          setError(`Login failed: ${error.response.data.message || "Unknown error"}`);
        }
      } else if (error.request) {
        setError("No response from server. Please check if the server is running.");
      } else {
        setError("Error setting up request.");
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="submit" className="btn-login">
            Login
          </button>
          <p id="register-label">
            Don't have an account?{" "}
            <Link to="/register" style={{ color: 'green' }}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;