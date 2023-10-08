import React from 'react';
import './AboutProject.css';

function AboutProject() {
  return (
    <section id='about-project' className='about-project'>
      <h2 className='about-project__title'>О проекте</h2>
      <div className='about-project__flex'>
        <div className='about-project__description'>
          <div className='about-project__flex-description-column'>
            <h3 className='about-project__column-title'>
              Дипломный проект включал 5 этапов
            </h3>
            <p className='about-project__column-text'>
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className='about-project__flex-description-column'>
            <h3 className='about-project__column-title'>
              На выполнение диплома ушло 5 недель
            </h3>
            <p className='about-project__column-text'>
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className='about-project__graph'>
          <div className='about-project__backend'>
            <div className='about-project__time about-project__time_done'>
              1 неделя
            </div>
            <p className='about-project__graph-text'>Back-end</p>
          </div>
          <div className='about-project__frontend'>
            <div className='about-project__time'>4 недели</div>
            <p className='about-project__graph-text'>Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
