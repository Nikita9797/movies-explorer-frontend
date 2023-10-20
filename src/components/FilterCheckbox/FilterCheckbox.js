import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({
  handleCheckboxFilter,
  checkboxFilter,
  setCheckboxFilter,
}) {
  React.useEffect(() => {
    const initialState = JSON.parse(localStorage.getItem('checkboxFilter'));
    setCheckboxFilter(initialState);
  }, []);

  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label' onClick={handleCheckboxFilter}>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='checkbox'
          onChange={() => {}}
          checked={checkboxFilter || false}
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
