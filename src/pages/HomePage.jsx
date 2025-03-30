import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import { getPopularMovies } from '../movieServis';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await getPopularMovies(page);
        setMovies(prevMovies =>
          page === 1 ? data.results : [...prevMovies, ...data.results]
        );
        setTotalPages(data.total_pages);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getMovies();
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <section style={{ paddingTop: '175px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          paddingTop: '5px',
          paddingBottom: '25px',
        }}
      >
        <div
          style={{
            position: 'fixed',
            top: '50px',
            width: '100%',
            backgroundImage: 'url(/src/image/fon-movies.jpg)',
            // backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        >
          <h1
            style={{
              fontSize: '90px',
              fontFamily: 'Impact, Arial, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '8px',
              backgroundImage: 'url(/src/image/w5.jpg)',
              backgroundClip: 'text',
              color: 'transparent',
              // backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              textShadow: '0 0 50px rgba(255, 250, 250, 0.195)',
            }}
          >
            Popular Movies
          </h1>
        </div>

        {isLoading && <b>Loading movies...</b>}
        {error && <b>Whoops there was an error, plz reload the page...</b>}
        {movies.length > 0 && (
          <div>
            <MovieList movies={movies} />
            {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
          </div>
        )}
      </div>
    </section>
  );
}

export default HomePage;
