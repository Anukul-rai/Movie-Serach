import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

function Home() {
    return (
        <div className='bg-gradient-to-br from-cyan-900 to-yellow-600 min-h-screen'>
        <SearchBar/>
        <MovieCard/>
        </div>
    )
}

export default Home
