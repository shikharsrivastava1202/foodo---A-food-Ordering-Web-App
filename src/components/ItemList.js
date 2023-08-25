import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch(); // for action dispatch

  const handleAddItems = (item) => {
    //dispatching a action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2 font-semibold">
              <span>{item.card.info.name}</span>
              <h3>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </h3>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className=" relative w-3/12 p-4">
            <button
              className=" absolute inset-x-0 bottom-0 mx-auto p-2 rounded-lg w-20 bg-white text-green-600 shadow-lg"
              onClick={() => handleAddItems(item)}
            >
              ADD+
            </button>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
