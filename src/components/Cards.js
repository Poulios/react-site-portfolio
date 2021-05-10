import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my three favorite categories!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://i.pinimg.com/564x/7f/48/4a/7f484a4626b6de33b645773b2dda1817.jpg'
              text='Explore hidden emotions bcak of my characters portraits'
              label='Portraits'
              path='/portraits'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.squarespace-cdn.com/content/v1/56bf55504c2f85a60a9b9fe5/1584116827406-3I6HTJUFD7CKYKVH4GQC/ke17ZwdGBToddI8pDm48kOlRP_X0hZa-99ncqjsZ3XcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcRFyN9mEIqSaNUR8r0V1_vqOGzRXq7WgKgvEbP9yXxc-KNepKi3kHhBWfcMGkvuWk/DesolationReflections.jpg'
              text='Aegean scenery consisted of clouds and earth'
              label='Landscape'
              path='/landscape'
            />
            <CardItem
              src='https://i.pinimg.com/originals/d6/58/05/d6580543a45d994cc8b0c753e687949f.jpg'
              text='Experimenting with two colors, two opposite approaches'
              label='Black n White'
              path='/black-white'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
