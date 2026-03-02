"use client";
import React, { useEffect, useState } from 'react'

function AutoCompleteAdd() {
  const [query, setQuery] = useState<any>('')
  const [addressList, setAddressList] = useState<any>([])

  useEffect(()=>{
    getAddress();
  },[query]);

  const getAddress = async () => {
    const response = await fetch('/api/search-address?q=' + query, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "LiftMe"
      }
    });
    const result = await response.json();
    setAddressList(result)
  }
  return (
    <div className='mt-5' >
      <div>
        <label className="text-gray-400">Where From?</label>
        <input type="text" className='bg-white p-1 w-full border border-gray-400 rounded-md outline-none focus:border-gray-800' value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {addressList?.suggestions?
        <div>
          {addressList?.suggestions.map((item:any,index:number)=>(
          <h2>{item}</h2>
        ))}
        </div>:null}
      </div>
      <div className='mt-3'>
        <label className="text-gray-400">Destination?</label>
        <input type="text" className='bg-white p-1 w-full border border-gray-400 rounded-md outline-none focus:border-gray-800' />
      </div>
    </div>
  )
}

export default AutoCompleteAdd
