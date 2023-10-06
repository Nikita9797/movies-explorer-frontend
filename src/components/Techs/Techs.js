import React from 'react';
import './Techs.css';

function Techs() {
  return (
    <section className='techs'>
      <div className='techs__container'>
        <h2 className='techs__title'>Технологии</h2>
        <div className='techs__content'>
          <h3 className='techs__subtitle'>7 технологий</h3>
          <p className='techs__text'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
          <ul className='techs__list'>
            <li className='techs__option'>HTML</li>
            <li className='techs__option'>CSS</li>
            <li className='techs__option'>JS</li>
            <li className='techs__option'>React</li>
            <li className='techs__option'>Git</li>
            <li className='techs__option'>Express.js</li>
            <li className='techs__option'>mongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Techs;
