import React from 'react';
import './Navigation.css';
import { Link, NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';

function Navigation({ loggedIn, onPopupMenu, headerThemeLight }) {
  const className = headerThemeLight
    ? 'navigation__link navigation__link_theme_light'
    : 'navigation__link';
  const isActive = ({ isActive }) =>
    isActive ? `${className} navigation__link_active` : `${className}`;

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
            <span
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></span>
            <span
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></span>
            <span
              className={`navigation__burger-menu-line ${
                headerThemeLight && 'navigation__burger-menu-line_theme_light'
              }`}
            ></span>
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
          <div className='navigation__button-unauthorized'>Войти</div>
        </Link>
      </nav>
    </div>
  );
}

export default Navigation;
