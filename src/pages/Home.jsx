import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

function Home() {
    return (
        <div className='bg-[#Bfc0c0] min-h-screen'>
        <SearchBar/>
        <MovieCard/>
        </div>
    )
}

export default Home
