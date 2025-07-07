import React, { useState } from 'react';
import { IoSearchCircleOutline } from "react-icons/io5";
import MovieCard from '../components/MovieCard'


function SearchBar({search , setSearch, onSearch}) {
  return (
    <div className=" flex items-start justify-center">
      <div className="flex mt-28 mb-4">
        <input 
          type="text" 
          placeholder="Enter Movie Name..."
          className="border border-yellow-600 px-4 py-2 rounded-l-2xl text-sm focus:outline-none text-white/70"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button 
        className="bg-yellow-600 px-3 flex items-center justify-center rounded-r-2xl cursor-pointer"
        onClick={onSearch}>
          <IoSearchCircleOutline size={28} className="text-black" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
