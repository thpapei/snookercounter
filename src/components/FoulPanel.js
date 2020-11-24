import React, { useState } from 'react';
import cancel from '../assets/images/cancel.png';
import white from '../assets/images/whiteFoul.png';
import blue from '../assets/images/blueFoul.png'
import pink from '../assets/images/pinkFoul.png'
import black from '../assets/images/blackFoul.png'
import { useDispatch } from 'react-redux';
import { commitFoul, removeRed, freeBall } from '../state/slices/game';

const FoulPanel = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const [removeRedBallCheck, setRemoveRedBallCheck] = useState(false);

  const handleFoul = (color) => {
    dispatch(commitFoul(color));
    if (removeRedBallCheck) {
      dispatch(removeRed());
    }
    setIsModalOpen(false);
  }

  const handleFreeBall = () => {
    dispatch(freeBall());
    setIsModalOpen(false);
  }

  return (
    <div className='foul-panel'>
      <h3>Foul</h3>
      <div className='controls foul-balls'>
        <div className='control foul-white' onClick={() => handleFoul('white')}><img src={white} alt='white' /><p className='foul-ball-label'>4</p></div>
        <div className='control foul-blue' onClick={() => handleFoul('blue')}><img src={blue} alt='blue' /><p className='foul-ball-label'>5</p></div>
        <div className='control foul-pink' onClick={() => handleFoul('pink')}><img src={pink} alt='pink' /><p className='foul-ball-label'>6</p></div>
        <div className='control foul-black' onClick={() => handleFoul('black')}><img src={black} alt='black' /><p className='foul-ball-label'>7</p></div>
      </div>
      <div className='free-ball'>
        <button className='control' onClick={handleFreeBall}><p className='free-ball-label'>Free Ball</p></button>
      </div>
      <p className='tip'>Clicking on the Free-Ball button will immediately award one red ball and let you pocket a colored ball.</p>
      <div className='controls'>
        <p>Remove red ball</p>
        <input className='remove-red-checkbox' type='checkbox' onClick={() => setRemoveRedBallCheck(!removeRedBallCheck)} />
      </div>
      <button className='control cancel' onClick={() => setIsModalOpen(false)}> <img src={cancel} /></button>
    </div >
  )
}

export default FoulPanel;