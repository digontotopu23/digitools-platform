import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartItem, setCartItem }) => {
  const totalPrice = cartItem.reduce(
    (total, product) => total + (product.price),
    0,);

  const handleRemoveBtn = (product) => {
    const remainingItems = cartItem.filter((item) => item.id !== product.id);
    setCartItem(remainingItems);
    toast.warn(
      <span>
        <b className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
          {product.title}
        </b>{" "}
        removed from cart 🗑️
      </span>,
    );
  };

  const handleCheckoutBtn = () => {
    setCartItem([]);
    toast("Checkout completed 🎉");
  };
  return (
    <div className="bg-white shadow px-3 py-4 sm:px-6 sm:py-6 rounded-lg border-2 border-black/10">
      <h2 className="text-[22px] sm:text-2xl font-bold mb-6">Your Cart</h2>
      {cartItem.map((product) => (
        <div key={product.id} className="flex items-center justify-between bg-[#f9fafc] shadow rounded-lg p-2 sm:p-6 mb-6">
          <div className="flex items-center gap-3 sm:gap-6 w-full">
            <img
              className="border border-black/10 rounded-full p-1 max-w-[12%] sm:max-w-[10%] md:max-w-[7%] lg:max-w-[5%]"
              src={product.icon}
              alt=""
            />
            <div>
              <h3 className="text-base sm:text-[18px] md:text-xl font-bold">
                {product.title}
              </h3>
              <p className="text-sm sm:text-base text-[#627382] font-medium">${product.price}</p>
            </div>
          </div>

          <div>
            <p
              onClick={() => handleRemoveBtn(product)}
              className="text-[#FF3980] cursor-pointer hover:text-purple-500 transition-all text-sm sm:text-base font-semibold"
            >
              Remove
            </p>
          </div>
        </div>
      ))}
      <div
        className={`flex justify-between ${totalPrice === 0 ? "hidden" : "block"}`}
      >
        <p>Total:</p>
        <h3 className="text-xl sm:text-2xl font-bold">${totalPrice}</h3>
      </div>
      <button
        onClick={handleCheckoutBtn}
        className={`btn rounded-full w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all ease-in-out text-white border-none ${totalPrice === 0 ? "hidden" : "block"} mt-4 sm:mt-6`}
      >
        Proceed to Checkout
      </button>

      <div
        className={`text-center space-y-3 md:space-y-5 py-14 md:py-20 ${cartItem.length === 0 ? "block" : "hidden"}`}
      >
        <img
          className="mx-auto"
          src={
            "https://img.icons8.com/?size=100&id=wFlitpRAdn3I&format=png&color=000000"
          }
          alt=""
        />
        <h1 className="text-2xl font-semibold">Your cart is empty!</h1>
        <p className="font-semibold">Add some amazing tools to get started.</p>
      </div>
    </div>
  );
};

export default Cart;