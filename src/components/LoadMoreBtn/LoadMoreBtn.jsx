function LoadMoreBtn({ onClick }) {
  return (
    <div className="loadMoreContainer">
      <button onClick={onClick} className="loadMoreButton">
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
