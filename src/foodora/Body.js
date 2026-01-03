import RestroCard from "./RestroCard";
import { restroList } from "../utils/constants";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Body = () => {
  // const [listOfRestros, setListOfRestros] = useState(restroList);
  // const [filteredlistOfRestros, setfilteredlistOfRestros] = useState(restroList);

  const [listOfRestros, setListOfRestros] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  //let listOfRestros = restroList;
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(BASE_URL);

    const json = await data.json();
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //listOfRestros = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestros(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();
  const { loggedInUser, setUserName } = useContext(UserContext);

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );


  return listOfRestros.length === 0 ? (<Shimmer />) : (
    <div className="body">
      
      <div className="filter flex">
        <div className="searchBox m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="searchBtn px-4 py-2 m-4 bg-green-100 rounded-lg" onClick={()=>{
            const filteredData = listOfRestros.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            const filteredRestaurant = listOfRestros.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="filterBtn px-4 py-2 bg-gray-100 rounded-lg" 
            onClick={() => {
            filteredList = listOfRestros.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setFilteredRestaurant(filteredList);
          }}>
          Top Restaurants
          </button>          
        </div>
        <div className="search m-4 p-4 flex items-center">
            <label>UserName : </label>
            <input
              className="border border-black p-2"
              value={loggedInUser}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>    
      </div>
      
      <div className="restro-container flex flex-wrap m-4">
        {filteredRestaurant.map((restaurant) =>(
          <Link key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}>
            <RestroCard resData={restaurant?.info} />
          
          </Link>
        ))};
      </div>
      </div>
  );
};


export default Body;