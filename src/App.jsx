import './App.css'
 
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Achievements from './component/Achievements';

import HowItWorks from './component/HowItWorks';
import Pricing from './component/Pricing';
import CTA  from './component/CTA';
import Footer from './component/Footer';
import { useState } from 'react'

const pricingData = async () => {
  const res = await fetch("PricingData.json");
  return res.json();
};
const pricingPromise = pricingData();

function App() {
  const [cartItem, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar cartItem={cartItem}/>
      <Banner/>
      <Achievements/>


       <HowItWorks/>
       <Pricing pricingPromise={pricingPromise} />
       <CTA/>        
       <Footer/>
    </div>
  )
}

export default App
