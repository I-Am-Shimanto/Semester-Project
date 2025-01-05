import React from 'react'
import Navbar from '../Home/Components/Navbar'
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";






const Contact = () => {
  return (
    <>
      <Navbar />
      <section className='mt-[75px]'>
        <div className="container">
          <h2 className='text-center text-[40px] font-bold font-poppins text-brand-color mb-[10px]'>Contact Us</h2>
          <p className='text-center text-lg font-medium font-poppins text-[#717171] mb-[50px]'>Any question or remarks? Just write us a message!</p>

          <div className="row flex gap-[50px] w-[1196px] h-[667px] bg-[#ffffff] mb-[50px] mx-auto p-[10px] border-[5px] border-black border-opacity-[5%] rounded-xl">
            <div className="card w-[491px] h-[640px] bg-black rounded-[10px] p-10 hover:scale-[1.01] duration-[0.3s]">
              <div className='heading'>
                <h3 className='text-[28px] font-semibold font-poppins text-white mb-[6px]'>Contact Information</h3>
                <p className='text-lg font-poppins font-normal text-[#C9C9C9]'>Say something to start a live chat!</p>
                <div className='mt-[111px] flex gap-[25px]'>
                    <BiSolidPhoneCall className='text-white text-2xl cursor-pointer'/>
                    <p className='text-base font-normal font-poppins text-white'>+880 1750-658101</p>
                </div>
                <div className='mt-[50px] flex gap-[25px]'>
                  <IoMailOutline className='text-white text-2xl cursor-pointer' />
                  <p className='text-base font-normal font-poppins text-white'>shimanto925pabna@gmail.com</p>
                </div>
                <div className='mt-[50px] flex gap-[25px]'>
                  <FaLocationDot className='text-white text-2xl cursor-pointer'/>
                  <p className='w-[240px] text-base font-normal font-poppins text-white'>Road No 1 , Sector 10 , Uttara , Dhaka , Bangladesh</p>
                </div>
                <div className='mt-[130px] flex gap-6'>
                  <IoLogoTwitter className='text-[30px] text-white hover:scale-[1.1] duration-[0.3s] cursor-pointer'/>
                  <FaInstagramSquare className='text-[30px] text-white hover:scale-[1.1] duration-[0.3s] cursor-pointer'/>
                  <FaFacebook className='text-[30px] text-white hover:scale-[1.1] duration-[0.3s] cursor-pointer'/>
                </div>
              </div>
            </div>
            <form className='mt-[50px]'>
              <div className='flex gap-10'>
                 <div>
                <p className='text-[12px] font-poppins font-medium text-[#8D8D8D]'>First Name</p>
                <input className='w-[278px] mt-3 pb-[11px] outline-none border-b-[1px] border-[#8D8D8D]' type="text"/>
                </div>
                 <div>
                <p className='text-[12px] font-poppins font-medium text-[#000000]'>First Name</p>
                <input className='w-[278px] mt-3 pb-[11px] outline-none border-b-[1px] border-[#8D8D8D]' type="text"/>
              </div>
              </div>
              <div className='flex gap-10 mt-[45px]'>
                 <div>
                <p className='text-[12px] font-poppins font-medium text-[#8D8D8D]'>Email</p>
                <input className='w-[278px] mt-3 pb-[11px] outline-none border-b-[1px] border-[#8D8D8D]' type="email"/>
                </div>
                 <div>
                <p className='text-[12px] font-poppins font-medium text-[#000000]'>Phone Number</p>
                <input className='w-[278px] mt-3 pb-[11px] outline-none border-b-[1px] border-[#8D8D8D]' type="number"/>
              </div>
              </div>
                <p className='text-[12px] font-medium font-poppins text-[#8D8D8D] mt-[60px]'>Message</p>
                <input className='mt-[6px] pb-[11px] text-sm font-poppins font-medium text-[#8D8D8D] outline-none border-b-[1px] border-[#8D8D8D] w-[595px]' type="text" placeholder='Write your message..'/>
              <button className='mt-[50px] ml-[381px] w-[214px] h-[54px] text-center leading-[54px] bg-black text-base font-poppins font-medium text-white rounded-[5px] hover:bg-pink-400 hover:text-black hover:scale-[1.05] duration-[0.3s]' type="submit">
                Send Message
                </button>
              </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact