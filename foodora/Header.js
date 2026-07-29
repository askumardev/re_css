
import { LOGO_URL } from "../src/utils/constants";
import { HOME_ICON_URL } from "../src/utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../src/utils/useOnlineStatus";
import { Link } from 'react-router-dom';
import UserContext from "../src/utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
  }, []);

  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex flex-wrap items-center justify-between bg-pink-100 shadow-lg mb-2 px-4 py-3">
      <div className="logo-container mr-4">
        <Link to="/"><img className="w-50" src={LOGO_URL} /></Link>
      
      <ul className="flex flex-wrap items-center gap-4 p-0 m-0 list-none">
        <li className="text-sm font-medium">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
        <li>
          <Link to="/" className="inline-flex items-center">
            <img className="w-5" src={HOME_ICON_URL} alt="Home" />
          </Link>
        </li>
        <li><Link to="/about" className="text-sm font-medium">About Us</Link></li>
        <li><Link to="/contact" className="text-sm font-medium">Contact Us</Link></li>
        <li><Link to="/grocery" className="text-sm font-medium">Grocery</Link></li>
        <li className="font-bold text-sm"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
        <li>
          <button className="loginBtn px-3 py-1 bg-white rounded-lg shadow-sm" onClick={() => {
            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
          }}>{btnName}</button>
        </li>
        <li className="text-sm">{loggedInUser}</li>
      </ul>
      </div>
    </div>
  );
};

export default Header;