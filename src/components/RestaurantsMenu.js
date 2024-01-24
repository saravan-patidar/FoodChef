import { useParams } from "react-router-dom";
import { useState } from "react";
import useResaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CARD_ID } from "../utils/constants";
import starLogo from "../images/star.png";
import RestaurantCategrory from "./RestaurantCategrory";

const RestaurantsMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { resId } = useParams();
  const cardData = useResaurantMenu(resId);

  if (cardData === null) return <Shimmer />;

  const {
    name,
    cuisines,
    feeDetails,
    costForTwoMessage,
    sla,
    avgRating,
    totalRatingsString,
  } = cardData?.cards[0]?.card?.card?.info;

  const itemCards =
    cardData?.cards[2]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (item) => item?.card?.card?.["@type"] === CARD_ID
    );

  const handleShowItem = (index) => {
    index == showItems ? setShowItems(null) : setShowItems(index);
  };

  return (
    <div>
      <div className="bg-slate-300 w-9/12 m-auto mt-24 my-1 p-3 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-2xl">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{feeDetails.message}</p>
        </div>
        <div className="bg-slate-700 text-white p-2 rounded-md text-center">
          <h3 className="font-bold ">{costForTwoMessage}</h3>
          <h4 className="text-sm">{sla.slaString}</h4>
        </div>
        <div className="px-3 bg-slate-700 text-white p-1 rounded-md">
          <p className="flex bg-green-400 rounded-xl m-auto w-16 p-1">
            <img className="w-7 px-1" src={starLogo} /> {avgRating}
          </p>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      <div className=" my-5 w-9/12 m-auto">
        {itemCards.map((item, index) => (
          <RestaurantCategrory
            data={item}
            key={item?.card?.card?.title}
            showItems={showItems === index}
            setShowItems={() => handleShowItem(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default RestaurantsMenu;
