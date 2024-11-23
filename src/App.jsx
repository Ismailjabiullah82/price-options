import React from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-6xl font-bold'>React Price Options</h1>
      <PriceOptions></PriceOptions>
     
    </>
  )
}

export default App
