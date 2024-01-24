import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const CartAmountPage = ({ totalData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items } = totalData;
  let tprice = 0;
  const price = items.map(
    (item) =>
      (tprice =
        tprice + (item.card.info.price * item.quantity) / 100 ||
        (item.card.info.defaultPrice * item.quantity) / 100)
  );

  return (
    <div>
      <h1 className="font-extrabold text-center text-xl mb-3 ">
        Order Summary
      </h1>
      <div className=" w-10/12 m-auto  px-3 ">
        {items.map((item) => {
          const { id, name, price, defaultPrice } = item.card.info;
          return (
            <div
              key={id}
              className="flex justify-between font-semibold bg-slate-50 m-2 p-1"
            >
              <p>{name} - </p>
              <p>
                {(price * item.quantity) / 100 ||
                  (defaultPrice * item.quantity) / 100}
              </p>
            </div>
          );
        })}
        <div className="flex justify-between font-semibold border-t-2 border-gray-800">
          <p>Total Price of Item - </p>
          <p>₹{tprice}</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>Delivery Charges - </p>
          <p>Free</p>
        </div>
        <div className="flex justify-between font-semibold">
          <p>GSt and Portal Charges - </p>
          <p>₹ 52.15</p>
        </div>
      </div>
      <div className="flex justify-between px-2 p-1 font-semibold bg-gray-300 w-9/12 my-2 m-auto">
        <p>To Pay - </p>
        <p>₹{tprice + 52.15}</p>
      </div>
      <button
        className="m-2 p-1 w-4/6 text-lg font-bold bg-green-400 rounded-2xl shadow-xl hover:bg-green-500 border hover:border-sky-200 ease-in-out transition-all duration-700"
        onClick={() => {
          navigate("/order");
          dispatch(clearCart());
        }}
      >
        Checkout
      </button>
    </div>
  );
};
export default CartAmountPage;
