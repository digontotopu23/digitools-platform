import React, { use, useState } from "react";
import Product from "./Product";
import Cart from "./Cart";

const Products = ({ productsPromise, cartItem, setCartItem }) => {
  const products = use(productsPromise);
  const [btnToggle, setBtnToggle] = useState("Products");
  const handleProductsBtn = () => {
    setBtnToggle("Products");
  };
  const handleCartBtn = () => {
    setBtnToggle("Cart");
  };

  return (
    <div className="pt-10 pb-16 md:py-20 lg:py-30 max-w-285 mx-auto px-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-black">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] font-medium md:max-w-[60%] mx-auto">
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
      </div>

      <div className="flex justify-center items-center mt-4">
        <div className="text-center border inline-block rounded-full p-0.5 border-black/20">
          <button
            onClick={handleProductsBtn}
            className={`btn rounded-full ${btnToggle === "Products" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all ease-in-out text-white" : "bg-transparent"} border-none`}
          >
            Products
          </button>
          <button
            onClick={handleCartBtn}
            className={`btn rounded-full ${btnToggle === "Cart" ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all ease-in-out text-white" : "bg-transparent"} border-none`}
          >
            Cart ({cartItem.length})
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {btnToggle === "Products" &&
          products.map((product) => (
            <Product
              key={product.id}
              cartItem={cartItem}
              setCartItem={setCartItem}
              product={product}
            />
          ))}
      </div>
      <div>
        {btnToggle === "Cart" && (
          <Cart setCartItem={setCartItem} cartItem={cartItem} />
        )}
      </div>
    </div>
  );
};

export default Products;