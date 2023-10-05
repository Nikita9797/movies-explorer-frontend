import React from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useLocation } from 'react-router-dom';

function SavedMovies({ header, footer }) {
  const location = useLocation();
  const isSavedMoviesLocation = '/saved-movies' === location.pathname;

  React.useEffect(() => {
    header(true);
    footer(true);
  }, []);

  return (
    <main className='saved-movies'>
      <SearchForm />
      <MoviesCardList isSavedMoviesLocation={isSavedMoviesLocation} />
    </main>
  );
}

export default SavedMovies;
