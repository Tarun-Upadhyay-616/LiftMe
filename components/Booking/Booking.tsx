import React from 'react'
import AutoCompleteAdd from './AutoCompleteAdd';
import Car from './Car';

function Booking() {
  return (
    <div className='p-5' >
      <h2 className='text-[20px] font-semibold '>Booking</h2>
      <div className='border p-3 rounded-md mt-3 border-gray-200 shadow-md h-[70vh]'>
        <AutoCompleteAdd/>
        <Car/>
      </div>
    </div>
  )
}

export default Booking
