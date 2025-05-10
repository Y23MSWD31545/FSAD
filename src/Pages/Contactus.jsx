import React, { useState } from "react";
import "../componens/Buyacar.css";

const Contactus = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Optional: e.target.reset();
  };

  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Contact us</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Enter your name"
            required
          />
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Enter your phone"
            required
          />
          <br />
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            required
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontFamily: "inherit",
              fontSize: "1rem",
              resize: "none",
            }}
            rows="4"
          ></textarea>
          <br />
          <select
            style={{
              padding: "1rem",
              borderRadius: "13px",
              border: "none",
              boxShadow: "0 0 8px 0 grey",
            }}
            name="contactInfo"
            id="selectopt"
          >
            <option value="">--- Our contact info ---</option>
            <option value="phone">Phone: +91 8978419128</option>
            <option value="email">Email: Premiumcars24@gmail.com</option>
            <option value="address">Address: 123, ABC Road, opp PVP mall</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>

        {isSubmitted && (
          <p style={{ color: "green", marginTop: "1rem" }}>
            Submitted successfully!
          </p>
        )}
      </div>
    </div>
  );
};

export default Contactus;
