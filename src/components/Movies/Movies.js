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
}) {
  React.useEffect(() => {
    header(true);
    footer(true);
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
          isNotFoundMovies={isNotFoundMovies}
          addNewMovie={addNewMovie}
          isSavedMovies={isSavedMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
    </main>
  );
}

export default Movies;
