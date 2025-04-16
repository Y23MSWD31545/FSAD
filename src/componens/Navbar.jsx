import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <ul>
          <NavLink style={{ color: "white" }} to="/" >
            <li>
              {" "}
              <b> Premium CR</b>
            </li>
          </NavLink>
          <NavLink to="/">
            {" "}
            <li>Home</li>
          </NavLink>
          <NavLink to="/buyacar">
            {" "}
            <li>BookCar</li>
          </NavLink>
          <NavLink to="/addcar">
            {" "}
            <li>AddCar</li>
          </NavLink>
          

          <NavLink to="/aboutus">
            {" "}
            <li>About</li>
          </NavLink>
          <NavLink to="/contactus">
            <li style={{ backgroundColor: " #043812", color: "white" }}>
              Contact
            </li>
          </NavLink>
          <NavLink to="/login">
            <li style={{ backgroundColor: " #043812", color: "white" }}>
              Login
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
