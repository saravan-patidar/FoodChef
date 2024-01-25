import { Link, useNavigate } from "react-router-dom";
import foodLogo from "../images/food1.png";
import shopCart from "../images/shopping_cart.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const items = useSelector((store) => store.cart.totalItemCount);

  const userName = useSelector((store) => store.user.userName);

  return (
    <div className="flex z-10 justify-between items-center p-1  sm:px-16 bg-[#6474e5] h-20 fixed left-0 right-0 top-0">
      <Link to="/">
        <img src={foodLogo} alt="logo" className="w-24 h-20 rounded-full" />
      </Link>
      <p className="text-orange-500 font-bold">{userName}</p>
      <p className="font-bold bg-gray-300 p-1 rounded-xl ">
        {!onlineStatus ? "Offline: 🔴" : "Online: 🟢"}
      </p>
      <div className="relative p-1 md:hidden ">
        <label htmlFor="navbar" className="cursor-pointer">
          {!showNavbar ? (
            <GiHamburgerMenu className="size-8 " />
          ) : (
            <RxCross1 className="size-8" />
          )}
        </label>
        <input
          type="checkbox"
          id="navbar"
          className="hidden"
          checked={showNavbar}
          onChange={(e) => setShowNavbar(!showNavbar)}
        />
      </div>
      <ul
        className={`flex flex-col  gap-1 justify-between absolute top-16
           sm:justify-center p-1 bg-blue_color  rounded-lg items-center  text-white font-bold md:gap-3 uppercase md:flex-row md:bg-transparent md:static ${
             showNavbar ? "right-0" : "right-[-100]"
           } transition-all ease-in-out duration-700`}
      >
        <Link to="/">
          <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
            About
          </li>
        </Link>
        <Link to="/help">
          <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
            help
          </li>
        </Link>
        <Link to="/cart">
          <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
            <div className="relative">
              <img src={shopCart} className="w-10 " />
              <div className="absolute right-0 -top-1 text-sm bg-black px-1 rounded-full">
                {items ? items : null}
              </div>
            </div>
          </li>
        </Link>
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
