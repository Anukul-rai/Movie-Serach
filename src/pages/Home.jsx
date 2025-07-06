import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'

function Home() {
    return (
        <div>
        <Navbar/>
        <SearchBar/>
        <MovieCard/>
        </div>
    )
}

export default Home
