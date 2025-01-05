import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="row flex justify-between items-center py-6 px-[42px]">
            <div className="logo">
              <Link to='/'>
                <img className='w-[100px] rounded-[10px]' src="images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="links">
              <ul className='flex gap-6'>
                <li className='text-[17px] font-normal font-epilogue text-brand-color leading-[27px] hover:text-red-400 px-6 py-3 hover:bg-black duration-[0.5s] rounded-[10px]'>
                  <a href="#footer">About</a>
                </li>
                <li className='text-[17px] font-normal font-epilogue text-brand-color leading-[27px] hover:text-red-400 px-6 py-3 hover:bg-black duration-[0.5s] rounded-[10px]'>
                  <a href="#work">Work</a>
                </li>
                <li className='text-[17px] font-normal font-epilogue text-brand-color leading-[27px] hover:text-red-400 px-6 py-3 hover:bg-black duration-[0.5s] rounded-[10px]'>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar