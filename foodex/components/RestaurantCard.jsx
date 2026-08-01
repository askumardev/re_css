import React from "react";
import { CDN_URL, DEFAULT_IMAGE_URL } from "../utils/contants";

const RestaurantCard = ({ resName, cuisine, rating, deliveryTime, imageId }) => {
  const imageUrl = imageId
    ? `${CDN_URL}${imageId}`
    : DEFAULT_IMAGE_URL;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" src={imageUrl} alt={resName} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <div className="res-details">
        <span>Rating: {rating}</span>
        <span>Delivery: {deliveryTime}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
