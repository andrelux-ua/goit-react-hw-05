import { NavLink } from 'react-router';
import clsx from 'clsx';
import css from './Navigation.module.css';

const getLinkStyles = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function Navigation() {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={getLinkStyles}>
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={getLinkStyles}>
              MoviesPage
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navigation;
