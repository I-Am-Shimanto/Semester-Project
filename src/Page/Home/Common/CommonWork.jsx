import React from 'react'

const CommonWork = ({img , name , text}) => {
  return (
    <>
      <div className='w-[394.67px]'>
        <div className="img">
          {img}
        </div>
        <h2 className='text-xl font-semibold font-epilogue text-brand-color leading-[30px] mt-[24px] mb-2'>{name}</h2>
        <p className='text-[17px] font-normal font-epilogue text-brand-color leading-[27px]'>{text}</p>
      </div>
    </>
  )
}

export default CommonWork