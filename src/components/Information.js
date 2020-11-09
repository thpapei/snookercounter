import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import confirm from '../assets/images/confirm.png';
import cancel from '../assets/images/cancel.png';
import { nextFrame, resetGame } from '../state/slices/game';
import Modal from './Modal';

const Information = () => {
  const dispatch = useDispatch();
  const numberOfReds = useSelector(state => state.game.present.numberOfReds);
  const pointsRemaining = useSelector(state => state.game.present.pointsRemaining);
  const player1 = useSelector(state => state.game.present['1']);
  const player2 = useSelector(state => state.game.present['2']);
  const currentFrame = useSelector(state => state.game.present.currentFrame);
  const totalFrames = useSelector(state => state.game.present.totalFrames);

  const [isFrameWinnerModalOpen, setIsFrameWinnerModalOpen] = useState(false);
  const [isGameWinnerModalOpen, setIsGameWinnerModalOpen] = useState(false);

  const difference = Math.abs(
    player1.score
    -
    player2.score
  );

  useEffect(() => {
    if (pointsRemaining === 0 && difference !== 0) {
      setIsFrameWinnerModalOpen(true);
    }
  }, [pointsRemaining]);

  useEffect(() => {
    if (player1.framesWon > Math.floor(totalFrames / 2) || player2.framesWon > Math.floor(totalFrames / 2)) {
      setIsGameWinnerModalOpen(true);
    }
  }, [player1.score, player2.score]);

  return (
    <>
      <div className='information'>
        <div className='information__item'><p>Frame: </p><p>{currentFrame} of {totalFrames}</p></div>
        <div className='information__item'><p>Reds: </p><p>{numberOfReds}</p></div>
        <div className='information__item'><p>Points Remaining:</p><p> {pointsRemaining}</p></div>
        <div className='information__item'><p>Difference: </p><p>{difference}</p></div>

        {
          (difference > pointsRemaining)
          &&
          <div className='information__item-single'>
            <p className='important'>Snookers Required Stage</p>
          </div>
        }
      </div>
      {
        isFrameWinnerModalOpen ?
          <Modal setIsModalOpen={setIsFrameWinnerModalOpen}>
            <h3>{player1.score > player2.score ? `${player1.name}` : `${player2.name}`} won this frame!</h3>
            <div className='controls'>
              <button className='control confirm' onClick={() => {
                setIsFrameWinnerModalOpen(false);
                dispatch(nextFrame());
              }}><img src={confirm} /></button>
              <button className='control cancel' onClick={() => setIsFrameWinnerModalOpen(false)}> <img src={cancel} /></button>
            </div>
          </Modal>
          :
          null
      }
      {
        isGameWinnerModalOpen ?
          <Modal setIsModalOpen={setIsGameWinnerModalOpen}>
            <h3>{player1.framesWon > player2.framesWon ? `${player1.name}` : `${player2.name}`} is the winner!</h3>
            <div className='controls'>
              <button className='control confirm' onClick={() => {
                setIsGameWinnerModalOpen(false);
                dispatch(resetGame());
              }}><img src={confirm} /></button>
              <button className='control cancel' onClick={() => setIsGameWinnerModalOpen(false)}> <img src={cancel} /></button>
            </div>
          </Modal>
          :
          null
      }
    </>
  )
}

export default Information;