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
      <div className='control restart-frame tooltip' >
        <img src={restartIcon} alt='Restart Frame' />
        <span class="tooltiptext tooltiptext-bottom">Restart frame</span>
      </div>

      <div className='control end-game tooltip' onClick={() => props.setIsModalOpen(true)}>
        <img src={finishIcon} alt='End game' />
        <span class="tooltiptext tooltiptext-bottom">End game</span>
      </div>

      <div className='control show-breaks tooltip'>
        <img src={historyIcon} alt='Show history' />
        <span class="tooltiptext tooltiptext-bottom">Show history of breaks</span>
      </div>

      <div className='control undo tooltip'>
        <img src={undoIcon} alt='Undo' onClick={handleUndo} />
        <span class="tooltiptext tooltiptext-bottom">Undo</span>
      </div>

      <div className='control redo tooltip'>
        <img src={redoIcon} alt='Redo' onClick={handleRedo} />
        <span class="tooltiptext tooltiptext-bottom">Redo</span>
      </div>
    </div>
  )
}

export default Controls