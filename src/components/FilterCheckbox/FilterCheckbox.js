import React from 'react';
import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='filter-checkbox'>
      <label className='filter-checkbox__label'>
        <input
          className='filter-checkbox__input'
          type='checkbox'
          name='checkbox'
        ></input>
        <div className='filter-checkbox__custom'>
          <div className='filter-checkbox__custom-button'></div>
        </div>
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
