import React from 'react';
import { useSelector } from 'react-redux';

const Information = ({ currentFrame, frames, difference }) => {
  const numberOfReds = useSelector(state => state.game.present.numberOfReds);

  const pointsRemaining = numberOfReds + numberOfReds * 7 + 2 + 3 + 4 + 5 + 6 + 7;

  return (
    <>
      <div className='information'>
        <h3>Game</h3>
        <p>Frame: {currentFrame} of {frames}</p>
        <p>Reds: {numberOfReds}</p>
        <p>Points Remaining: {pointsRemaining}</p>
        <p>Difference: {difference}</p>
        {(difference > pointsRemaining) && <p>Snookers Required Stage</p>}
      </div>
    </>
  )
}

export default Information;