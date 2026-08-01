import React from "react";
import ReactDOM from "react-dom/client";
import "./foodex.css";
import data from "./data.json";

const CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";

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
  const { resName, cuisine, rating, deliveryTime, imageId } = props;
  const imageUrl = imageId
    ? `${CDN_URL}${imageId}`
    : "https://img.freepik.com/free-vector/restaurant-logo-template_23-2148474890.jpg";

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={imageUrl} alt={resName} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="res-details">
        <span>Rating: {rating}</span>
        <span>Delivery: {deliveryTime} mins</span>
      </div>
    </div>
  );
};

const Body = () => {
  const restaurantData = data?.data?.cards?.find(
    (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
  )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {restaurantData.length === 0 ? (
          <div>No restaurants available.</div>
        ) : (
          restaurantData.map((restaurantItem) => {
            const info = restaurantItem?.info || {};
            const resName = info.name || "Unknown Restaurant";
            const cuisine = info.cuisines ? info.cuisines.join(", ") : "Cuisine not available";
            const rating = info.avgRatingString || info.avgRating || "N/A";
            const deliveryTime = info.sla?.deliveryTime || info.sla?.slaString || "N/A";
            const imageId = info.cloudinaryImageId;

            return (
              <RestaurantCard
                key={info.id || resName}
                resName={resName}
                cuisine={cuisine}
                rating={rating}
                deliveryTime={deliveryTime}
                imageId={imageId}
              />
            );
          })
        )}
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