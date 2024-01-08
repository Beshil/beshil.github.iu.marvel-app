import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {
  return (
    <header className='app__header'>
      <h1 className='app__title'>
        <Link to='/marvel-app'>
          <span>Marvel</span> information portal
        </Link>
      </h1>
      <nav className='app__menu'>
        <ul>
          <li>
            <NavLink
              exact
              to='/marvel-app'
              style={(isActive) => ({ color: isActive ? 'red' : 'inherit' })}
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              to='/comics'
              style={(isActive) => ({ color: isActive ? 'red' : 'inherit' })}
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
