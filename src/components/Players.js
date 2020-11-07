import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';

const Players = () => {

  const activePlayerId = useSelector(state => state.game.present.activePlayerId)

  return (
    <div className='players'>
      <Player id={1} score={0} gamesWon={2} activePlayerId={activePlayerId} />
      <Player id={2} score={23} gamesWon={1} activePlayerId={activePlayerId} />
    </div>);
}

export default Players;