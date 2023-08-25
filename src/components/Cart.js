import { useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Cart = () => {
  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = useSelector((store) => store.cart.total);
  const totalQuantity = useSelector((store) => store.cart.quantity);

  // for action dispatch
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    //dispatching a action
    dispatch(removeItem(item));
  };

  const handleClearAllItems = () => {
    dispatch(clearCart());
  };

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="cartcontainer text-center m-4 p-4">
      <h1 className="font-bold text-2xl">Your Cart</h1>
      <button
        className="mx-auto my-4 p-2 rounded-lg w-auto bg-black text-orange-600 shadow-lg"
        onClick={() => handleClearAllItems()}
      >
        Clear Cart
      </button>

      <div className="flex justify-center">
        <div className="w-6/12 mx-auto col-md-8">
          {cartItems.map((item) => (
            <div
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
                {/* <p className="text-xs">{item.card.info.description}</p> */}
              </div>
              <div className=" relative w-3/12 p-4">
                <button
                  className=" absolute inset-x-0 bottom-0 mx-auto p-2 rounded-lg w-20 bg-white text-green-600 shadow-lg"
                  onClick={() => handleRemoveItem(item)}
                >
                  remove
                </button>
                <img
                  src={CDN_URL + item?.card?.info?.imageId}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>

        <div className=" w-3/12 flex justify-center col-md-4 position-sticky">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className=" bg-slate-500   m-2 text-2xl font-bold">
                Summary
              </h5>
              <h4 className="m-2 text-l font-bold">
                {loggedInUser} Your Order Details
              </h4>
            </div>

            <div className="card-body m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  <div>
                    <strong>Total Quantity</strong>
                  </div>
                  <span>{totalQuantity}-Items</span>
                </li>

                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                  </div>
                  <span>
                    <strong>₹{totalPrice}</strong>
                  </span>
                </li>
              </ul>

              <button
                type="button"
                className="mx-auto p-2 rounded-lg w-auto bg-black text-orange-600 shadow-lg font-bold"
              >
                Go to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
