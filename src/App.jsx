import React from 'react'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
function App() {
  return (
    <div>
      <Router>
        <Routes path='/' element={<Home/>}>
          <Route path='/' element={<SearchBar/>}/>
          <Route path='/' element={<MovieCard/>}/>
        </Routes>
      
      </Router>
    </div>
  )
}

export default App
