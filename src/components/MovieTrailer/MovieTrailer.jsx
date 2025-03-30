import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieTrailer } from '../../movieServis';

function MovieTrailer() {
  const { movieId } = useParams();
  const [trailerKey, setTrailerKey] = useState(null);
  console.log(trailerKey);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const trailer = await getMovieTrailer(movieId);
        if (trailer) {
          setTrailerKey(trailer.key);
        } else {
          setError('No trailer found');
        }
      } catch (err) {
        setError('Failed to load trailer');
      } finally {
        setLoading(false);
      }
    };

    fetchTrailer();
  }, [movieId]);

  if (loading) {
    return <div>Loading trailer...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!trailerKey) {
    return <div>No trailer available.</div>;
  }

  return (
    <div style={{ margin: '10px 150px 100px 50px' }}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default MovieTrailer;
