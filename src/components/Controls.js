import React from 'react';
import undo from '../assets/images/undo.png';
import redo from '../assets/images/redo.png';
import restart from '../assets/images/replay.png';
import finish from '../assets/images/finish.png';
import history from '../assets/images/history.png';

const Controls = (props) => {

  return (
    <div className='controls'>
      <div className='control restart-frame'><img src={restart} alt='Restart Frame' /></div>
      <div className='control end-game'><img src={finish} alt='End game' /></div>
      <div className='control show-breaks'><img src={history} alt='Show history' /></div>
      <div className='control undo'><img src={undo} alt='Undo' /></div>
      <div className='control redo'><img src={redo} alt='Redo' /></div>
    </div>
  )
}

export default Controls