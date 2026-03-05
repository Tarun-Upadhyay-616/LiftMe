import CarList from '@/app/data/CarList'
import Image from 'next/image'
import React from 'react'

const Car = () => {
  return (
    <div className='mt-3'>
      <h2 className='mb-3'>Select Cars</h2>
      <div className='grid grid-cols-3 '>
        {CarList.map((item,index)=>(
            <div key={index}>
                <Image src={item.image} alt={item.name}
                width={90}
                height={100}
                className='bg-gray-500'
                />
                <h2 className='text-[10px]'>{item.name}</h2>
                <span className='float-right'>Rs. {Math.floor(item.charges*9)}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Car
