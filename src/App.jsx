import { ToastContainer } from 'react-toastify';
import './App.css';

import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Achievements from './component/Achievements';

import HowItWorks from './component/HowItWorks';
import Pricing from './component/Pricing';
import CTA from './component/CTA';
import Footer from './component/Footer';
import Products from './component/Products';
import { useState, Suspense } from 'react';

const pricingData = async () => {
  const res = await fetch("PricingData.json");
  return res.json();
};
const pricingPromise = pricingData();

const productsData = async () => {
  const res = await fetch("/Products.json");
  return res.json();
};
const productsPromise = productsData();

function App() {
  const [cartItem, setCartItem] = useState([])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar cartItem={cartItem} />
      <Banner />
      <Achievements />
      <Suspense fallback={<div>Loading Products...</div>}>
        <Products productsPromise={productsPromise} setCartItem={setCartItem} cartItem={cartItem} />
      </Suspense>

      <HowItWorks />
      <Suspense fallback={<div>Loading Pricing...</div>}>
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
      <CTA />
      <Footer />

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
