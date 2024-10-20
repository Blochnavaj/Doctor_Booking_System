import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

function Banner() {

  const navigated = useNavigate() ;

  const LoginPage = () =>{
   { navigated('/login'); scrollTo(0,0)}
  }
  return (
    <>
       <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
        {/* ----- left side ------- */}
       <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
          <div className='text-xl text-white sm:text-2xl md:text-3xl lg:text-5xl font-bold'>
            <p>Book Appointment </p>
            <p className='mt-4'>With 100+ Trusted Doctors</p>
          </div>
          <button onClick={LoginPage} className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 mt-6 rounded-full hover:scale-105 transition-all'>Create account</button>
       </div>
          {/* -----  Right side ------- */}
          <div className=' hidden  md:block md:w-1/2 lg:w-[342px] relative'>
            <img className='w-full border-0 absolute right-0 mx-w-md' src={assets.appointment_img} alt="" />
        </div>
       </div>
    </>
  )
}

export default Banner