import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import image1 from '../../images/image-1.png';
import image2 from '../../images/image-2.png';
import image3 from '../../images/image-3.png';
import image4 from '../../images/image-4.png';

function MoviesCardList() {
  return (
    <>
      <ul className='movies-card-list'>
        <li className='movies-card-list__option'>
          <MoviesCard image={image1} title='33 слова о дизайне' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image2}
            title='Киноальманах «100 лет дизайна»'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image3} title='В погоне за Бенкси' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image4}
            title='Баския: Взрыв реальности'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image1} title='33 слова о дизайне' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image2}
            title='Киноальманах «100 лет дизайна»'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image3} title='В погоне за Бенкси' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image4}
            title='Баския: Взрыв реальности'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image1} title='33 слова о дизайне' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image2}
            title='Киноальманах «100 лет дизайна»'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image3} title='В погоне за Бенкси' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image4}
            title='Баския: Взрыв реальности'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image1} title='33 слова о дизайне' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image2}
            title='Киноальманах «100 лет дизайна»'
            time='1ч42м'
          />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard image={image3} title='В погоне за Бенкси' time='1ч42м' />
        </li>
        <li className='movies-card-list__option'>
          <MoviesCard
            image={image4}
            title='Баския: Взрыв реальности'
            time='1ч42м'
          />
        </li>
      </ul>
      <div className='movies-card-list__flex'>
        <button className='movies-card-list__button' type='button'>
          Ещё
        </button>
      </div>
    </>
  );
}

export default MoviesCardList;
