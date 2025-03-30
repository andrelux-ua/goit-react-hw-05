function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ paddingTop: '25px' }} className="loadMoreContainer">
      <button onClick={onClick} className="loadMoreButton">
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
