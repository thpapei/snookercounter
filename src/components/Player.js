import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActivePlayerId, setPlayerName } from '../state/slices/game';

const Player = ({ id }) => {
  const dispatch = useDispatch();
  const name = useSelector(state => state.game.present[`${id}`].name);
  const score = useSelector(state => {
    if (state.game.present.frames.length > 0) {
      return state.game.present.frames[state.game.present.activeFrame][`${id}`].score
    } else {
      return 0;
    }
  });
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
    borderWidth: "4px"
  }

  return (
    <div className='player_container'>
      <div className='player_score' style={activePlayerId === id ? style : null} onClick={handleActivePlayer} ><p>{score}</p></div>
      <input value={name} onChange={handleNameChange} placeholder={`Player ${id}`} />
      <div className='player_frames_won'>Frames Won: {framesWon}</div>
    </div>);
};

export default Player;