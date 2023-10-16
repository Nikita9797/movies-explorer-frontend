import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

function SearchForm({ onSubmit, findMovies, movies }) {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(true);
  const [keywordMovie, setKeywordMovie] = React.useState('');
  const [keywordSavedMovie, setKeywordSavedMovie] = React.useState('');
  const [checkboxFilter, setCheckboxFilter] = React.useState(false);
  const [checkboxFilterSavedMovie, setCheckboxFilterSavedMovie] =
    React.useState(false);
  const location = useLocation();
  const isMoviesLocation = location.pathname === '/movies';

  React.useEffect(() => {
    setKeywordMovie(localStorage.getItem('keywordMovie'));
  }, []);

  function handleChange(evt) {
    if (isMoviesLocation) {
      setIsFormValid(evt.target.closest('form').checkValidity());
      setKeywordMovie(evt.target.value);
    } else {
      setIsFormValid(evt.target.closest('form').checkValidity());
      setKeywordSavedMovie(evt.target.value);
    }
  }

  function SearchMoviesReq(keyword) {
    if (!keyword) {
      setIsFormValid(false);
    } else if (isFormValid) {
      onSubmit(keyword, checkboxFilter);
    }
    setErrorMessage('Нужно ввести ключевое слово');
  }

  function SearchSavedMoviesReq(keyword) {
    if (!keyword) {
      setIsFormValid(false);
    } else if (isFormValid) {
      findMovies(movies, keyword, checkboxFilterSavedMovie);
    }
    setErrorMessage('Нужно ввести ключевое слово');
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isMoviesLocation) {
      SearchMoviesReq(keywordMovie);
    } else {
      SearchSavedMoviesReq(keywordSavedMovie);
    }
  }

  function handleCheckboxFilter() {
    if (isMoviesLocation) {
      setCheckboxFilter(!JSON.parse(localStorage.getItem('checkboxFilter')));
      localStorage.setItem('checkboxFilter', checkboxFilter);
    } else {
      setCheckboxFilterSavedMovie(
        !JSON.parse(localStorage.getItem('checkboxFilterSavedMovie'))
      );
      localStorage.setItem(
        'checkboxFilterSavedMovie',
        checkboxFilterSavedMovie
      );
    }
    if (location.pathname === '/movies') {
      findMoviesByCheckbox();
    } else {
      findSavedMoviesByCheckbox();
    }
  }

  function findMoviesByCheckbox() {
    if (keywordMovie === localStorage.getItem('keywordMovie')) {
      findMovies(
        JSON.parse(localStorage.getItem('allMovies')),
        keywordMovie,
        JSON.parse(localStorage.getItem('checkboxFilter'))
      );
    }
  }

  function findSavedMoviesByCheckbox() {
    if (keywordSavedMovie === localStorage.getItem('keywordSavedMovie')) {
      findMovies(
        movies,
        keywordSavedMovie || '',
        JSON.parse(localStorage.getItem('checkboxFilterSavedMovie'))
      );
    }
  }

  return (
    <div className='search'>
      <form className='search__form'>
        <input
          className='search__input'
          placeholder='Фильм'
          onChange={handleChange}
          defaultValue={isMoviesLocation ? keywordMovie : keywordSavedMovie}
          required
        ></input>
        <button className='search__button' type='submit' onClick={handleSubmit}>
          Найти
        </button>
        <span className='search__error'>{!isFormValid && errorMessage}</span>
        <div className='search__line'></div>
      </form>
      <div className='search__filter-checkbox-wrap'>
        <FilterCheckbox
          handleCheckboxFilter={handleCheckboxFilter}
          checkboxFilter={
            isMoviesLocation ? checkboxFilter : checkboxFilterSavedMovie
          }
          setCheckboxFilter={setCheckboxFilter}
          setCheckboxFilterSavedMovie={setCheckboxFilterSavedMovie}
        />
      </div>
    </div>
  );
}

export default SearchForm;
