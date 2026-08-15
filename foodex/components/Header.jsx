import { HEADER_LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";

// Header component: static top bar.
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src={HEADER_LOGO_URL}
          alt="Foodex Logo"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button className="login-btn" onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;