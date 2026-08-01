import React from "react";
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
  const restaurantData = getRestaurantData();

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