import React from "react";
import { toast } from "react-toastify";

const Product = ({ product, setCartItem, cartItem }) => {
  const isExist = cartItem.find((item) => item.id === product.id);
  const handleProductBtn = () => {
    if (isExist) {
      return toast.error(
        <span>
          <b className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            {product.title}
          </b>{" "}
          already added to cart! 🛍️
        </span>,
      );
    } else {
      setCartItem([...cartItem, product]);
      toast.success(
        <span>
          <b className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
            {product.title}
          </b>{" "}
          added to cart 🛒
        </span>,
      );
    }
  };

  return (
    <div className="border-2 border-black/10 p-6 rounded-lg space-y-4 flex flex-col shadow-lg relative">
      <div className="border w-16 h-16 flex items-center justify-center rounded-full border-black/10">
        <img className="w-10" src={product.icon} alt="" />
      </div>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <p className="text-[#627382]">{product.description}</p>
      <h2 className="text-[#627382]">
        <span className="text-black text-2xl font-bold">${product.price}</span>
        {product.billing}
      </h2>
      <div className="space-y-2">
        {product.features.map((feature, index) => (
          <li key={index} className="list-none text-[#627382]">
            <i className="fa-solid fa-check text-green-500"></i> {feature}
          </li>
        ))}
      </div>
      <button
        onClick={handleProductBtn}
        className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all ease-in-out w-full rounded-full text-white mt-auto border-none"
      >
        {isExist ? "Added to Cart" : "Buy Now"}
      </button>
      <p
        className={`${product.badge === "Best Seller" ? "bg-[#fef3c6] text-[#BB4D00]" : product.badge === "Popular" ? "bg-[#e1e7ff] text-[#662df7]" : "bg-[#dbfce7] text-[#0A883E]"} inline-block absolute top-2 right-2 px-4 py-1 rounded-full text-sm`}
      >
        {product.badge}
      </p>
    </div>
  );
};

export default Product;