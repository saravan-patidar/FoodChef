import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart } from "../utils/cardSlice";
import cartImg from "../images/empty-cart.jpg";
import CartAmountPage from "./CartAmountPage";
import CartItemList from "./CartItemList";

const Cart = () => {
  const totalData = useSelector((store) => store.cart);
  const { items, totalItemCount } = totalData;
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center p-3  mt-20">
      {!items.length ? (
        <div className="w-3/5 m-auto p-2 ">
          <img src={cartImg} className="w-3/4 h-3/4 m-auto " />
          <h3 className="m-5">Your Cart is Empty </h3>
          <Link
            to="/"
            className="bg-pink_light px-2 p-2 font-bold rounded-md hover:bg-rose-400"
          >
            Click here to go back to restaurants
          </Link>
        </div>
      ) : (
        <div className="flex justify-around items-start mt-2 ">
          <div className="w-7/12  bg-gray-300 p-1 shadow-xl">
            <div className="flex justify-between items-center ">
              <h1 className="font-bold p-2 text-lg ">
                Your Cart Items ({totalItemCount})
              </h1>
              <span className="underline">
                <Link to="/">Continue Shopping</Link>
              </span>
            </div>
            <button
              className="m-1 p-1 bg-black text-white rounded-lg hover:bg-slate-800"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div>
              {items.map((x) => {
                return <CartItemList data={x} key={x.card.info.id} />;
              })}
            </div>
          </div>
          <div className="w-4/12 bg-zinc-100 p-3 shadow-2xl">
            <CartAmountPage totalData={totalData} />
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
