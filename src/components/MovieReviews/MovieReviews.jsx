import { getMovieReviews } from '../../movieServis';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => setReviews(data.results)) // Виправлено: data.results замість data
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h1>Movie Reviews for "Fight Club"</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
            {review.rating && <p>Rating: {review.rating}</p>}
            <a href={review.url} target="_blank" rel="noopener noreferrer">
              Read Full Review
            </a>
            <hr></hr>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieReviews;
