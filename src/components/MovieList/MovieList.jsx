import { Link, useLocation } from 'react-router-dom';
import Movie from '../Movie/Movie';

function MovieList({ movies }) {
  const location = useLocation();
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '25px',
      }}
    >
      {movies.map(movie => (
        <li key={movie.id} style={{ width: '350px' }}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <Movie movie={movie} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
