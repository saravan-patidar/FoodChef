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
    const listData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResList(listData);
  };
  return [resList];
};
export default useRestaurants;
