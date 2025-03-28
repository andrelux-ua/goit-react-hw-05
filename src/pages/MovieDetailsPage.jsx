import { Suspense } from 'react';
import { getMovieDetails } from '../movieServis';

function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  return (
    <div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>{movieData.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
          style={{ width: '200px', height: '300px', borderRadius: '8px' }}
        />
        <p>
          <strong>Tagline:</strong> {movieData.tagline}
        </p>
        <p>
          <strong>Overview:</strong> {movieData.overview}
        </p>
        <p>
          <strong>Release Date:</strong> {movieData.release_date}
        </p>
        <p>
          <strong>Runtime:</strong> {movieData.runtime} minutes
        </p>
        <p>
          <strong>Genres:</strong>{' '}
          {movieData.genres.map(genre => genre.name).join(', ')}
        </p>
        <p>
          <strong>IMDB:</strong>{' '}
          <a
            href={`https://www.imdb.com/title/${movieData.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </p>
        <p>
          <strong>Production Companies:</strong>
        </p>
        <ul>
          {movieData.production_companies.map(company => (
            <li key={company.id}>
              {company.name} ({company.origin_country})
            </li>
          ))}
        </ul>
        <p>
          <strong>Budget:</strong> ${movieData.budget.toLocaleString()}
        </p>
        <p>
          <strong>Revenue:</strong> ${movieData.revenue.toLocaleString()}
        </p>
        <p>
          <strong>Average Rating:</strong> {movieData.vote_average} (
          {movieData.vote_count} votes)
        </p>
        <p>
          <strong>Languages:</strong>{' '}
          {movieData.spoken_languages.map(language => language.name).join(', ')}
        </p>
        <a href={movieData.homepage} target="_blank" rel="noopener noreferrer">
          Official Movie Website
        </a>
      </div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />;
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;

// import React, { useState, useEffect } from 'react';

// // Приклад функції для запиту до API
// export const getMovieDetails = async (movieId) => {
//   const response = await fetchApi.get(`/movie/${movieId}`);
//   return response.data;
// };

// const MovieDetails = ({ movieId }) => {
//   const [movieData, setMovieData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Отримання даних фільму за допомогою getMovieDetails
//     const fetchMovieData = async () => {
//       try {
//         setLoading(true);
//         const data = await getMovieDetails(movieId);
//         setMovieData(data);
//         setLoading(false);
//       } catch (error) {
//         setError('Failed to load movie details');
//         setLoading(false);
//       }
//     };

//     fetchMovieData();
//   }, [movieId]); // Перезапуск при зміні movieId

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   if (!movieData) {
//     return <div>No movie data found.</div>;
//   }

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h1>{movieData.title}</h1>
//       <img
//         src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
//         alt={movieData.title}
//         style={{ width: '200px', height: '300px', borderRadius: '8px' }}
//       />
//       <p><strong>Tagline:</strong> {movieData.tagline}</p>
//       <p><strong>Overview:</strong> {movieData.overview}</p>
//       <p><strong>Release Date:</strong> {movieData.release_date}</p>
//       <p><strong>Runtime:</strong> {movieData.runtime} minutes</p>
//       <p><strong>Genres:</strong> {movieData.genres.map(genre => genre.name).join(', ')}</p>
//       <p><strong>IMDB:</strong> <a href={`https://www.imdb.com/title/${movieData.imdb_id}`} target="_blank" rel="noopener noreferrer">Link</a></p>
//       <p><strong>Production Companies:</strong></p>
//       <ul>
//         {movieData.production_companies.map(company => (
//           <li key={company.id}>
//             {company.name} ({company.origin_country})
//           </li>
//         ))}
//       </ul>
//       <p><strong>Budget:</strong> ${movieData.budget.toLocaleString()}</p>
//       <p><strong>Revenue:</strong> ${movieData.revenue.toLocaleString()}</p>
//       <p><strong>Average Rating:</strong> {movieData.vote_average} ({movieData.vote_count} votes)</p>
//       <p><strong>Languages:</strong> {movieData.spoken_languages.map(language => language.name).join(', ')}</p>
//       <a href={movieData.homepage} target="_blank" rel="noopener noreferrer">Official Movie Website</a>
//     </div>
//   );
// };

// export default MovieDetails;==========================

// import React from 'react';
// import MovieDetails from './MovieDetails';

// const App = () => {
//   const movieId = 550; // Приклад ID фільму

//   return (
//     <div>
//       <h2>Movie Details</h2>
//       <MovieDetails movieId={movieId} />
//     </div>
//   );
// };

// export default App;
