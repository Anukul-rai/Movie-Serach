import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="bg-[#1f1a01] border-b-2 py-4 shadow-md fixed w-full top-0 z-20">
      <nav className="flex items-center px-6 max-w-7xl mx-auto justify-around">
          <div className="flex items-center gap-2 ">
            <img
              src="/POWER.png"
              alt="logo"
              className="h-12 w-auto border border-white p-1 mr-50 rounded-md"
            />
          </div>
        <Link to="/">
          <h1 className="text-white font-bold text-xl sm:text-2xl ">
            Power Movie Search
          </h1>
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
