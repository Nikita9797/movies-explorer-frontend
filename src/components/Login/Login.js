import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';
import AuthForm from '../AuthForm/AuthForm';
import AuthField from '../AuthField/AuthField';
import useForm from '../../hooks/useForm';

function Login({ header, footer, handleLogin, errorMessage }) {
  const { values, handleChange, errors, isValid } = useForm();

  React.useEffect(() => {
    header(false);
    footer(false);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!values.password || !values.email) {
      return;
    }
    handleLogin(values);
  }

  return (
    <Auth
      authGreeting='Рады видеть!'
      text='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    >
      <AuthForm
        buttonText='Войти'
        handleSubmit={handleSubmit}
        disabled={!isValid}
        errorMessage={errorMessage}
      >
        <AuthField
          id='email'
          name='email'
          label='E-mail'
          type='email'
          pattern='^\S+@\S+\.\S+$'
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

export default Login;
