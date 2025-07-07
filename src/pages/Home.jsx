import { useState,useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import { fetchApi } from '../services/api'


function Home() {
    const [search,setSearch] = useState('')
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        const data = await fetchApi()
        setMovies(data)
        setFilteredMovies(data)
        };
    fetchData()
    }, [])
    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().startsWith(search.toLowerCase())
        )
        setFilteredMovies(filtered)
        setSearch('')

    };
    return (
        <div className='bg-gradient-to-br from-cyan-900 to-yellow-600 min-h-screen'>
        <SearchBar 
        search={search}
        setSearch={setSearch} 
        onSearch={handleSearch}/>
        <MovieCard 
        movies={filteredMovies}/>
        </div>
    )
}

export default Home


