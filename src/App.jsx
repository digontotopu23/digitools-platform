import './App.css'
 
import NavBar from './component/NavBar';
import Banner from './component/Banner';
import Achievements from './component/Achievements';

import Footer from './component/Footer';
import { useState } from 'react'

function App() {
  const [cartItem, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <NavBar cartItem={cartItem}/>
      <Banner/>
      <Achievements/>



       <Footer/>
    </div>
  )
}

export default App
