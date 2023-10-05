import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ image, title, time }) {
  const location = useLocation();
  const isSavedMoviesLocation = '/saved-movies' === location.pathname;

  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={image} alt='Обложка фильма' />
      <div className='movies-card__flex-row'>
        <p className='movies-card__title'>{title}</p>
        <label className='movies-card__label'>
          <input className='movies-card__input' type='checkbox'></input>
          <span
            className={
              isSavedMoviesLocation
                ? 'movies-card__custom-checkbox_delet'
                : 'movies-card__custom-checkbox_add'
            }
          ></span>
        </label>
      </div>
      <p className='movies-card__time'>{time}</p>
    </div>
  );
}

export default MoviesCard;
