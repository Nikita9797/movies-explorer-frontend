import React from 'react';
import './Auth.css';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Auth({ authGreeting, children, text, link, linkText }) {
  return (
    <section className='auth'>
      <div className='auth__container'>
        <div className='auth__wrap'>
          <Logo />
        </div>
        <h2 className='auth__greeting'>{authGreeting}</h2>
        {children}
        <div className='auth__flex-row'>
          <p className='auth__text'>{text}</p>
          <Link to={link} className='auth__link'>
            {linkText}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Auth;
