import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoReturnDownBack } from "react-icons/io5";


function MovieDetails() {
  const [detail, setDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=c989007193c643c3f55db7014468e3bc`
        );
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
    };
    fetchDetails();
  }, [id]);

  if (!detail) return <p className="text-center text-3xl font-bold mt-20 text-black ">Loading...</p>;

  return (
    <div className="flex flex-col md:flex-row p-6 gap-6 items-center justify-center min-h-screen bg-gradient-to-br from-zinc-900 to-yellow-800 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${detail.poster_path}`}
        alt={detail.title}
        className="rounded-lg shadow-lg w-[300px]"
      />

      <div className="flex flex-col gap-4 max-w-xl">
        <h1 className="text-3xl font-bold">{detail.title}</h1>
        <p className="text-white/80">{detail.overview}</p>
        <p><span className="font-semibold">Release Date:</span> {detail.release_date}</p>
        <p><span className="font-semibold">Rating:</span> {detail.vote_average} ⭐</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4  bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded flex w-[70px]"
        >
        <IoReturnDownBack  size={35}/>
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;
