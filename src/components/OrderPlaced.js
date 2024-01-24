import orderPlaced from "../images/img.gif";
import { Link } from "react-router-dom";

const OrderPlaced = () => {
  return (
    <div className="pt-28 text-center h-screen">
      <img src={orderPlaced} className="w-44 m-auto" />
      <p className="font-bold  text-xl p-1">Thank You </p>
      <p className="p-5 font-semibold">Your Order Successfully Placed </p>
      <Link
        to="/"
        className="bg-orange-500 px-2 p-2 font-bold rounded-md hover:bg-orange-700"
      >
        Click here to go back to restaurants
      </Link>
    </div>
  );
};
export default OrderPlaced;
