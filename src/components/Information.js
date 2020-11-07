import React from 'react';
import { useSelector } from 'react-redux';

const Information = () => {
  const numberOfReds = useSelector(state => state.game.present.numberOfReds);
  const pointsRemaining = useSelector(state =>
    state.game.present.numberOfReds
    +
    state.game.present.numberOfReds * 7 + 2 + 3 + 4 + 5 + 6 + 7
  );
  const difference = useSelector(state => {
    if (state.game.present.frames.length > 0) {
      // Compute the absolute difference of the two players' scores
      return Math.abs(
        state.game.present.frames[state.game.present.activeFrame]['1'].score
        -
        state.game.present.frames[state.game.present.activeFrame]['2'].score
      )
    }
    else {
      return 0
    }
  });
  const activeFrame = useSelector(state => state.game.present.activeFrame + 1);
  const totalFrames = useSelector(state => state.game.present.totalFrames);

  return (
    <>
      <div className='information'>
        <h3>Game</h3>
        <p>Frame: {activeFrame} of {totalFrames}</p>
        <p>Reds: {numberOfReds}</p>
        <p>Points Remaining: {pointsRemaining}</p>
        <p>Difference: {difference}</p>
        {(difference > pointsRemaining) && <p className='important'>Snookers Required Stage</p>}
      </div>
    </>
  )
}

export default Information;