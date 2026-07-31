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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <h1>RestroCards</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
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