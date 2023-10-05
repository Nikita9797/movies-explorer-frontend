import React from 'react';
import './PopupMenu.css';
import closeButton from '../../images/close-button.svg';
import { NavLink } from 'react-router-dom';
import AccountButton from '../AccountButton/AccountButton';

function PopupMenu({ isOpen, onClosePopup }) {
  const isActive = ({ isActive }) =>
    isActive ? 'popup__option_active' : 'popup__option';

  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className='popup__content'>
        <button
          className='popup__close-button'
          type='button'
          onClick={onClosePopup}
        >
          <img
            className='popup__close-icon'
            src={closeButton}
            alt='Иконка для закрытия попапа'
          />
        </button>
        <ul className='popup__list'>
          <li className='popup__list-option'>
            <NavLink to='/' className={isActive} onClick={onClosePopup}>
              Главная
            </NavLink>
          </li>
          <li className='popup__list-option'>
            <NavLink to='/movies' className={isActive} onClick={onClosePopup}>
              Фильмы
            </NavLink>
          </li>
          <li className='popup__list-option'>
            <NavLink
              to='/saved-movies'
              className={isActive}
              onClick={onClosePopup}
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <AccountButton theme={true} onClosePopup={onClosePopup} />
      </div>
    </div>
  );
}

export default PopupMenu;
