import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import 'react-slideshow-image/dist/styles.css'
import './Slideshow2.css';



  const Slideshow2 = () => {
    const images = [
        'https://i1.wp.com/wallur.com/wp-content/uploads/2016/12/mountains-background-8.jpg?fit=1920%2C1080',
        'https://www.wallpapers13.com/wp-content/uploads/2015/12/Mountain-field-with-yellow-flowers-sky-clouds-HD-wallpapers-915x515.jpg',
        'https://cdn.hipwallpaper.com/i/72/49/F1MErN.jpg'
      ];

    const zoomOutProperties = {
      indicators: true,
      scale: 0.4,
      indicators: i => (<div className="indicator" alt=''>{i + 1}</div>)
    }
    return (
      <div>
        <Zoom {...zoomOutProperties}>
          { images.map((each, index) => {
              <img key={index} style={{width: "100%"}} src={each} />} ) }
        </Zoom>
      </div>
    )
  }
  
  export default Slideshow2;