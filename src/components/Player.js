import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlayerId, setPlayerName } from '../state/slices/game';

const Player = ({ id }) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.game.present[`${id}`].name);
  const score = useSelector(state => state.game.present[`${id}`].score);
  const framesWon = useSelector(state => state.game.present[`${id}`].framesWon);
  const activePlayerId = useSelector(state => state.game.present.activePlayerId);

  const handleNameChange = e => {
    dispatch(setPlayerName({ id, name: e.target.value }))
  }

  const handleActivePlayer = () => {
    dispatch(setActivePlayerId(id));
  }

  const style = {
    borderColor: "white",
  }

  return (
    <div className='player_container'>
      <div className={`player_score player${id}`} style={activePlayerId === id ? style : null} onClick={handleActivePlayer} ><p>{score}</p></div>
      <input className={`player${id}`} value={name} onChange={handleNameChange} placeholder={`Player ${id}`} />
      <div className='player_frames_won'>Frames Won: {framesWon}</div>
    </div>);
};

export default Player;