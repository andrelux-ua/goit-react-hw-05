import { getMovieCredits } from '../../movieServis';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then(setCast)
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div style={{ marginLeft: '150px' }}>
      <h1>Cast</h1>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieCast;
