import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_Token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDJjZmNhMTI0MmEzNjcxMzFiYTFiOTdjYmU4ZmVmNSIsIm5iZiI6MTc0MjMwMTY1NC4yOCwic3ViIjoiNjdkOTY5ZDZjNTMzOWVhYmM2MzY2MDZkIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.PbEbOFu_uTP1kuO9q1MYQ4tZCgq2iBTYmjlviT3MdOA';

const fetchApi = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: API_Token,
  },
  params: { language: 'en-US' },
});

export const getPopularMovies = async (page = 1) => {
  try {
    const response = await fetchApi.get('/movie/popular', {
      params: { page },
    });
    return response.data; // Повертаємо весь об'єкт response.data
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

// export const getPopularMovies = async () => {
//   const response = await fetchApi.get('/movie/popular');
//   return response.data.results;
// };
// getPopularMovies().then(movies => console.log(movies));

export const searchMovies = async (query, page = 1) => {
  try {
    const response = await fetchApi.get('/search/movie', {
      params: { query, page },
    });
    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};
searchMovies('Inception')
  .then(data => console.log(data.results))
  .catch(error => console.error('Error in searchMovies:', error));

export const getMovieDetails = async movieId => {
  try {
    const response = await fetchApi.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const getMovieCredits = async movieId => {
  try {
    const response = await fetchApi.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    return [];
  }
};
// getMovieCredits(550).then(cast => console.log(cast));

export const getMovieReviews = async movieId => {
  try {
    const response = await fetchApi.get(`/movie/${movieId}/reviews`);
    return response.data; // Повертаємо response.data, де є results
  } catch (error) {
    console.error('Error fetching movie reviews:', error); //виправлено текст помилки
    return [];
  }
};

// export const getMovieTrailer = async movieId => {
//   try {
//     const response = await fetchApi.get(`/movie/${movieId}/videos`);
//     return response.data.results.find(video => video.type === 'Trailer');
//   } catch (error) {
//     console.error('Error fetching movie trailer:', error);
//     return null;
//   }
// };

export const getMovieTrailer = async movieId => {
  try {
    const response = await fetchApi.get(`/movie/${movieId}/videos`);

    const trailers = response.data.results?.filter(
      video => video.type === 'Trailer'
    );

    if (!trailers || trailers.length === 0) {
      console.warn(`No trailers found for movieId: ${movieId}`);
      return null;
    }

    return trailers[0]; // Повертаємо перший трейлер
  } catch (error) {
    console.error('Error fetching movie trailer:', error);
    return null;
  }
};
