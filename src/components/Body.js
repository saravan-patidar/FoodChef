import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import useRestaurants from "../utils/useResaurants";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { withHighRatedLabel } from "./RestaurantCard";

const Body = () => {
  const [resList] = useRestaurants();
  const [search, setSearch] = useState("");
  const [filterRestro, setFilterRestro] = useState([]);
  const [highRated, setHighRated] = useState([]);
  const [isChecked, setIsChecked] = useState(true);
  const [resNotFound, setResNotFound] = useState(null);
  const TopRatedRestaurants = withHighRatedLabel(RestaurantCard);

  useEffect(() => {
    if (filterRestro.length === 0) {
      setFilterRestro(resList);
    }
  }, [resList]);

  const searchRestaurants = () => {
    if (search !== "") {
      const filterData = resList.filter((item) =>
        item?.info?.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterRestro(filterData);
      setSearch("");

      if (filterData.length === 0) {
        return setResNotFound("Restaurants not found !");
      } else {
        setResNotFound(null);
      }
    } else {
      setFilterRestro(resList);
      setResNotFound(null);
      setSearch("");
    }
  };

  return (
    <div className="bg-gray-200 mt-20">
      <div className=" sm:flex p-4 justify-center items-center sm:gap-2 m-auto">
        <div className="mb-3 w-fit m-auto md:mb-0 md:m-0">
          <label
            className={`p-2  rounded-xl text-white shadow  shadow-blue_color hover:bg-blue-400 border ${
              !isChecked ? "bg-orange-500" : "bg-blue_color"
            } `}
            htmlFor="check"
          >
            High Rated
          </label>
          <input
            className="hidden"
            type="checkbox"
            id="check"
            value={isChecked}
            checked={!isChecked}
            onChange={() => {
              setIsChecked(!isChecked);
              if (isChecked) {
                setHighRated(filterRestro);
                const filterRating = filterRestro.filter(
                  (item) => item?.info?.avgRating > 4.3
                );
                setFilterRestro(filterRating);
              } else {
                setFilterRestro(highRated);
              }
            }}
          />
        </div>
        <div className=" w-fit m-auto md:m-0">
          <input
            className="p-2 rounded-s-full w-auto shadow shadow-blue_color hover:blue_color border-none outline-none sm:w-80"
            type="text"
            value={search}
            placeholder="what do you want"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="p-2 bg-blue_color rounded-e-full text-white shadow shadow-blue_color hover:bg-blue-400 border"
            onClick={() => searchRestaurants()}
          >
            Search
          </button>
        </div>
      </div>
      <div>
        {resList.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="flex justify-center flex-wrap w-10/12 gap-4 m-auto py-5">
            {resNotFound != null ? (
              <div className="h-[60vh] ">
                <p className="capitalize text-red-600 font-extrabold text-lg p-3 m-3">
                  {resNotFound}
                </p>
              </div>
            ) : (
              filterRestro.map((list) => (
                <Link to={"/restaurants/" + list.info.id} key={list.info.id}>
                  {list.info.avgRating >= 4.4 ? (
                    <TopRatedRestaurants resData={list} />
                  ) : (
                    <RestaurantCard resData={list} />
                  )}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
export default Body;
