import React, { useState, useEffect } from "react";
import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard.jsx";

const SWIGGY_URL = process.env.REACT_APP_SWIGGY_PROXY_URL || "http://localhost:5000/api/restaurants";

// Simple helper: find the nested restaurants array inside cards
function extractRestaurantsFromCards(cards = []) {
  if (!Array.isArray(cards)) return [];
  const card = cards.find((c) =>
    Array.isArray(c?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  );
  return card?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
}

export default function Body() {
  const [restaurants, setRestaurants] = useState([]);
  const [showTopRated, setShowTopRated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await fetch(SWIGGY_URL);
        const json = await res.json();
        const remote = extractRestaurantsFromCards(json?.data?.cards);
        if (remote && remote.length > 0) {
          setRestaurants(remote);
        } else {
          setRestaurants(extractRestaurantsFromCards(data?.data?.cards));
        }
      } catch (err) {
        console.warn("Fetch failed, using local data:", err);
        setRestaurants(extractRestaurantsFromCards(data?.data?.cards));
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const visible = showTopRated
    ? restaurants.filter((r) => {
        const rating = parseFloat(
          r?.info?.avgRatingString || r?.info?.avgRating
        );
        return !Number.isNaN(rating) && rating >= 4.5;
      })
    : restaurants;

  if (loading) return <div className="res-container">Loading restaurants…</div>;

  return (
    <div className="body">
      <div className="search">
        <button className="filter-btn" onClick={() => setShowTopRated((s) => !s)}>
          {showTopRated ? "Show All Restaurants" : "Top Rated Restaurants"}
        </button>
      </div>

      <div className="res-container">
        {visible.length === 0 ? (
          <div>No restaurants available.</div>
        ) : (
          visible.map((restaurantItem) => {
            const info = restaurantItem?.info || {};
            return (
              <RestaurantCard
                key={info.id || info.name}
                resName={info.name || "Unknown"}
                cuisine={Array.isArray(info.cuisines) ? info.cuisines.join(", ") : "N/A"}
                rating={info.avgRatingString || info.avgRating || "N/A"}
                deliveryTime={info.sla?.deliveryTime ? `${info.sla.deliveryTime} mins` : info.sla?.slaString || "N/A"}
                imageId={info.cloudinaryImageId}
              />
            );
          })
        )}
      </div>
    </div>
  );
}
