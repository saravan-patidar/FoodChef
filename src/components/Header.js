import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../images/food1.png";
import shopCart from "../images/shopping_cart.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const items = useSelector((store) => store.cart.totalCount);
  const userName = useSelector((store) => store.user.userName);

  return (
    <div className="flex z-10 justify-between items-center p-1  px-16 bg-[#6474e5] h-20 fixed left-0 right-0 top-0">
      <img src={foodLogo} alt="logo" className="w-24 h-20 rounded-full" />
      <p className="text-orange-500 font-bold">{userName}</p>
      <p className="font-bold bg-gray-300 p-1 rounded-xl ">
        {!onlineStatus ? "Offline: 🔴" : "Online: 🟢"}
      </p>
      <ul className="flex justify-center items-center text-white font-bold gap-3 uppercase ">
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          <Link to="/about">About</Link>
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          <Lnik to="/help">Help</Lnik>
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          <Link to="/cart">
            <div className="relative">
              <img src={shopCart} className="w-10 " />
              <div className="absolute -right-2 -top-2 bg-black px-1 rounded-full">
                {items ? items : null}
              </div>
            </div>
          </Link>
        </li>
        {login ? (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
            onClick={() => {
              setLogin(false);
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : (
          <button
            className="p-1 bg-red-500 rounded-md hover:bg-red-400"
            onClick={() => {
              setLogin(true);
              navigate("/login");
            }}
          >
            Login
          </button>
        )}
      </ul>
    </div>
  );
};
export default Header;
