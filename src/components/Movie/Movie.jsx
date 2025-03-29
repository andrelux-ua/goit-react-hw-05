function Movie({ movie: { title, poster_path } }) {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
  return (
    <div
      style={{
        backgroundColor: '#373737',
        borderColor: 'blue',
        borderWidth: '5px',
        borderRadius: '10px',
        boxShadow: ' 2px 2px 50px rgba(0, 0, 255, 0.8)',
      }}
    >
      <div
        style={{
          borderRadius: '10px',
          paddingTop: '10px',
        }}
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={title}
          style={{ width: '320px', height: '500px' }}
        />
      </div>

      <h2>{title}</h2>
    </div>
  );
}

export default Movie;
