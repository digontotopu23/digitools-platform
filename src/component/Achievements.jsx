import React from 'react';

const Achievements = () => {
    return (
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-6 md:py-10 xl:py-12 mt-10">
        <div className="container mx-auto px-4 flex flex-wrap md:flex-nowrap items-center justify-between">
          <div className="text-center text-white w-full border-r-2 space-y-1 md:space-y-3">
            <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black">
              50K+
            </h1>
            <p className="xl:text-xl 2xl:text-2xl font-medium">Active Users</p>
          </div>
          <div className="text-center text-white w-full border-r-2 space-y-1 md:space-y-3">
            <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black">
              200+
            </h1>
            <p className="xl:text-xl 2xl:text-2xl font-medium">Premium Tools</p>
          </div>
          <div className="text-center text-white w-full space-y-1 md:space-y-3">
            <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-black">
              4.9
            </h1>
            <p className="xl:text-xl 2xl:text-2xl font-medium">Rating</p>
          </div>
        </div>
      </div>
    );
};

export default Achievements;