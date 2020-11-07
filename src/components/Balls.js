import React, { useState } from 'react';
import red from '../assets/images/red.png';
import white from '../assets/images/white.png';
import black from '../assets/images/black.png';
import pink from '../assets/images/pink.png';
import blue from '../assets/images/blue.png';
import brown from '../assets/images/brown.png';
import green from '../assets/images/green.png';
import yellow from '../assets/images/yellow.png';

const Balls = (props) => {
  const pocketBall = points => {
    // dispatch points    
  }

  return (
    <>
      <div className='controls balls'>
        <div className='control ball red'><img src={red} alt='Red ball' onClick={() => pocketBall(1)} /></div>
        <div className='control ball yellow'><img src={yellow} alt='Yellow ball' onClick={() => pocketBall(2)} /></div>
        <div className='control ball green'><img src={green} alt='Green ball' onClick={() => pocketBall(3)} /></div>
        <div className='control ball brown'><img src={brown} alt='Brown ball' onClick={() => pocketBall(4)} /></div>
        <div className='control ball blue'><img src={blue} alt='Blue ball' onClick={() => pocketBall(5)} /></div>
        <div className='control ball pink'><img src={pink} alt='Pink ball' onClick={() => pocketBall(6)} /></div>
        <div className='control ball black'><img src={black} alt='Black ball' onClick={() => pocketBall(7)} /></div>
        <div className='control ball white'><img src={white} alt='White ball' onClick={() => pocketBall(7)} /></div>
      </div>
    </>
  )
}

export default Balls;