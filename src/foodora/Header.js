
import { LOGO_URL } from "../utils/constants";
import { HOME_ICON_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from 'react-router-dom';

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  useEffect(() => {
    console.log("useEffect");
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li><Link to="/"><img className="homeIcon" src={HOME_ICON_URL} /></Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <button className="loginBtn" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}>{btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;