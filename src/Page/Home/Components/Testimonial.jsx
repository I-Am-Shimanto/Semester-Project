import React from 'react'
import CommonTestimonial from '../Common/CommonTestimonial'

const Testimonial = () => {
  return (
    <>
      <section className='mb-[42px]'>
        <div className="container">
          <div className="row">
            <h2 className='py-[42px] text-center text-[32px] font-semibold font-epilogue text-brand-color leading-[42px]'>Testimonial</h2>
            <div className='px-6 flex flex-wrap gap-6'>

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"} />

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"}/>

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"}/>

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"}/>

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"}/>

              <CommonTestimonial head={"This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"} img={<img src="images/Client1.png" alt="client1" />} name={"Gemma Nolen"} brand={"Google"}/>

            </div>
          </div>
        </div>
        </section>
    </>
  )
}

export default Testimonial