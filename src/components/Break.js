import React from 'react';
import { useSelector } from 'react-redux';
import red from '../assets/images/red.png';
import yellow from '../assets/images/yellow.png';
import green from '../assets/images/green.png';
import brown from '../assets/images/brown.png';
import blue from '../assets/images/blue.png';
import pink from '../assets/images/pink.png';
import black from '../assets/images/black.png';

const Break = ({ currentBreak }) => {

  const getSource = (ball) => {
    switch (ball) {
      case 'red': return red;
      case 'yellow': return yellow;
      case 'green': return green;
      case 'brown': return brown;
      case 'blue': return blue;
      case 'pink': return pink;
      case 'black': return black;
      default: return null;
    }
  }

  const ballWorth = {
    'red': 1,
    'yellow': 2,
    'green': 3,
    'brown': 4,
    'blue': 5,
    'pink': 6,
    'black': 7,
    'white': 4
  }

  const reduceCurrentBreak = (breakArray) => {
    if (breakArray.length > 0) {
      return breakArray.reduce((total, currentValue) => {
        return total + ballWorth[currentValue];
      }, 0);
    } else if (breakArray.length === 0) {
      return 0;
    }
  }

  return (
    <>
      <p>Points: {reduceCurrentBreak(currentBreak)}</p>
      <div className='break-container'>
        {
          currentBreak.length > 0 ?
            currentBreak.map((ball, index) => (<img className='ball' key={index} src={getSource(ball)} />))
            :
            <p>No balls pocketed...</p>
        }

      </div>
    </>
  )
};

export default Break;