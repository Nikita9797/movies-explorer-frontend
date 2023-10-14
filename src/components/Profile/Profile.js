import React from 'react';
import { useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';
import { mainApi } from '../../utils/MainApi';

function Profile({ header, footer, signOut }) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm, setValues } =
    useForm();
  const [doneMessage, setDoneMessage] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    header(true);
    footer(false);
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();
    setDoneMessage('');
    setErrorMessage('');
    mainApi
      .setUserInfo(values.name || currentUser.name, values.email || currentUser.email)
      .then((res) => {
        setValues(res);
        setDoneMessage('Данные обновлены');
      })
      .catch((err) => {
        if ((err = '409')) {
          return setErrorMessage('Данный email уже занят');
        } else {
          return setErrorMessage('Ошибка сервера');
        }
      });
    resetForm();
  }

  return (
    <section className='profile'>
      <h2 className='profile__greeting'>
        Привет, {currentUser && currentUser.name}!
      </h2>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__field'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            type='text'
            name='name'
            defaultValue={currentUser && currentUser.name}
            onChange={handleChange}
            required
            minLength='4'
            maxLength='25'
            id='name'
          ></input>
          <span className='profile__error-text'>{errors.name || ''}</span>
        </div>
        <div className='profile__line'></div>
        <div className='profile__field'>
          <label className='profile__label'>E-mail</label>
          <input
            className='profile__input'
            name='email'
            defaultValue={currentUser && currentUser.email}
            type='email'
            onChange={handleChange}
            required
            id='email'
          ></input>
          <span className='profile__error-text'>{errors.email || ''}</span>
        </div>
        <p
          className={`${
            errorMessage
              ? 'profile__message profile__message_error'
              : 'profile__message'
          }`}
        >
          {doneMessage || errorMessage}
        </p>
        <button
          className='profile__button-edit'
          type='submit'
          disabled={!isValid}
        >
          Редактировать
        </button>
      </form>
      <button
        className='profile__button-signout'
        type='button'
        onClick={signOut}
      >
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
