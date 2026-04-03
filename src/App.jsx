import './App.css'
 
import NavBar from './component/NavBar'

import { useState } from 'react'

function App() {
  const [cartItem, setCount] = useState(0)

  return (
    <>
      <NavBar cartItem={cartItem}/>
       
    </>
  )
}

export default App
