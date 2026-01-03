import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const styleCard = {
  backgroundColor: "#f0f0f0",
};


const RestroCard = (props) => {
  const {resData} = props;
  const { loggedInUser } = useContext(UserContext);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData;
  return (
    <div className="res-card m-4 p-4 w-[250px] bg-gray-50 hover:bg-gray-200" /* style={styleCard} **/>
      <img className="resLogo rounded-lg" alt="resLogo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
      <h4>User : {loggedInUser} </h4>
    </div>
  );
};

export default RestroCard;
