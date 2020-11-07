import React from 'react';
import { useSelector } from 'react-redux';
import Player from './Player';

const Players = () => {

  return (
    <div className='players'>
      <Player id={1} />
      <Player id={2} />
    </div>);
}

export default Players;