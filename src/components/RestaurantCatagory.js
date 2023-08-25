import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(true);
  // -> Taking away this power to make it a controlled component by parent component

  const handleClick = () => {
    // !showItems ? SetShowItems(true) : SetShowItems(false);
    // SetShowItems(!showItems);
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 p-4 bg-gray-100 cursor-pointer shadow-l">
      {/* header */}
      <div className="flex justify-between  " onClick={handleClick}>
        <span className="font-bold text-lg ">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{!showItems ? "🔽" : "🔼"}</span>
      </div>

      {/* body items component */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCatagory;
