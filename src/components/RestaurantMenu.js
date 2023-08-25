import Shimmer from "./Shimmer";
import { Component, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu.js";
import RestaurantCatagory from "./RestaurantCatagory.js";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating, areaName } =
    resInfo?.cards[0]?.card?.card?.info;

  const { lastMileTravel, deliveryTime } =
    resInfo?.cards[0]?.card?.card?.info?.sla;

  //earlier was showing only recommended dishes

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);

  const catagories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(catagories);

  return (
    <div className="menu">
      <div className="res-info text-center m-7">
        <h1 className="font-bold text-[30px]">{name}</h1>
        <h4>{areaName}</h4>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h4>
          {avgRating} - {"Stars"}
        </h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>{lastMileTravel} Km</h4>
      </div>
      {/* catagory accordians */}

      <div className="catagories ">
        {catagories.map((catagory, index) => (
          // now this is a controlled component because we are sending a state in props
          <RestaurantCatagory
            key={catagory?.card?.card?.title}
            data={catagory?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
