import React, { useState } from 'react';
import { IoSearchCircleOutline } from "react-icons/io5";
import MovieCard from '../components/MovieCard'


function SearchBar() {
  const[search,setSearch]=useState('')

  const handleCLick = (e)=>{
    e.preventDefault()

    setSearch('')
  }
  return (
    <div className='bg-[#Bfc0c0]'>
    <div className=" flex items-start justify-center">
      <div className="flex mt-6">
        <input 
          type="text" 
          placeholder="Enter Movie Name..."
          className="border border-yellow-600 px-4 py-2 rounded-l-2xl text-sm focus:outline-none"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button 
        className="bg-yellow-600 px-3 flex items-center justify-center rounded-r-2xl cursor-pointer"
        onClick={handleCLick}>
          <IoSearchCircleOutline size={28} className="text-black" />
        </button>
      </div>
    </div>
    </div>

  );
}

export default SearchBar;
