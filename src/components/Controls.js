import React from 'react';
import undoIcon from '../assets/images/undo.png';
import redoIcon from '../assets/images/redo.png';
import restartIcon from '../assets/images/replay.png';
import finishIcon from '../assets/images/finish.png';
import historyIcon from '../assets/images/history.png';
import { useDispatch, useSelector } from 'react-redux';

const Controls = (props) => {
  const dispatch = useDispatch();

  const pastLength = useSelector(state => state.game.past.length);
  const futureLength = useSelector(state => state.game.future.length);

  const handleUndo = () => {
    if (pastLength > 0) {
      dispatch({ type: 'game/undo' });
    }

  }

  const handleRedo = () => {
    if (futureLength > 0) {
      dispatch({ type: 'game/redo' })
    }
  }

  return (
    <div className='controls'>
      <div className='control restart-frame'><img src={restartIcon} alt='Restart Frame' /></div>
      <div className='control end-game' onClick={() => props.setIsModalOpen(true)}><img src={finishIcon} alt='End game' /></div>
      <div className='control show-breaks'><img src={historyIcon} alt='Show history' /></div>
      <div className='control undo'><img src={undoIcon} alt='Undo' onClick={handleUndo} /></div>
      <div className='control redo'><img src={redoIcon} alt='Redo' onClick={handleRedo} /></div>
    </div>
  )
}

export default Controls