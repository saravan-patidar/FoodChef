import { useState } from "react";

const Body = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-gray-200 mt-20">
      <div className="flex p-4 justify-center items-center gap-2">
        <button
          className="p-2 bg-blue_color rounded-xl text-white shadow shadow-blue_color hover:bg-blue-400 border"
          onClick=""
        >
          High Rated++
        </button>
        <div>
          <input
            className="p-2 rounded-s-full w-80 shadow shadow-blue_color hover:blue_color border-none outline-none"
            type="text"
            value={search}
            placeholder="what do you want"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="p-2 bg-blue_color rounded-e-full text-white shadow shadow-blue_color hover:bg-blue-400 border"
            onClick={() => {}}
          >
            Search
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
export default Body;
