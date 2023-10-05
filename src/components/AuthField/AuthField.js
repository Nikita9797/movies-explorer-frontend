import React from 'react';
import './AuthField.css';

function AuthField({ label, type, error, ...props }) {
  return (
    <div className='auth-field'>
      <label className='auth-field__label'>{label}</label>
      <input
        className='auth-field__input'
        type={type}
        {...props}
        defaultValue=''
      ></input>
      <span className='auth-field__error-text'>{error}</span>
    </div>
  );
}

export default AuthField;
