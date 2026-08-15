import { useEffect } from "react";
const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425")
    const json = await data.json();
    console.log(json);

  };
  return (
    <div className="menu">
      <h1>Name of the Restaurant</h1>
    </div>
  );
};

export default RestaurantMenu;