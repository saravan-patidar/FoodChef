import foodLogo from "../images/food1.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-1  px-16 bg-[#6474e5] h-20 fixed left-0 right-0 top-0">
      <img src={foodLogo} alt="logo" className="w-24 h-20 rounded-full" />
      <ul className="flex justify-center items-center text-white font-bold gap-3 uppercase ">
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          Home
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          About
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          Help
        </li>
        <li className="text-xl p-1 px-2 cursor-pointer hover:bg-pink_light rounded-lg duration-700 transition-all ease-in-out">
          cart
        </li>
      </ul>
    </div>
  );
};
export default Header;
