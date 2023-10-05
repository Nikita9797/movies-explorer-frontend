import React from 'react';
import './AuthForm.css';

function AuthForm({ children, buttonText }) {
  return (
    <form className='auth-form'>
      <div className='auth-form__fields'>{children}</div>
      <button className='auth-form__button' type='submit'>
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
