import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';
import AuthForm from '../AuthForm/AuthForm';
import AuthField from '../AuthField/AuthField';

function Login({ header, footer }) {
  React.useEffect(() => {
    header(false);
    footer(false);
  }, []);

  return (
    <Auth
      authGreeting='Рады видеть!'
      text='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
    >
      <AuthForm buttonText='Войти'>
        <AuthField
          id='email'
          name='email'
          label='E-mail'
          type='email'
          error=''
        />
        <AuthField
          id='password'
          name='password'
          label='Пароль'
          type='password'
          error=''
        />
      </AuthForm>
    </Auth>
  );
}

export default Login;
