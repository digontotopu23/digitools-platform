import React from "react";
import user from "../assets/images/user.png"
import product from "../assets/images/package.png"
import rocket from "../assets/images/rocket.png"

const HowItWorks = () => {
  return (
    <div className="bg-[#f9fafc] py-16 md:py-20 lg:py-28">
      <div className="max-w-285 mx-auto px-4">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-black">
            Get Started in 3 Steps
          </h1>
          <p className="text-[#627382] font-medium">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 xl:gap-10 mt-10">
          <div className="bg-white shadow rounded-lg py-16 md:py-20 text-center space-y-3 md:space-y-4 px-4 relative">
            <img className="mx-auto w-20" src={user} alt="User" />
            <h3 className="text-xl md:text-2xl font-bold">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
            <p className="w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-4 right-4">
              01
            </p>
          </div>

          <div className="bg-white shadow rounded-lg py-16 md:py-20 text-center space-y-3 md:space-y-4 px-4 relative">
            <img className="mx-auto w-20" src={product} alt="Product" />
            <h3 className="text-xl md:text-2xl font-bold">Choose Products</h3>
            <p className="text-[#627382]">
              Browse our catalog and select the toolsthat fit your needs.
            </p>
            <p className="w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-4 right-4">
              02
            </p>
          </div>

          <div className="bg-white shadow rounded-lg py-16 md:py-20 text-center space-y-3 md:space-y-4 px-4 relative">
            <img className="mx-auto w-20" src={rocket} alt="Rocket" />
            <h3 className="text-xl md:text-2xl font-bold">Start Creating</h3>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
            <p className="w-10 h-10 rounded-full flex items-center justify-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white absolute top-4 right-4">
              03
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;