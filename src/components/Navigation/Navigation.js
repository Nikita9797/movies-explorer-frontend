import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';

function Navigation({ loggedIn, onPopupMenu, headerThemeLight }) {
  const className = `navigation__link ${
    headerThemeLight && 'navigation__link_theme_light'
  }`;
  const isActive = ({ isActive }) =>
    isActive ? 'navigation__link_active' : `${className}`;

  return loggedIn ? (
    <>
      <div className='navigation'>
        <nav className='navigation__links'>
          <NavLink to='/movies' className={isActive}>
            Фильмы
          </NavLink>
          <NavLink to='/saved-movies' className={isActive}>
            Сохраненные фильмы
          </NavLink>
          <button className={'navigation__burger-menu'} onClick={onPopupMenu}>
            <div
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></div>
            <div
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></div>
            <div
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></div>
          </button>
        </nav>
      </div>
      <AccountButton theme={headerThemeLight} displayNone={true} />
    </>
  ) : (
    <div className='navigation'>
      <nav className='navigation__links-unauthorized'>
        <Link to='/signup' className='navigation__link-unauthorized'>
          Регистрация
        </Link>
        <Link to='/signin' className='navigation__link-button-unauthorized'>
          <button className='navigation__button-unauthorized' type='button'>
            Войти
          </button>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
