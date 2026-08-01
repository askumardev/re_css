import React from "react";
import ReactDOM from "react-dom/client";
import "./foodex.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://img.magnific.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg" alt="Foodex Logo" className="logo" />
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

const RestaurantCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2148474890.jpg" alt="Restaurant Logo" />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 </h4>
      <h4>40 mins </h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Meghana" cuisine="Biryani, North Indian"/>
        <RestaurantCard resName="Spice Garden" cuisine="Burger, Fast Food"/>
      </div>       
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app ">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);