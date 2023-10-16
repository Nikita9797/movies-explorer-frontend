import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({
  header,
  footer,
  isLoading,
  onSubmit,
  movies,
  isServerError,
  isNotFoundMovies,
  addNewMovie,
  findMovies,
  isSavedMovies,
  handleDeleteMovie,
  setIsNotFoundMovies,
}) {
  React.useEffect(() => {
    header(true);
    footer(true);
    if (movies.length) {
      setIsNotFoundMovies(false);
    }
    if (!JSON.parse(localStorage.getItem('allMovies'))) {
      setIsNotFoundMovies(false);
    }
  }, []);

  return (
    <main className='movies'>
      <SearchForm onSubmit={onSubmit} findMovies={findMovies} />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={movies}
          isServerError={isServerError}
          isNotFoundMessage={isNotFoundMovies}
          addNewMovie={addNewMovie}
          isSavedMovies={isSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
    </main>
  );
}

export default Movies;
