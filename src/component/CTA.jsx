import React from 'react';

const CTA = () => {
    return (
      <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-16 md:py-24 lg:py-30 text-center space-y-3 md:space-y-4 px-4">
        <h1 className="text-3xl lg:text-[40px] text-white font-black">
          Ready to Transform Your Workflow?
        </h1>
        <p className="text-white">
          Join thousands of professionals who are already using Digitools to
          work smarter.Start your free trial today.
        </p>
        <div className="flex items-center justify-center gap-4 mt-6 md:mt-10">
          <button className="btn rounded-full bg-white">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
              Explore Products
            </span>
          </button>
          <button className="btn rounded-full bg-transparent border border-white text-white hover:bg-white hover:text-purple-600">
            View Pricing
          </button>
        </div>
        <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    );
};

export default CTA;