import React from "react";
import "../componens/Buyacar.css";

const Contactus = () => {
  return (
    <div className="container">
      <div className="contactusmaindiv">
        <h1>Contact us</h1>
        <form className="form" action="">
          <input
            type="text "
            id="fname"
            name="fname"
            placeholder="enter your name"
            required
          />
          <br />
          <input
            type="email "
            id="email"
            name="email"
            placeholder="enter your email"
            required
          />
          <br />
          <input
            type="number "
            id="phone"
            name="phone"
            placeholder="enter your phone  "
            required
          />
          <br />
          <input
            id="message"
            type="text"
            placeholder="Drop your message"
          />{" "}
          <br />
          <select
            style={{
              padding: "1rem",
              borderRadius: "13px",
              border: "none",
              boxShadow: "0 0 8px 0 grey",
            }}
            name=""
            id="selectopt"
          >
            <option value="">
              {" "}
              <b>--------------- our contact info ---------------</b>
            </option>
            <option value="">PHone : +91 7989120278</option>
            <option value="">Email : Premimumcars24@gmail.com</option>
            <option value="">Address : 123, ABC Road , opp PVP mall</option>
          </select>{" "}
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
