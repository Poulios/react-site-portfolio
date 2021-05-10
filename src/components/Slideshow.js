import React from 'react';
import { Slide } from 'react-slideshow-image';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow.css';

const slideImages = [
    'https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/mountains-background-8.jpg?fit=1920%2C1080',
    'https://www.wallpapers13.com/wp-content/uploads/2015/12/Mountain-field-with-yellow-flowers-sky-clouds-HD-wallpapers-915x515.jpg',
    'https://cdn.hipwallpaper.com/i/72/49/F1MErN.jpg'
  ];
  
  const Slideshow = () => {
      return (
        <div>
          <Slide easing="ease">
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <div className='hero-container'>
                    <h1>EXPLORE NATURE</h1>
                    <p>What are you waiting for?</p>
                    <div className='hero-btns'>
                        <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        >
                        MY WORK
                        </Button>        
                    </div>
                </div>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <div className='hero-container'>
                        <h1>EXPLORE NATURE</h1>
                        <p>What are you waiting for?</p>
                        <div className='hero-btns'>
                            <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            MY WORK
                            </Button>        
                        </div>
                    </div>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                <div className='hero-container'>
                        <h1>EXPLORE NATURE</h1>
                        <p>What are you waiting for?</p>
                        <div className='hero-btns'>
                            <Button
                            className='btns'
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            >
                            MY WORK
                            </Button>        
                        </div>
                    </div>
              </div>
            </div>
          </Slide>
        </div>
      )
  };
  
  export default Slideshow;