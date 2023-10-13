import React from 'react';
import './Register.css';
import Auth from '../Auth/Auth';
import AuthForm from '../AuthForm/AuthForm';
import AuthField from '../AuthField/AuthField';
import useForm from '../../hooks/useForm';

function Register({ header, footer, handleRegister, errorMessage }) {
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.password || !values.email || !values.name) {
      return;
    }
    handleRegister(values);
    resetForm();
  }

  React.useEffect(() => {
    header(false);
    footer(false);
  }, []);

  return (
    <Auth
      authGreeting='Добро пожаловать!'
      text='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
    >
      <AuthForm
        buttonText='Зарегистрироваться'
        handleSubmit={handleSubmit}
        disabled={!isValid}
        errorMessage={errorMessage}
      >
        <AuthField
          id='name'
          name='name'
          label='Имя'
          type='text'
          error={errors.name || ''}
          onChange={handleChange}
          required
          minLength='4'
          maxLength='25'
        />
        <AuthField
          id='email'
          name='email'
          label='E-mail'
          type='email'
          error={errors.email || ''}
          onChange={handleChange}
          required
        />
        <AuthField
          id='password'
          name='password'
          label='Пароль'
          type='password'
          error={errors.password || ''}
          onChange={handleChange}
          required
          minLength='4'
          maxLength='25'
        />
      </AuthForm>
    </Auth>
  );
}

export default Register;
