import { useEffect, useState } from "react";
import { MENU_CARD_URL } from "../utils/constants";

const useResaurantMenu = (resId) => {
  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const data = await fetch(MENU_CARD_URL + resId);
    const json = await data.json();
    setCardData(json.data);
  };
  return cardData;
};
export default useResaurantMenu;
