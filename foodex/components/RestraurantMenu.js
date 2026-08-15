import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const swiggyURL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425";
    const proxiedUrl = `https://corsproxy.io/?url=${encodeURIComponent(swiggyURL)}`;
    
    const json = await fetch(proxiedUrl);
    console.log(json);
    const text = await json.text();
    console.log(text);

  };
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
    </div>
  );
};

export default RestaurantMenu;