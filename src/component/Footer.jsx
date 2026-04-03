import React from 'react';

const Footer = () => {
    return (
      <div className="bg-[#101727] pt-20 md:pt-24 lg:pt-30 text-white px-4">
        <div className="grid grid-cols-1 text-center md:text-left md:grid-cols-3 lg:grid-cols-5 gap-10 container mx-auto pb-16 md:pb-20 border-b border-[#e5e7eb5d]">
          <div>
            <h1 className="text-3xl font-bold">DigiTools</h1>
            <p className="text-[#aeb2b6] mt-5">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-medium">Product</h2>
            <ul className="space-y-4 mt-5">
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Features</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Pricing</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Templates</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Integrations</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Company</h2>
            <ul className="space-y-4 mt-5">
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">About</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Blog</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Careers</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Press</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Resources</h2>
            <ul className="space-y-4 mt-5">
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Documentation</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Help Center</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Community</a>
              </li>
              <li className="text-[#aeb2b6] hover:text-white transition-all">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-medium">Social Links</h2>
            <ul className="flex gap-4 mt-5 items-center justify-center md:justify-start">
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="https://www.instagram.com/sahriyar294/">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="https://www.facebook.com/salmansahedbd">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="bg-white hover:bg-blue-500 text-black hover:text-white transition-all rounded-full w-10 h-10 flex items-center justify-center">
                <a href="https://www.linkedin.com/in/salman-sahed/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-5 md:py-7.5 flex flex-col text-center md:text-left md:flex-row justify-between container mx-auto">
          <p className="text-[#fafafa49] mb-4 md:mb-0">
            © 2026 Digitools. All rights reserved.
          </p>
          <ul className="text-[#fafafa49] flex gap-6 items-center justify-center md:justify-start">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Footer;