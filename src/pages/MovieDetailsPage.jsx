import { useState, useEffect, Suspense, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../movieServis';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const backLinkRef = useRef(location.state);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getMovieDetails(movieId);
        setMovieData(data);
      } catch (err) {
        setError('Failed to load movie details');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!movieData) {
    return <div>No movie data found.</div>;
  }

  return (
    <div>
      <div style={{ padding: '75px 25px 0', fontFamily: 'Arial, sans-serif' }}>
        <h1>{movieData.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
          alt={movieData.title}
          style={{
            width: '200px',
            height: '300px',
            borderRadius: '8px',
            marginTop: '50px',
            marginBottom: '25px',
          }}
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
      </div>
      <div style={{ padding: '25px' }}>
        <ul style={{ padding: '25px' }}>
          <li>
            <NavLink to="cast">Movie Cast</NavLink>
          </li>
          <li>
            <NavLink to="trailer">Movie Trailer</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Movie Reviews</NavLink>
          </li>
        </ul>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default MovieDetailsPage;
