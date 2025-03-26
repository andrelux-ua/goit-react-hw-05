import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { getPopularMovies } from '../movieServis';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getPopularMovies();
        setMovies(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, []);

  return (
    <section style={{ paddingTop: '75px' }}>
      <div style={{ paddingTop: '10px' }}>
        <h2
          style={{
            color: 'white',
            textAlign: 'center',
            marginTop: '5px',
            fontSize: '40px',
            fontFamily: 'Arial',
          }}
        >
          Popular Movies
        </h2>
        {isLoading && <b>Loading movies...</b>}
        {error && <b>Whoops there was an error, plz reload the page...</b>}
        {movies.length > 0 && (
          <div>
            <MovieList movies={movies} />
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
