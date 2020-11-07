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
import { useDispatch } from 'react-redux';
import { pocketRed, pocketColoredBall } from '../state/slices/game';

const Balls = (props) => {
  const confirmAudio = useConfirmAudio();
  const dispatch = useDispatch();

  const handlePocketRed = () => {
    confirmAudio.play();
    dispatch(pocketRed());
  }

  const handlePocketColoredBall = color => {
    confirmAudio.play();
    dispatch(pocketColoredBall(color));
  }

  return (
    <>
      <div className='controls balls'>
        <div className='control ball red' onClick={handlePocketRed}><img src={red} alt='Red ball' /></div>
        <div className='control ball yellow' onClick={() => handlePocketColoredBall('yellow')}><img src={yellow} alt='Yellow ball' /></div>
        <div className='control ball green' onClick={() => handlePocketColoredBall('green')}><img src={green} alt='Green ball' /></div>
        <div className='control ball brown' onClick={() => handlePocketColoredBall('brown')}><img src={brown} alt='Brown ball' /></div>
        <div className='control ball blue' onClick={() => handlePocketColoredBall('blue')}><img src={blue} alt='Blue ball' /></div>
        <div className='control ball pink' onClick={() => handlePocketColoredBall('pink')}><img src={pink} alt='Pink ball' /></div>
        <div className='control ball black' onClick={() => handlePocketColoredBall('black')}><img src={black} alt='Black ball' /></div>
        <div className='control ball white' onClick={() => handlePocketColoredBall(7)}><img src={white} alt='White ball' /></div>
      </div>
    </>
  )
}

export default Balls;