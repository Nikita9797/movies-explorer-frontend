import React from 'react';
import './Register.css';
import Auth from '../Auth/Auth';
import AuthForm from '../AuthForm/AuthForm';
import AuthField from '../AuthField/AuthField';

function Register({ header, footer }) {
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
      <AuthForm buttonText='Зарегистрироваться'>
        <AuthField id='name' name='name' label='Имя' type='text' error='' />
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
          error='Что-то пошло не так...'
        />
      </AuthForm>
    </Auth>
  );
}

export default Register;
