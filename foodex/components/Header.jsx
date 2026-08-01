import { HEADER_LOGO_URL } from "../utils/contants";

// Header component: static top bar.
const Header = () => {
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
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/menu">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;