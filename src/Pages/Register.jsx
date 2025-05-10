import React from "react";
import { useNavigate } from "react-router-dom";
import "../componens/Buyacar.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const username = form.username.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Optional: check confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = { name, username, email, phone, password };

    try {
      const res = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (res.ok) {
        alert("Registration successful!");
        navigate("/login");
      } else {
        const errData = await res.json();
        alert("Registration failed: " + errData.message);
      }
    } catch (err) {
      alert("An error occurred: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Register Now</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" id="name" name="name" placeholder="Name" required />
          <br />
          <input type="text" id="username" name="username" placeholder="Username" required />
          <br />
          <input type="email" id="email" name="email" placeholder="Email" required />
          <br />
          <input type="tel" id="phone" name="phone" placeholder="Phone" required />
          <br />
          <input type="password" id="password" name="password" placeholder="Password" required />
          <br />
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <br />
          <button type="submit" style={{ width: "100%", height: "3rem", textAlign: "center" }}>
            Submit
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "1rem" }}>
          Already Have An Account <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
