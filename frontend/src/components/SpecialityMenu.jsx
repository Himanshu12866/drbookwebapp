/* eslint-disable no-unused-vars */
import React from 'react'

import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center py-16 gap-4 text-gray-800' id='speciality'>
        <h1 className='text-3xl font-medium'>Book Your Appointment</h1>
        <p className='w-1/2 text-black text-sm'>Simply browse through our extensive list of doctors  schedule appointment hassle-free</p>
<div className='flex sm:justify-center w-full gap-4 pt-5 overflow-scroll-hidden'>
    {
specialityData.map( (item , index) => 
<Link onClick={() => scrollTo(0 , 0)}  className='flex flex-col items-center text-xs flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' to={`doctors/${item.speciality}`} key={index}>
    <img className='w-16 sm:w-24 mb-2' src={item.image}></img>
    <p>
        {
            item.speciality
        }
    </p>
</Link>

)
    }
</div>
    </div>
  )
}

export default SpecialityMenu