import React from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ header, footer, isLoading }) {
  React.useEffect(() => {
    header(true);
    footer(true);
  }, []);

  return (
    <main className='movies'>
      <SearchForm />
      {isLoading ? <Preloader /> : <MoviesCardList />}
    </main>
  );
}

export default Movies;
