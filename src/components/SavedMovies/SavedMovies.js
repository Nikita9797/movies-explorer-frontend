import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';

function SavedMovies({
  header,
  footer,
  foundSavedMovies,
  findMovies,
  movies,
  isServerError,
  isNotFoundMovies,
  isSavedMovies,
  addNewMovie,
  handleDeleteMovie,
}) {
  const location = useLocation();
  const isSavedMoviesLocation = '/saved-movies' === location.pathname;

  React.useEffect(() => {
    header(true);
    footer(true);
  }, []);

  return (
    <main className='saved-movies'>
      <SearchForm findMovies={findMovies} savedMovies={movies} />
      <MoviesCardList
        isSavedMoviesLocation={isSavedMoviesLocation}
        movies={foundSavedMovies}
        isServerError={isServerError}
        isNotFoundMovies={isNotFoundMovies}
        isSavedMovies={isSavedMovies}
        addNewMovie={addNewMovie}
        handleDeleteMovie={handleDeleteMovie}
      />
    </main>
  );
}

export default SavedMovies;
