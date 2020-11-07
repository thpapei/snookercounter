import React, { useState } from 'react';
import red from '../assets/images/red.png';
import white from '../assets/images/white.png';
import black from '../assets/images/black.png';
import pink from '../assets/images/pink.png';
import blue from '../assets/images/blue.png';
import brown from '../assets/images/brown.png';
import green from '../assets/images/green.png';
import yellow from '../assets/images/yellow.png';
import { useConfirmAudio } from '../utilities/sound';

const Balls = (props) => {
  const confirmAudio = useConfirmAudio();

  const pocketBall = points => {
    confirmAudio.play();
    // dispatch points    
  }

  return (
    <>
      <div className='controls balls'>
        <div className='control ball red' onClick={() => pocketBall(1)}><img src={red} alt='Red ball' /></div>
        <div className='control ball yellow' onClick={() => pocketBall(2)}><img src={yellow} alt='Yellow ball' /></div>
        <div className='control ball green' onClick={() => pocketBall(3)}><img src={green} alt='Green ball' /></div>
        <div className='control ball brown' onClick={() => pocketBall(4)}><img src={brown} alt='Brown ball' /></div>
        <div className='control ball blue' onClick={() => pocketBall(5)}><img src={blue} alt='Blue ball' /></div>
        <div className='control ball pink' onClick={() => pocketBall(6)}><img src={pink} alt='Pink ball' /></div>
        <div className='control ball black' onClick={() => pocketBall(7)}><img src={black} alt='Black ball' /></div>
        <div className='control ball white' onClick={() => pocketBall(7)}><img src={white} alt='White ball' /></div>
      </div>
    </>
  )
}

export default Balls;