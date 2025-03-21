import { useEffect, useState } from 'react';
import { getPopularMovies } from '../../movieServis';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Popular Movies</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <div key={movie.id} className="p-2 bg-gray-800 rounded-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full rounded-md"
            />
            <h3 className="text-white mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
