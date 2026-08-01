import React, { useState } from "react";
import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard.jsx";

// Helper function to read the restaurant array from the local JSON file.
// The JSON data is nested, so we first access the main cards array and
// then locate the specific card object that contains a restaurant list.
const getRestaurantData = () => {
  const cards = data?.data?.cards;

  // If the cards field is missing or not an array, return an empty list.
  if (!Array.isArray(cards)) {
    return [];
  }

  // Find the first card object that contains a restaurants array.
  const restaurantCard = cards.find((card) => {
    return (
      Array.isArray(
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
    );
  });

  // Return the restaurants array, or an empty list when it is not found.
  return (
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
  );
};

const Body = () => {
  const [showTopRated, setShowTopRated] = useState(false);
  const restaurantData = getRestaurantData();

  // Show all restaurants or filter only those with rating >= 4.5.
  const filteredRestaurants = restaurantData.filter((restaurantItem) => {
    if (!showTopRated) {
      return true;
    }

    const ratingValue = parseFloat(
      restaurantItem?.info?.avgRatingString || restaurantItem?.info?.avgRating
    );

    return !Number.isNaN(ratingValue) && ratingValue >= 4.5;
  });

  return (
    <div className="body">
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => setShowTopRated((prev) => !prev)}
        >
          {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          // Show a friendly message when no restaurant data is available.
          <div>No restaurants available.</div>
        ) : (
          // Map each restaurant item to a RestaurantCard component.
          filteredRestaurants.map((restaurantItem) => {
            const info = restaurantItem?.info || {};
            const resName = info.name || "Unknown Restaurant";

            // Join cuisine names with commas if the data is an array.
            const cuisine = Array.isArray(info.cuisines)
              ? info.cuisines.join(", ")
              : "Cuisine not available";

            // Use the rating string when available, or fallback to a numeric value.
            const rating = info.avgRatingString || info.avgRating || "N/A";

            // Format delivery time if it exists, otherwise use a fallback string.
            const deliveryTime = info.sla?.deliveryTime
              ? `${info.sla.deliveryTime} mins`
              : info.sla?.slaString || "N/A";
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

export default Body;