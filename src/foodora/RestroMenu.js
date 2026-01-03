import { useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";


const RestroMenu = () => {

  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

  // const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.text;
  const name = resInfo?.cards[0]?.card?.card?.text;

  //const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
//console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]);
  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

   console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

    </div>
  );


};

export default RestroMenu;

//http://localhost:4000/restaurants/405798