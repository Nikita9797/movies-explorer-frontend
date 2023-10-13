import React from 'react';
import './AuthForm.css';

function AuthForm({
  children,
  buttonText,
  handleSubmit,
  disabled,
  errorMessage,
}) {
  return (
    <form className='auth-form' onSubmit={handleSubmit}>
      <div className='auth-form__fields'>{children}</div>
      <p className='auth-form__error-message'>{errorMessage}</p>
      <button className='auth-form__button' type='submit' disabled={disabled}>
        {buttonText}
      </button>
    </form>
  );
}

export default AuthForm;
