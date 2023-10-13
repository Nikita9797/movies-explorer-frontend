import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
  handleCheckboxFilter,
  checkboxFilter,
  setCheckboxFilter,
  setCheckboxFilterSavedMovie,
}) {
  React.useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem('checkboxFilter'));
    const initialStateSavedMovie = JSON.parse(
      localStorage.getItem('checkboxFilterSavedMovie')
    );
    setCheckboxFilter(initialState);
    setCheckboxFilterSavedMovie(initialStateSavedMovie);
  }, []);

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label' onClick={handleCheckboxFilter}>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='checkbox'
          onChange={() => {}}
          checked={checkboxFilter}
        ></input>
        <span className='filter-checkbox__custom'>
          <span className='filter-checkbox__custom-button'></span>
        </span>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
