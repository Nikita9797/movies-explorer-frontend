import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='search'>
      <form className='search__form'>
        <input className='search__input' placeholder='Фильм'></input>
        <button className='search__button' type='submit'>
          Найти
        </button>
        <div className='search__line'></div>
      </form>
      <div className='search__filter-checkbox-wrap'>
        <FilterCheckbox />
      </div>
    </div>
  );
}

export default SearchForm;
