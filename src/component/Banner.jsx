import React from "react";
import bannerImg from "../assets/images/banner.png";
import icon1 from "../assets/images/Group 5.png";

const Banner = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-0 md:flex-row items-center justify-between container mx-auto my-10 md:my-16 px-4">
      <div className="space-y-2 text-center md:text-left">
        <div className="inline-block">
          <p className="bg-[#e1e7ff] flex items-center gap-2 px-4 py-1 rounded-full">
            <img className="animate-pulse" src={icon1} alt="" />
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium">
              New: AI-Powered Tools Available
            </span>
          </p>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-7xl font-black w-full md:max-w-[75%] leading-11 md:leading-14 xl:leading-16 2xl:leading-24">
          Supercharge Your Digital Workflow
        </h1>
        <p className="w-full md:max-w-[75%] xl:max-w-[50%] leading-8 text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. Explore
          Products
        </p>
        <div className="flex gap-6 mt-8 items-center justify-center md:justify-start">
          <button className="btn rounded-full font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:bg-linear-to-l hover:from-[#4F39F6] hover:to-[#9514FA] transition-all delay-1000 ease-in-out border-none">
            Explore Products
          </button>
          <button className="btn rounded-full border-[#8a20f9] text-[#8a20f9] hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] hover:text-white transition-all ease-in-out duration-500">
            <i className="fa-solid fa-play"></i>
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img className="md:w-full" src={bannerImg} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;