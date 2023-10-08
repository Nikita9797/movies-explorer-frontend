import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='about-me__title'>Студент</h2>
      <div className='about-me__flex'>
        <div className='about-me__column'>
          <h3 className='about-me__name'>Виталий</h3>
          <h4 className='about-me__old'>Фронтенд-разработчик, 30 лет</h4>
          <p className='about-me__text'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            className='about-me__link'
            href='https://github.com/Nikita9797'
            target='blank'
          >
            Github
          </a>
        </div>
        <div className='about-me__block-image'>
          <img className='about-me__image' src={photo} alt='фото'></img>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
