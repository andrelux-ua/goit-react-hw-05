import { Link, useLocation } from 'react-router-dom';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        gap: '25px',
      }}
    >
      {movies.map(movie => (
        <li key={movie.id} style={{ width: '350px' }}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>vote average: {movie.vote_average}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;

// import { Link, useLocation } from 'react-router-dom';
// import Movie from '../Movie/Movie';

// function MovieList({ movies }) {
//   const location = useLocation();
//   return (
//     <ul
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         gap: '25px',
//       }}
//     >
//       {movies.map(movie => (
//         <li key={movie.id} style={{ width: '350px' }}>
//           <Link to={`/movies/${movie.id}`} state={location}>
//             <Movie movie={movie} />
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default MovieList;
