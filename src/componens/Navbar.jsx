import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
    }
  }, []);

  const handleLogout = () => {
    // Clear user from local storage and state
    localStorage.removeItem("user");
    setUser(null);
    // Redirect can be added here if needed
    window.location.href = "/";
  };

  return (
    <div>
      <div className="navbar">
        <ul>
          <NavLink style={{ color: "white" }} to="/">
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
          <NavLink to="/gpstracker">
            {" "}
            <li>GPS Tracker</li>
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
          
          {user ? (
            <>
              <NavLink to="/profile">
                <li className="username-display" style={{ backgroundColor: "#043812", color: "white" }}>
                  {user.username || "Profile"}
                </li>
              </NavLink>
              <li 
                onClick={handleLogout} 
                style={{ backgroundColor: "#8B0000", color: "white", cursor: "pointer" }}
              >
                Logout
              </li>
            </>
          ) : (
            <NavLink to="/login">
              <li style={{ backgroundColor: " #043812", color: "white" }}>
                Login
              </li>
            </NavLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;