import React from 'react'

function MovieCard() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='border mt-5 px-2'>
      <img src="/POWER.png" alt="image" className='h-40 m-3 border border-yellow-700' />
      <h1 className='font-semibold text-xl text-center'>Title of the Movie</h1>
      <p className=' text-md text-center'>Movie Year</p>
      </div>
      
    </div>
  )
}

export default MovieCard
