import React, { use } from "react";
import SinglePricingCard from "./SinglePricingCrad";

const Pricing = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
  return (
    <div className="max-w-285 mx-auto my-18 md:my-24 lg:my-30 px-4">
      <div className="text-center space-y-3 md:space-y-4 lg:space-y-5">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-black">
          Simple, Transparent Pricing
        </h1>
        <p className="text-[#627382] font-medium">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5 lg:gap-6 mt-6 md:mt-10">
        {pricingData.map((pricingCard) => (
          <SinglePricingCard key={pricingCard.id} pricingCard={pricingCard} />
        ))}
      </div>
    </div>
  );
};

export default Pricing;