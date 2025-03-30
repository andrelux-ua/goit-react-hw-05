import defaultImgs from '../../image/poster.jpg';
import styles from './Movie.module.css';

function Movie({ movie: { title, poster_path, release_date, vote_average } }) {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImgs
          }
          alt={title}
          className={styles.poster}
        />
      </div>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>Release Date: {release_date}</p>
      <p className={styles.text}>vote average: {vote_average}</p>
    </div>
  );
}

export default Movie;
