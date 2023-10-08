import React from 'react';
import './AccountButton.css';
import { Link } from 'react-router-dom';

function AccountButton({ theme, displayNone, onClosePopup }) {
  return (
    <Link
      to='/profile'
      onClick={onClosePopup}
      className={
        displayNone ? 'account-button account-button_header' : 'account-button'
      }
    >
      <div className={theme ? 'button button_theme_light' : 'button'}>
        <p className='button__text'>Аккаунт</p>
        <div className='button__icon'></div>
      </div>
    </Link>
  );
}

export default AccountButton;
