import React from 'react'
import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <div>
        <Navbar/>
        <Outlet/>
        </div>
    )
}

export default Home
