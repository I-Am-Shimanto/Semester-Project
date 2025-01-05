import React from 'react'
import { FaStar } from "react-icons/fa";


const CommonTestimonial = ({head , img , name , brand}) => {
  return (
    <>
      <div className='w-[394.67px] h-[330px] bg-[#F3F3F3] p-[42px]'>
        <h2 className='text-xl font-semibold font-epilogue text-brand-color leading-[30px] mb-[68px]'>{head}</h2>
        <div className='flex gap-4'>
          <div>
            {img}
          </div>
          <div>
            <div className="icons mb-[11px] flex gap-[6px]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <h3 className='text-xl font-semibold font-epilogue text-brand-color leading-[30px]'>{name}</h3>
            <p className='text-[17px] font-normal font-epilogue text-brand-color leading-[27px]'>{brand}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommonTestimonial