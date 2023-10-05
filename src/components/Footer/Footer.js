import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className='footer__flex-row'>
        <p className='footer__copyright'>{`© ${new Date().getFullYear()}`}</p>
        <div className='footer__links'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru'
            target='blank'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/Nikita9797'
            target='blank'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
