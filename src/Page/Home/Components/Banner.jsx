import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row flex justify-between px-[56px] pt-[42px] pb-[58px]">
            <div className="text w-[620px]">
              <h2 className='mt-4 mb-6 text-xl font-semibold font-epilogue text-brand-color leading-[30px]'>Branding | Web making </h2>
              <h1 className='text-[68px] font-semibold font-epilogue text-brand-color'>Web Designer</h1>
              <p className='w-[500px] mt-6 mb-12 text-[17px] font-normal font-epilogue text-brand-color leading-[27px] '>This is a template Figma file, turned into code using Anima.
                Learn more at AnimaApp.com</p>
              <div className="btn w-[211px] h-[78px] flex justify-center items-center bg-brand-color text-xl font-semibold font-epilogue text-white leading-[30px] hover:bg-yellow-100 hover:text-brand-color duration-[0.3s] rounded-xl">
                <Link>Contact</Link>
              </div>
            </div>
            <div className="img">
              <img src="images/banner.png" alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner