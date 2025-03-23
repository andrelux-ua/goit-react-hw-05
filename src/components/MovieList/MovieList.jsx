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
    <div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          gap: '50px',
        }}
      >
        {movies.map(movie => (
          <div
            key={movie.id}
            style={{
              backgroundColor: '#373737',
              borderRadius: '10px',
              boxShadow: ' 2px 2px 50px rgba(0, 0, 255, 0.8)',
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
