import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__link-block'>
          <a
            className='portfolio__link'
            href='https://github.com/Nikita9797/how-to-learn.git'
            target='blank'
          >
            <p className='portfolio__link-element'>Статичный сайт</p>
            <p className='portfolio__link-element'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-block'>
          <a
            className='portfolio__link'
            href='https://github.com/Nikita9797/russian-travel.git'
            target='blank'
          >
            <p className='portfolio__link-element'>Адаптивный сайт</p>
            <p className='portfolio__link-element'>↗</p>
          </a>
        </li>
        <li className='portfolio__link-block'>
          <a
            className='portfolio__link'
            href='https://github.com/Nikita9797/react-mesto-api-full-gha.git'
            target='blank'
          >
            <p className='portfolio__link-element'>Одностраничное приложение</p>
            <p className='portfolio__link-element'>↗</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
