import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { useLocation } from 'react-router-dom';

function Header({ loggedIn, onPopupMenu }) {
  const location = useLocation();
  const headerThemeLight = location.pathname !== '/';

  return (
    <header
      className={headerThemeLight ? 'header header_theme_light' : 'header'}
    >
      <div className='header__flex'>
        <Logo />
        <Navigation
          loggedIn={loggedIn}
          onPopupMenu={onPopupMenu}
          headerThemeLight={headerThemeLight}
        />
      </div>
    </header>
  );
}

export default Header;
