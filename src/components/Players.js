import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';

const Players = () => {

  const activePlayerId = useSelector(state => state.game.present.activePlayerId)

  return (
    <div className='players'>
      <Player name='Thomas' score={0} gamesWon={2} activePlayerId={activePlayerId} id={1} />
      <Player name='George' score={23} gamesWon={1} activePlayerId={activePlayerId} id={2} />
    </div>);
}

export default Players;