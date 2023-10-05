import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

function NotFoundPage({ header, footer }) {
  React.useEffect(() => {
    header(false);
    footer(false);
  }, []);

  return (
    <section className='no-found-page'>
      <h2 className='no-found-page__status'>404</h2>
      <h3 className='no-found-page__text'>Страница не найдена</h3>
      <Link to='/' className='no-found-page__link'>
        Назад
      </Link>
    </section>
  );
}

export default NotFoundPage;
