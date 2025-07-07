import React, { useEffect, useState } from 'react';
import { fetchApi } from '../services/api';
import { Link } from 'react-router-dom';

function MovieCard({movies}) {
  return (
    <div className="flex flex-wrap justify-center gap-9 p-4">
      {movies.map((movie, i) => (
        <Link to={`/movie/${movie.id}`} key={movie.id || i}>
          <div className="w-64 bg-black/40 rounded-lg shadow-md p-3 flex flex-col items-center hover:scale-105 transition duration-300">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
              className="w-full object-cover rounded border border-white/70 mb-3"
            />
            <div className="flex flex-col gap-3 mt-2">
              <h1 className="font-bold text-xl text-center text-white/80">
                {movie.title}
              </h1>
              <p className="text-sm text-center text-white/60">
                <span className="text-md font-semibold">Release Date: </span>
                {movie.release_date}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieCard;
