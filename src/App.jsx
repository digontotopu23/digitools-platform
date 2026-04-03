import './App.css'
 
import NavBar from './component/NavBar';
import Banner from './component/Banner';

import { useState } from 'react'

function App() {
  const [cartItem, setCount] = useState(0)

  return (
    <>
      <NavBar cartItem={cartItem}/>
      <Banner/>
      
       
    </>
  )
}

export default App
