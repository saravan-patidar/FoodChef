import ItemListCard from "./ItemListCard";

const RestaurantCategrory = ({ data, showItems, setShowItems }) => {
  const { title, itemCards } = data?.card?.card;
  //   console.log(itemCards);

  return (
    <div className="my-9 shadow-md ">
      <div
        className="flex justify-between items-center p-3 cursor-pointer bg-gray-200 w-full"
        onClick={() => setShowItems()}
      >
        <span className="font-bold">{title}</span>
        <span>{showItems ? "▲" : "▼"} </span>
      </div>
      {showItems && <ItemListCard itemCards={itemCards} />}
    </div>
  );
};

export default RestaurantCategrory;
