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

export const getPopularMovies = async () => {
  const response = await fetchApi.get('/movie/popular');
  return response.data.results;
};
getPopularMovies().then(movies => console.log(movies));

export const searchMovies = async query => {
  const response = await fetchApi.get('/search/movie', { params: { query } });
  return response.data.results;
};
// export const searchMovies = async (query, page = 1) => {
//   const response = await fetchApi.get('/search/movie', {
//     params: { query, page },
//   });
//   return response.data;
// };
// searchMovies('Inception').then(movies => console.log(movies));

export const getMovieDetails = async movieId => {
  const response = await fetchApi.get(`/movie/${movieId}`);
  return response.data;
};
