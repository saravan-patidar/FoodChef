import { ITEM_IMG_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems, decreaseItems, removeItems } from "../utils/cardSlice";

const CartItemList = ({ data }) => {
  const dispatch = useDispatch();

  const { quantity } = data;
  const { name, price, imageId, id } = data?.card?.info;

  return (
    <div className="flex justify-around items-center p-2 m-auto my-2 w-4/6 h-28 shadow-md bg-slate-100 rounded-xl">
      <div className="h-full ">
        {!imageId ? null : (
          <img
            src={ITEM_IMG_URL + imageId}
            alt="img"
            className="rounded-md h-full "
          />
        )}
      </div>
      <div className="  ">
        <h4 className="font-bold text-lg">
          {name} - ₹{price / 100}
        </h4>
        <div className=" rounded-md inline-block bg-slate-300 p-1">
          <button
            className=" text-red-600 font-bold cursor-pointer text-2xl px-2"
            onClick={() =>
              quantity == 1
                ? dispatch(removeItems(id))
                : dispatch(decreaseItems(id))
            }
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => dispatch(addItems(data))}
            className=" text-green-600 font-bold cursor-pointer text-2xl px-2"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItemList;
