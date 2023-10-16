import React from 'react';
import { useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import useForm from '../../hooks/useForm';

function Profile({
  header,
  footer,
  signOut,
  handleUpdateProfile,
  doneProfileMessage,
  errorProfileMessage,
  setDoneProfileMessage,
  setErrorProfileMessage,
  userNameByConflictError,
}) {
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, resetForm } = useForm();

  function isNotChanged() {
    setDoneProfileMessage('');
    setErrorProfileMessage('');
    if (
      currentUser.name ===
        (values.name || userNameByConflictError || currentUser.name) &&
      currentUser.email === (values.email || currentUser.email)
    ) {
      resetForm();
    }
  }

  React.useEffect(() => {
    header(true);
    footer(false);
  }, []);

  React.useEffect(() => {
    isNotChanged();
  }, [values.name, values.email]);

  function handleSubmit(evt) {
    evt.preventDefault();
    handleUpdateProfile(values);
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
            pattern='^\S+@\S+\.\S+$'
          ></input>
          <span className='profile__error-text'>{errors.email || ''}</span>
        </div>
        <p
          className={`${
            errorProfileMessage
              ? 'profile__message profile__message_error'
              : 'profile__message'
          }`}
        >
          {doneProfileMessage || errorProfileMessage}
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
