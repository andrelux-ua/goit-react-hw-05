import { useEffect, useState } from 'react';
import { getPopularMovies } from '../movieServis';
import MovieList from '../components/MovieList/MovieList';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';
import css from './PagesStyles/Pages.module.css';

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
      <div className={css.wrapper}>
        <div className={css.popular}>
          <h1 className={css.titleHomePage}>Popular Movies</h1>
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
