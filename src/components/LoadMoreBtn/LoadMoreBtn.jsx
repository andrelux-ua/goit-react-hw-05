import css from './LoadMoreBtn.module.css';

function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ paddingTop: '25px' }}>
      <button onClick={onClick} className={css.button}>
        <span className={css.span}>Load more</span>
      </button>
    </div>
  );
}

export default LoadMoreBtn;
