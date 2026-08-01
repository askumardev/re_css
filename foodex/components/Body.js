import React, { useState } from "react";
import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard.jsx";

// Return the restaurant list from the JSON file.
const getRestaurantData = () => {
  const cards = data?.data?.cards;

  if (!Array.isArray(cards)) {
    return [];
  }

  const restaurantCard = cards.find((card) => {
    return (
      Array.isArray(
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )
    );
  });

  return (
    restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
  );
};

const Body = () => {
  const allRestaurants = getRestaurantData();
  const [showTopRated, setShowTopRated] = useState(false);

  const filteredRestaurants = showTopRated
    ? allRestaurants.filter((item) => {
        const rating = Number(item?.info?.avgRating || item?.info?.avgRatingString);
        return rating >= 4.5;
      })
    : allRestaurants;

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
          <div>No restaurants available.</div>
        ) : (
          filteredRestaurants.map((restaurantItem) => {
            const info = restaurantItem?.info || {};
            const resName = info.name || "Unknown Restaurant";
            const cuisine = Array.isArray(info.cuisines)
              ? info.cuisines.join(", ")
              : "Cuisine not available";
            const rating = info.avgRatingString || info.avgRating || "N/A";
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