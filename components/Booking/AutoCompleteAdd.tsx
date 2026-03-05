"use client";
import React, { useEffect, useState, useCallback } from 'react';

function AutoCompleteAdd() {

  const [sourceQuery, setSourceQuery] = useState('');
  const [sourceList, setSourceList] = useState<string[]>([]);
  
  const [destQuery, setDestQuery] = useState('');
  const [destList, setDestList] = useState<string[]>([]);


  const getAddresses = useCallback(async (q: string, setList: (data: string[]) => void) => {
    if (q.length <= 2) {
      setList([]);
      return;
    }

    try {
      const response = await fetch(`/api/search-address?q=${encodeURIComponent(q)}`);
      const result = await response.json();
      
      if (Array.isArray(result)) {
        const formatted = result.map((item: any) => 
          Object.values(item.address)
            .filter(val => typeof val === 'string')
            .join(', ')
        );
        setList(formatted);
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setList([]);
    }
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => getAddresses(sourceQuery, setSourceList), 300);
    return () => clearTimeout(timer);
  }, [sourceQuery, getAddresses]);


  useEffect(() => {
    const timer = setTimeout(() => getAddresses(destQuery, setDestList), 300);
    return () => clearTimeout(timer);
  }, [destQuery, getAddresses]);


  const RenderList = ({ list, setter, querySetter }: any) => (
    list.length > 0 && (
      <div className="absolute w-full bg-white shadow-lg border rounded-md z-10 max-h-60 overflow-y-auto">
        {list.map((item: string, index: number) => (
          <div
            key={index}
            className="p-3 hover:bg-blue-50 cursor-pointer border-b last:border-none text-sm"
            onClick={() => {
              querySetter(item);
              setter([]); 
            }}
          >
            {item}
          </div>
        ))}
      </div>
    )
  );

  return (
    <div className='mt-5 space-y-6 max-w-md mx-auto'>
      <div className='relative'>
        <label className="text-sm font-medium text-gray-500">Where From?</label>
        <input
          type="text"
          className='bg-white p-2 w-full border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 mt-1'
          value={sourceQuery}
          onChange={(e) => setSourceQuery(e.target.value)}
          placeholder="Search pickup..."
        />
        <RenderList list={sourceList} setter={setSourceList} querySetter={setSourceQuery} />
      </div>
      <div className='relative'>
        <label className="text-sm font-medium text-gray-500">Where To?</label>
        <input
          type="text"
          className='bg-white p-2 w-full border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 mt-1'
          value={destQuery}
          onChange={(e) => setDestQuery(e.target.value)} 
          placeholder="Search destination..."
        />
        <RenderList list={destList} setter={setDestList} querySetter={setDestQuery} />
      </div>
    </div>
  );
}

export default AutoCompleteAdd;