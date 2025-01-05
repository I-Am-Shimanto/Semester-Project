import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row flex-wrap lg:flex justify-between px-5 xl:px-[56px] pt-[42px] pb-[58px]">
            <div className="text w-[240px] sm:w-[400px] md:w-[400px] sm:pl-[100px] md:pl-[120px] lg:pl-0 xl:w-[620px] ml-10">
              <h2 className='mt-4 mb-6 text-xl font-semibold font-epilogue text-brand-color leading-[30px]'>Branding | Web making </h2>
              <h1 className='text-[32px] xl:text-[68px] font-semibold font-epilogue text-brand-color'>Web Designer</h1>
              <p className='w-[240px] sm:w-[400px] xl:w-[500px] mt-4 xl:mt-6 mb-6 xl:mb-12 text-[17px] font-normal font-epilogue text-brand-color leading-[27px] '>This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com</p>
              <div className="btn w-[211px] h-[78px] flex justify-center items-center bg-brand-color text-xl font-semibold font-epilogue text-white leading-[30px] hover:bg-yellow-100 hover:text-brand-color duration-[0.3s] rounded-xl">
                <Link to='/contact'>Contact</Link>
              </div>
            </div>
            <div className="img ">
              <img className='w-[250px] sm:w-[300px] lg:w-[350px] xl:w-[400px] h-[250px] sm:h-[300px] lg:h-[350px] xl:h-[400px] ml-10 mt-10 mr-[40px] sm:ml-[140px] lg:ml-0 rounded-[500px]' src="images/shimanto.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner