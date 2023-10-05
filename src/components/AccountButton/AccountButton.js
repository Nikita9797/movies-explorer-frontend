import React from 'react';
import './AccountButton.css';
import { Link } from 'react-router-dom';

function AccountButton({ theme, displayNone, onClosePopup }) {
  return (
    <Link
      to='/profile'
      onClick={onClosePopup}
      className={`account-button ${displayNone && 'account-button_header'}`}
    >
      <button
        className={`button ${theme && 'button_theme_light'}`}
        type='button'
      >
        <p className='button-text'>Аккаунт</p>
        <div className='button-icon'></div>
      </button>
    </Link>
  );
}

export default AccountButton;
