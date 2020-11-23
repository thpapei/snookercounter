import React, { useState } from 'react';
import undoIcon from '../assets/images/undo.png';
import redoIcon from '../assets/images/redo.png';
import restartIcon from '../assets/images/replay.png';
import foul from '../assets/images/foul.png';
import finishIcon from '../assets/images/finish.png';
import optionsIcon from '../assets/images/options.png';
import { useDispatch, useSelector } from 'react-redux';
import confirm from '../assets/images/confirm.png';
import cancel from '../assets/images/cancel.png';
import { resetGame, restartFrame } from '../state/slices/game';
import FoulPanel from './FoulPanel';
import Options from './Options';
import Modal from './Modal';

const Controls = () => {
  const dispatch = useDispatch();

  const pastLength = useSelector(state => state.game.past.length);
  const futureLength = useSelector(state => state.game.future.length);

  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [isRestartFrameModalOpen, setIsRestartFrameModalOpen] = useState(false);
  const [isFoulPanelModalOpen, setIsFoulPanelModalOpen] = useState(false);
  const [isOptionsModalOpen, setIsOptionsModalOpen] = useState(true);

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
    <>
      <div className='controls'>
        <div className='controls no-wrap'>
          <div className='control restart-frame tooltip' >
            <img src={restartIcon} alt='Restart Frame' onClick={() => setIsRestartFrameModalOpen(true)} />
            <span className="tooltiptext tooltiptext-bottom">Restart frame</span>
          </div>

          <div className='control end-game tooltip'>
            <img src={finishIcon} alt='End game' onClick={() => setIsEndGameModalOpen(true)} />
            <span className="tooltiptext tooltiptext-bottom">End game</span>
          </div>

          <div className='control show-breaks tooltip'>
            <img src={optionsIcon} alt='Options' onClick={() => setIsOptionsModalOpen(true)} />
            <span className="tooltiptext tooltiptext-bottom">Options</span>
          </div>
        </div>
        <div className='controls no-wrap'>
          <div className='control foul tooltip' onClick={() => setIsFoulPanelModalOpen(true)}>
            <img src={foul} alt='White ball' />
            <span className="tooltiptext tooltiptext-bottom">Foul</span>
          </div>
          <div className='control undo tooltip' onClick={handleUndo}>
            <img src={undoIcon} alt='Undo' />
            <span className="tooltiptext tooltiptext-bottom">Undo</span>
          </div>

          <div className='control redo tooltip' onClick={handleRedo}>
            <img src={redoIcon} alt='Redo' />
            <span className="tooltiptext tooltiptext-bottom">Redo</span>
          </div>
        </div>
      </div>
      {
        isEndGameModalOpen ?
          <Modal setIsModalOpen={setIsEndGameModalOpen}>
            <h3>Are you sure you want to end this game?</h3>
            <div className='controls'>
              <button className='control confirm' onClick={() => {
                setIsEndGameModalOpen(false);
                dispatch(resetGame());
              }}><img src={confirm} /></button>
              <button className='control cancel' onClick={() => setIsEndGameModalOpen(false)}> <img src={cancel} /></button>
            </div>
          </Modal>
          :
          null
      }
      {
        isRestartFrameModalOpen ?
          <Modal setIsModalOpen={setIsRestartFrameModalOpen}>
            <h3>Are you sure you want to restart this frame?</h3>
            <div className='controls'>
              <button className='control confirm' onClick={() => {
                setIsRestartFrameModalOpen(false);
                dispatch(restartFrame());
              }}><img src={confirm} /></button>
              <button className='control cancel' onClick={() => setIsRestartFrameModalOpen(false)}> <img src={cancel} /></button>
            </div>
          </Modal>
          :
          null
      }
      {
        isFoulPanelModalOpen ?
          <Modal setIsModalOpen={setIsFoulPanelModalOpen}>
            <FoulPanel setIsModalOpen={setIsFoulPanelModalOpen} />
          </Modal>
          :
          null
      }
      {
        isOptionsModalOpen ?
          <Modal setIsModalOpen={setIsOptionsModalOpen}>
            <Options setIsModalOpen={setIsOptionsModalOpen} />
          </Modal>
          :
          null
      }
    </>
  )
}

export default Controls