import React from "react";

const SinglePricingCard = ({ pricingCard }) => {
  return (
    <div
      className={`flex flex-col ${pricingCard.isPopular ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] relative" : "bg-[#f9fafc]"} rounded-lg p-6 shadow border-2 border-[#F2F2F2]`}
    >
      <h2
        className={`text-2xl font-bold ${pricingCard.isPopular ? "text-white" : "text-black"}`}
      >
        {pricingCard.plan}
      </h2>
      <p
        className={`${pricingCard.isPopular ? "text-white" : "text-[#627382]"} mt-2`}
      >
        {pricingCard.description}
      </p>
      <h1
        className={`${pricingCard.isPopular ? "text-white" : "text-[#627382]"} my-6`}
      >
        <span
          className={`text-3xl lg:text-4xl font-bold ${pricingCard.isPopular ? "text-white" : "text-black"}`}
        >
          ${pricingCard.price}
        </span>
        {pricingCard.billing}
      </h1>
      <div className="mb-6">
        {pricingCard.features.map((feature, index) => (
          <li
            key={index}
            className={`list-none mb-2 ${pricingCard.isPopular ? "text-white" : "text-black"}`}
          >
            <i
              className={`fa-solid fa-check ${pricingCard.isPopular ? "text-white" : "text-green-500"}`}
            ></i>{" "}
            {feature}
          </li>
        ))}
      </div>
      <button
        className={`btn rounded-full mt-auto ${pricingCard.isPopular ? "bg-white text-[#792cf8]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all ease-in-out"}  w-full border-none`}
      >
        {pricingCard.buttonText}
      </button>
      <p className="text-[#BB4D00] bg-[#FEF3C6] inline-block px-4 rounded-full py-1 text-sm font-medium absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
        {pricingCard.badge}
      </p>
    </div>
  );
};

export default SinglePricingCard;