import React from 'react'

function AutoCompleteAdd() {
  return (
    <div className='mt-5' >
      <div>
        <label className="text-gray-400">Where From?</label>
        <input type="text" className='bg-white p-1 w-full border-[1px] border-gray-400 rounded-md outline-none focus:border-gray-800'/>
      </div>
      <div className='mt-3'>
        <label className="text-gray-400">Destination?</label>
        <input type="text" className='bg-white p-1 w-full border-[1px] border-gray-400 rounded-md outline-none focus:border-gray-800'/>
      </div>
    </div>
  )
}

export default AutoCompleteAdd
