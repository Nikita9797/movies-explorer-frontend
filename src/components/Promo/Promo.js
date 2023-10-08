import './Promo.css';
import NavTab from '../NavTab/NavTab';
import promoImage from '../../images/planet.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <div className='promo__flex-row'>
          <div className='promo__flex-column'>
            <h1 className='promo__title'>
              Учебный проект студента факультета Веб&#8209;разработки.
            </h1>
            <p className='promo__text'>
              Листайте ниже, чтобы узнать больше про этот проект и его
              создателя.
            </p>
          </div>
          <img className='promo__image' alt='Земля' src={promoImage}></img>
        </div>
        <NavTab />
      </div>
    </section>
  );
}

export default Promo;
