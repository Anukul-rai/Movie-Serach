import React from 'react'


function Navbar() {
  return (
    <div className="relative bg-[#1e1e1e] py-4">
      <nav className="flex items-center px-6">
        <img
          src="/POWER.png"
          alt="logo"
          className="h-14 w-auto border border-white p-1 rounded-md"
        />
        <h1 className="absolute left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl text-center">
          Power Movie Search
        </h1>
      </nav>
    </div>


  )
}

export default Navbar
