import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({
  image,
  title,
  time,
  id,
  addNewMovie,
  isSavedMovies,
  movie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const isSavedMoviesLocation = '/saved-movies' === location.pathname;

  function handleMovieLick() {
    addNewMovie(id);
  }

  return (
    <div className='movies-card'>
      <img className='movies-card__image' src={image} alt='Обложка фильма' />
      <div className='movies-card__flex-row'>
        <p className='movies-card__title'>{title}</p>
        <label className='movies-card__label'>
          {isSavedMoviesLocation ? (
            <input
              className='movies-card__input_delet'
              type='checkbox'
              onChange={() => handleDeleteMovie(movie)}
              checked={false}
            ></input>
          ) : isSavedMovies(movie) ? (
            <input
              className='movies-card__input'
              type='checkbox'
              checked={true}
              onChange={() => handleDeleteMovie(movie)}
            ></input>
          ) : (
            <input
              className='movies-card__input'
              type='checkbox'
              onChange={handleMovieLick}
              checked={false}
            ></input>
          )}
          <span
            className={
              isSavedMoviesLocation
                ? 'movies-card__custom-checkbox movies-card__custom-checkbox_delet'
                : 'movies-card__custom-checkbox'
            }
          ></span>
        </label>
      </div>
      <p className='movies-card__time'>{time}</p>
    </div>
  );
}

export default MoviesCard;
