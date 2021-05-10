import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Live and travel with our photos
        </p>
        <p className='footer-subscription-text'>
          Fill up yourself
        </p>
        <div className='input-areas'>
          <form>
          <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Me</h2>
            <Link to='/about-me'>Bio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>          
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
