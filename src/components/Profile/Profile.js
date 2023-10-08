import React from 'react';
import './Profile.css';

function Profile({ header, footer }) {
  React.useEffect(() => {
    header(true);
    footer(false);
  }, []);

  return (
    <section className='profile'>
      <h2 className='profile__greeting'>Привет, Виталий!</h2>
      <form className='profile__form'>
        <div className='profile__field'>
          <label className='profile__label'>Имя</label>
          <input
            className='profile__input'
            type='text'
            name='name'
            defaultValue='Виталий'
          ></input>
        </div>
        <div className='profile__line'></div>
        <div className='profile__field'>
          <label className='profile__label'>E-mail</label>
          <input
            className='profile__input'
            type='text'
            name='name'
            defaultValue='pochta@yandex.ru'
          ></input>
        </div>
      </form>
      <button className='profile__button-edit' type='button'>
        Редактировать
      </button>
      <button className='profile__button-signout' type='button'>
        Выйти из аккаунта
      </button>
    </section>
  );
}

export default Profile;
