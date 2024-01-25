import { useEffect, useState } from "react";
import { MAIN_URL } from "./constants";

const useRestaurants = () => {
  const [resList, setResList] = useState([]);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MAIN_URL);
    const json = await data.json();
    // console.log(json);
    const listData = json?.data?.cards
      .filter(
        (item) =>
          item.card.card["@type"] ===
          "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget"
      )
      .find(
        (item) =>
          item?.card?.card?.gridElements?.infoWithStyle["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle"
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(listData);
    setResList(listData);
  };
  return [resList];
};
export default useRestaurants;
