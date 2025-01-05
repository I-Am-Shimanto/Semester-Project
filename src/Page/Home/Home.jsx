import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Design from './Components/Design'
import Works from './Components/Works'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <div className='bg-white'>
      <Navbar />
      <Banner />
      <Design/>
      <Works />
      <Testimonial />
      <Footer/>
    </div>
  )
}

export default Home