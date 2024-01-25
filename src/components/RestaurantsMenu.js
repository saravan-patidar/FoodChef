import { useParams } from "react-router-dom";
import { useState } from "react";
import useResaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { CARD_ID, RESTAURANT_ID } from "../utils/constants";
import starLogo from "../images/star.png";
import RestaurantCategrory from "./RestaurantCategrory";

const RestaurantsMenu = () => {
  const [showItems, setShowItems] = useState(null);
  const { resId } = useParams();
  const cardData = useResaurantMenu(resId);

  if (cardData === null) return <Shimmer />;
  // console.log(cardData);
  // console.log(cardData?.cards.find((item) => item.groupedCard));
  const {
    name,
    cuisines,
    feeDetails,
    costForTwoMessage,
    sla,
    avgRating,
    totalRatingsString,
  } = cardData?.cards.find(
    (item) => item?.card?.card?.["@type"] === RESTAURANT_ID
  )?.card?.card?.info;

  const itemCards = cardData?.cards
    .find((item) => item.groupedCard)
    ?.groupedCard?.cardGroupMap.REGULAR.cards.filter(
      (item) => item?.card?.card?.["@type"] === CARD_ID
    );

  const handleShowItem = (index) => {
    index == showItems ? setShowItems(null) : setShowItems(index);
  };

  return (
    <div>
      <div className="bg-slate-300 mt-20 md:w-9/12 md:m-auto md:mt-24 my-1 p-3 md:flex items-center justify-between">
        <div>
          <h2 className="font-bold text-3xl md:text-2xl">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{feeDetails.message}</p>
        </div>
        {/* <div className="md:flex items-center justify-between"> */}
        <div className="bg-slate-700 text-white p-2 rounded-md text-center w-52">
          <h3 className="font-bold ">{costForTwoMessage}</h3>
          <h4 className="text-sm">{sla.slaString}</h4>
        </div>
        <div className="px-3 flex items-center md:bg-slate-700 md:text-white p-1 rounded-md">
          <p className="flex bg-green-400 rounded-xl md:m-auto w-16 p-1">
            <img className="w-7 px-1" src={starLogo} /> {avgRating}
          </p>
          <p>{totalRatingsString}</p>
        </div>
        {/* </div> */}
      </div>
      <div className=" md:my-5 md:w-9/12 md:m-auto p-1">
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
