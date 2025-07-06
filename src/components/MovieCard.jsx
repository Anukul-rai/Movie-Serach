import React from 'react'

function MovieCard() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <img src="/POWER.png" alt="image" className='h-40 m-3 p-2' />
      <h1 className='font-semibold'>Title of the Movie</h1>
    </div>
  )
}

export default MovieCard
