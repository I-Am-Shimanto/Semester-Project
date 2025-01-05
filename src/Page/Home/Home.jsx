import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Brands from './Components/Brands'
import Design from './Components/Design'
import Works from './Components/Works'
import Testimonial from './Components/Testimonial'
import Footer from './Components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Brands />
      <Design/>
      <Works />
      <Testimonial />
      <Footer/>
    </>
  )
}

export default Home