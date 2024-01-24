import { RES_IMG_URl } from "../utils/constants";
import starLogo from "../images/star.png";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, costForTwo, sla, avgRating } =
    resData?.info;
  return (
    <div className="bg-gray-300 border w-60 h-80 m-3 p-2 rounded-xl shadow-my-s hover:bg-indigo-300 transition-all ease-in-out duration-700">
      <div className="h-2/4 rounded-lg">
        <img
          className="w-[100%] h-[100%] rounded-lg"
          src={RES_IMG_URl + cloudinaryImageId}
          alt="res-img"
        />
      </div>
      <div>
        <h3 className="font-bold p-1">{name}</h3>
        <div className=" flex items-center justify-between my-1">
          <h4 className="flex items-center m-[2px] bg-green-400 px-[3px] rounded-md">
            <img className="w-4 mx-[2px] " src={starLogo} alt="starLogo" />
            {avgRating}
          </h4>
          <h4 className="font-semibold">{sla.deliveryTime} Mins</h4>
          <h3 className="font-bold ">{costForTwo}</h3>
        </div>
        <p className="text-sm">{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;

export const withHighRatedLabel = (RestaurantCard) => {
  return ({ resData }) => (
    <div className="relative">
      <label className="absolute top-0 left-2 bg-green-400 px-2 text-sm font-bold rounded-b">
        HIGH RATED
      </label>
      <RestaurantCard resData={resData} />
    </div>
  );
};
