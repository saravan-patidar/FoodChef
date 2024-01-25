import { useDispatch, useSelector } from "react-redux";
import { ITEM_IMG_URL } from "../utils/constants";
import { addItems, removeItems, decreaseItems } from "../utils/cardSlice";

const ItemListCard = ({ itemCards }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const getItemCount = (id) => {
    const currItem = cartItems.filter((item) => item.card.info.id === id);
    return currItem[0] ? currItem[0].quantity : "ADD";
  };

  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return (
    <>
      {itemCards.map((item) => {
        const { name, id, description, imageId, price } = item?.card?.info;
        return (
          <div
            key={id}
            className="flex justify-between items-center p-2 m-3 shadow-md bg-slate-100"
          >
            <div className="w-4/6">
              <h2 className="font-bold text-lg">
                {name} - ₹{price / 100}
              </h2>
              <p className="text-sm py-2">{description}</p>
            </div>
            <div className="w-2/6 h-44 relative ">
              {!imageId ? null : (
                <img
                  src={ITEM_IMG_URL + imageId}
                  className="rounded-md h-full w-full "
                  alt="images"
                />
              )}
              <div className="absolute rounded-md md:-translate-x-1/2 md:left-1/2 md:bottom-10 right-0 left-0 bottom-0 text-center bg-slate-300 p-1">
                <button
                  className=" text-red-600 font-bold cursor-pointer text-lg px-1"
                  onClick={() =>
                    getItemCount(id) === 1
                      ? dispatch(removeItems(id))
                      : dispatch(decreaseItems(id))
                  }
                >
                  -
                </button>
                <span className="px-1">{getItemCount(id)}</span>
                <button
                  onClick={() => handleAddItems(item)}
                  className=" text-green-600 font-bold cursor-pointer text-lg px-1"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ItemListCard;
