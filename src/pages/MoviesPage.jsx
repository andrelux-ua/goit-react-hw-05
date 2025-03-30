import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce';
import { searchMovies } from '../movieServis';
import SearchMovies from '../components/SearchMovies/SearchMovies';
import MovieList from '../components/MovieList/MovieList';
import LoadMoreBtn from '../components/LoadMoreBtn/LoadMoreBtn';

function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const page = parseInt(searchParams.get('page')) || 1;
  const [debouncedQuery] = useDebounce(query, 300);

  const changeSearchMovies = query => {
    const nextParams = new URLSearchParams(searchParams);
    if (query.trim() !== '') {
      nextParams.set('query', query);
    } else {
      nextParams.delete('query');
    }
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!debouncedQuery) {
      setMovies([]);
      setTotalPages(0);
      return;
    }

    async function getMovies() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await searchMovies(debouncedQuery, page);
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
  }, [debouncedQuery, page]);

  const handleLoadMore = () => {
    setSearchParams({ query, page: page + 1 });
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '120px',
        paddingBottom: '25px',
      }}
    >
      <SearchMovies value={query} onSubmit={changeSearchMovies} />
      {isLoading && <b>Loading movies...</b>}
      {error && <b>Whoops, there was an error. Please reload the page...</b>}
      {movies.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingTop: '64px',
          }}
        >
          <MovieList movies={movies} />
          {page < totalPages && <LoadMoreBtn onClick={handleLoadMore} />}
        </div>
      )}
    </div>
  );
}

export default MoviesPage;
