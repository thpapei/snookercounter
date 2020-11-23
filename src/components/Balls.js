import React, { useState } from 'react';
import red from '../assets/images/red.png';
import black from '../assets/images/black.png';
import pink from '../assets/images/pink.png';
import blue from '../assets/images/blue.png';
import brown from '../assets/images/brown.png';
import green from '../assets/images/green.png';
import yellow from '../assets/images/yellow.png';
import { useConfirmAudio } from '../utilities/sound';
import { useDispatch, useSelector } from 'react-redux';
import { pocketRed, pocketColoredBall } from '../state/slices/game';

const Balls = () => {
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

  const isColorStage = useSelector(state => state.game.present.isColorStage);
  const isFinalStage = useSelector(state => state.game.present.isFinalStage);
  const wasRedStage = useSelector(state => state.game.present.wasRedStage);
  const pointsRemaining = useSelector(state => state.game.present.pointsRemaining);

  const disableButton = pointsWhereButtonIsEnabled => {
    return (!isColorStage || (!wasRedStage && isFinalStage && pointsRemaining !== pointsWhereButtonIsEnabled))
  }

  return (
    <>
      <div className='balls-container'>
        <div className='controls-spaced-evenly balls'>
          <button className='control ball red' onClick={handlePocketRed} disabled={isFinalStage}>
            <img src={red} alt='Red ball' />
          </button>
        </div>
        <div className='controls balls'>
          <div className='controls no-wrap'>
            <button className='control ball yellow' onClick={() => handlePocketColoredBall('yellow')} disabled={disableButton(27)}>
              <img src={yellow} alt='Yellow ball' />
            </button>
            <button className='control ball green' onClick={() => handlePocketColoredBall('green')} disabled={disableButton(25)}>
              <img src={green} alt='Green ball' />
            </button>
            <button className='control ball brown' onClick={() => handlePocketColoredBall('brown')} disabled={disableButton(22)}>
              <img src={brown} alt='Brown ball' />
            </button>
          </div>
          <div className='controls no-wrap'>
            <button className='control ball blue' onClick={() => handlePocketColoredBall('blue')} disabled={disableButton(18)}>
              <img src={blue} alt='Blue ball' />
            </button>
            <button className='control ball pink' onClick={() => handlePocketColoredBall('pink')} disabled={disableButton(13)}>
              <img src={pink} alt='Pink ball' />
            </button>
            <button className='control ball black' onClick={() => handlePocketColoredBall('black')} disabled={disableButton(7)}>
              <img src={black} alt='Black ball' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Balls;