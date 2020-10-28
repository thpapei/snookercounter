import React, { useState } from 'react';
import red from '../assets/images/red.png';
import white from '../assets/images/white.png';
import black from '../assets/images/black.png';
import pink from '../assets/images/pink.png';
import blue from '../assets/images/blue.png';
import brown from '../assets/images/brown.png';
import green from '../assets/images/green.png';
import yellow from '../assets/images/yellow.png';
import ballSwitch from '../assets/images/ballSwitch.png';

const Balls = (props) => {

  const [redVisible, setRedVisible] = useState(true);

  const pocketBall = points => {
    // dispatch points
    setRedVisible(!redVisible);
  }

  const switchBalls = () => {
    setRedVisible(!redVisible);
  }
  return (
    <>
      <div className='controls balls'>
        {redVisible && <div className='controls red'>
          <div className='control ball red'><img src={red} alt='Restart Frame' onClick={() => pocketBall(1)} /></div>
        </div>}

        {!redVisible && <div className='controls colors'>
          <div className='control ball yellow'><img src={yellow} alt='Restart Frame' onClick={() => pocketBall(2)} /></div>
          <div className='control ball green'><img src={green} alt='Restart Frame' onClick={() => pocketBall(3)} /></div>
          <div className='control ball brown'><img src={brown} alt='Restart Frame' onClick={() => pocketBall(4)} /></div>
          <div className='control ball blue'><img src={blue} alt='Restart Frame' onClick={() => pocketBall(5)} /></div>
          <div className='control ball pink'><img src={pink} alt='Restart Frame' onClick={() => pocketBall(6)} /></div>
          <div className='control ball black'><img src={black} alt='Restart Frame' onClick={() => pocketBall(7)} /></div>
          <div className='control switch'><img src={ballSwitch} onClick={() => switchBalls()} /></div>
        </div>}
      </div>

    </>
  )
}

export default Balls;