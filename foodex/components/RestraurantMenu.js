import { useEffect, useState } from "react";

const RestaurantMenu = ({ restaurantId }) => {
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!restaurantId) return;

    fetchMenu(restaurantId);
  }, [restaurantId]);

  const fetchMenu = async (restaurantId) => {
    try {
      const swiggyURL =
        `https://www.swiggy.com/dapi/menu/pl` +
        `?page-type=REGULAR_MENU` +
        `&complete-menu=true` +
        `&lat=12.9351929` +
        `&lng=77.62448069999999` +
        `&restaurantId=${restaurantId}`;

      const proxiedUrl =
        `https://corsproxy.io/?url=${encodeURIComponent(swiggyURL)}`;

      const response = await fetch(proxiedUrl);
      console.log(response);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const json = await response.json();

      console.log("Restaurant ID:", restaurantId);
      console.log("Restaurant data:", json);

      setResInfo(json.data);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
      setError(error.message);
    }
  };

  if (error) {
    return <h2>Failed to load restaurant: {error}</h2>;
  }

  if (!resInfo) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="menu">
      <h1>Restaurant Menu</h1>

      <pre>
        {JSON.stringify(resInfo, null, 2)}
      </pre>
    </div>
  );
};

export default RestaurantMenu;