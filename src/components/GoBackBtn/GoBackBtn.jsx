import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import css from './GoBackBtn.module.css';

const GoBackBtn = () => {
  const location = useLocation();
  const backLink = useRef(location.state);

  return (
    <>
      <Link className={css.link} to={backLink.current || '/movies'}>
        Go Back
      </Link>
    </>
  );
};

export default GoBackBtn;
