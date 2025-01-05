import React from 'react'
import { IoLogoDiscord } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Footer = () => {
  return (
    <>
      <footer className='pt-[42px] pb-[86px]'>
        <div className="container">
          <div className="heading">
            <h2 className='px-6 text-[32px] font-semibold font-epilogue text-brand-color leading-[42px] mb-6'>Lets work together</h2>
            <div className="row px-6 flex justify-between">
              <div className="text">
                <p className='w-[570px] text-[17px] font-normal font-epilogue text-brand-color leading-[27px] mb-[42px]'>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
                <div className="icons flex gap-6">
                  <Link className='text-2xl hover:scale-[1.1] duration-[0.3s]'>
                    <IoLogoDiscord />
                  </Link>
                  <Link className='text-2xl hover:scale-[1.1] duration-[0.3s]'>
                  <IoLogoFacebook />
                  </Link>
                  <Link className='text-2xl hover:scale-[1.1] duration-[0.3s]'>
                  <IoBasketballOutline />
                  </Link>
                  <Link className='text-2xl hover:scale-[1.1] duration-[0.3s]'>
                  <FaInstagram />
                  </Link>
                  <Link className='text-2xl hover:scale-[1.1] duration-[0.3s]'>
                  <FaBehance />
                  </Link>
                </div>
              </div>
              <form>
                <input className='w-[520px] h-[59px] bg-[#F3F3F3] pl-6 text-[17px] font-normal font-epilogue text-brand-color leading-[27px] outline-none' type="text" placeholder='Name'/>
                <input className='w-[520px] h-[59px] bg-[#F3F3F3] pl-6 text-[17px] font-normal font-epilogue text-brand-color leading-[27px] outline-none mt-3 mb-6' type="email" placeholder='Email' />
                <div>
                  <button type='submit' className='w-[199px] px-[64px] py-6 bg-brand-color text-xl font-semibold font-epilogue text-white leading-[30px] rounded-xl hover:bg-pink-500 hover:text-brand-color duration-[0.3s]'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer