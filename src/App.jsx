import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marques from './components/Marques'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full bg-zinc-900 text-white font-["Satoshi Variable"]'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
    <Marques/>
    <Cards/>
    <Footer/>
    </div>
  )
}

export default App