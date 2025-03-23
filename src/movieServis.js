import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3';
const API_Token = 'f42cfca1242a367131ba1b97cbe8fef5';

const fetchApi = axios.create({
  baseURL: API_URL,
  params: { api_key: API_Token, language: 'en-US' },
});

export const getPopularMovies = async () => {
  const response = await fetchApi.get('/movie/popular');
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await fetchApi.get('/search/movie', { params: { query } });
  return response.data.results;
};

export const getMovieDetails = async movieId => {
  const response = await fetchApi.get(`/movie/${movieId}`);
  return response.data;
};
