import React from 'react'
import CommonWork from '../Common/CommonWork'

const Works = () => {
  return (
    <>
      <section className='my-[42px] '>
        <div className="container">
          <div className="row">
            <h2 className='my-[42px] text-center text-[32px] font-semibold font-epilogue text-brand-color leading-[42px]'>Latest work</h2>
            <div className='flex flex-wrap gap-6 px-6'>
              <CommonWork img={<img src="images/work1.png" alt='work1'/>} name={"Project title"} text={"UI, Art drection"}/>
              <CommonWork img={<img src="images/work2.png" alt='work2'/>} name={"Project title"} text={"UI, Art drection"}/>
              <CommonWork img={<img src="images/work3.png" alt='work3'/>} name={"Project title"} text={"UI, Art drection"}/>
              <CommonWork img={<img src="images/work4.png" alt='work4'/>} name={"Project title"} text={"UI, Art drection"}/>
              <CommonWork img={<img src="images/work5.png" alt='work5'/>} name={"Project title"} text={"UI, Art drection"}/>
              <CommonWork img={<img src="images/work6.png" alt='work6'/>} name={"Project title"} text={"UI, Art drection"}/>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Works