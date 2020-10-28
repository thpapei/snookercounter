import React from 'react';

const Information = ({ currentFrame, frames, reds, difference }) => {
  const pointsRemaining = reds + reds * 7 + 2 + 3 + 4 + 5 + 6 + 7;

  return (
    <>
      <div className='information'>
        <h3>Game</h3>
        <p>Frame: {currentFrame} of {frames}</p>
        <p>Reds: {reds}</p>
        <p>Points Remaining: {pointsRemaining}</p>
        <p>Difference: {difference}</p>
        {(difference > pointsRemaining) && <p>Snookers Required Stage</p>}
      </div>
    </>
  )
}

export default Information;