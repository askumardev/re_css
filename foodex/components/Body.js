import React, { useState, useEffect, useRef } from "react";
// import data from "../utils/data.json";
import RestaurantCard from "./RestaurantCard.jsx";
import ShimmerCard from "./ShimmerCard.jsx";

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
  const [searchText, setSearchText] = useState("");
  const searchInputRef = useRef(null);

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

  const visible = restaurants.filter((r) => {
    const info = r?.info || {};

    // Top rated filter
    if (showTopRated) {
      const rating = parseFloat(info.avgRatingString || info.avgRating);
      if (Number.isNaN(rating) || rating < 4.5) return false;
    }

    // Search filter (by restaurant name only)
    if (searchText && searchText.trim()) {
      const q = searchText.trim().toLowerCase();
      const name = (info.name || "").toLowerCase();
      if (!name.includes(q)) return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search restaurants..."
              value={searchText}
              disabled
            />
            <button className="search-btn" disabled>Search</button>
          </div>
          <button className="filter-btn" disabled>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
            <input
              ref={searchInputRef}
              type="text"
              className="search-input"
              placeholder="Search restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="search-btn"
              onClick={() => {
                if (searchText) setSearchText("");
                else searchInputRef.current?.focus();
              }}
            >
              {searchText ? "Clear" : "Search"}
            </button>
        </div>
        
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
