import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useWindowSize } from '../../hooks/useWindowSize';
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  movies,
  isServerError,
  isNotFoundMovies,
  isNotFoundMessage,
  addNewMovie,
  isSavedMovies,
  handleDeleteMovie,
}) {
  const [width] = useWindowSize();
  const [initialMovies, setInitialMovies] = React.useState(null);
  const [moreInitialMovies, setMoreInitialMovies] = React.useState(null);
  const location = useLocation();

  React.useEffect(() => {
    if (width >= 769) {
      setInitialMovies(16);
      setMoreInitialMovies(4);
    }
    if (width < 769 && width > 540) {
      setInitialMovies(8);
      setMoreInitialMovies(2);
    }
    if (width <= 540) {
      setInitialMovies(5);
      setMoreInitialMovies(2);
    }
  }, [width]);

  function handleButtonClick() {
    setInitialMovies(initialMovies + moreInitialMovies);
  }

  return (
    <>
      {isServerError && (
        <p className='movies__message'>
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      {location.pathname === '/movies'
        ? isNotFoundMessage && (
            <p className='movies__message'>Ничего не найдено</p>
          )
        : isNotFoundMovies && (
            <p className='movies__message'>Ничего не найдено</p>
          )}
      <ul className='movies-card-list'>
        {movies &&
          movies.slice(0, initialMovies).map((item, i) => (
            <li key={i} className='movies-card-list__option'>
              <MoviesCard
                movie={item}
                id={item.id}
                image={
                  location.pathname === '/movies'
                    ? `https://api.nomoreparties.co${item.image.url}`
                    : item.image
                }
                title={item.nameRU}
                time={`${Math.trunc(item.duration / 60)}ч${
                  item.duration % 60
                }м`}
                addNewMovie={addNewMovie}
                isSavedMovies={isSavedMovies}
                handleDeleteMovie={handleDeleteMovie}
              />
            </li>
          ))}
      </ul>
      {movies.length > initialMovies && (
        <div className='movies-cards'>
          <button
            className='movies-cards__button'
            type='button'
            onClick={handleButtonClick}
          >
            Ещё
          </button>
        </div>
      )}
    </>
  );
}

export default MoviesCardList;
