import React from 'react';
import { useSelector } from 'react-redux';

const Information = () => {
  const numberOfReds = useSelector(state => state.game.present.numberOfReds);
  const pointsRemaining = useSelector(state => state.game.present.pointsRemaining);
  const difference = useSelector(state => Math.abs(
    state.game.present['1'].score
    -
    state.game.present['2'].score
  ));
  const activeFrame = useSelector(state => state.game.present.activeFrame + 1);
  const totalFrames = useSelector(state => state.game.present.totalFrames);

  return (
    <>
      <div className='information'>
        <div className='information__item'><p>Frame: </p><p>{activeFrame} of {totalFrames}</p></div>
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
    </>
  )
}

export default Information;