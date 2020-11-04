import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActivePlayerId } from '../state/slices/game';

const Player = ({ name, score, gamesWon, activePlayerId, id }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(name);

  const handleNameChange = e => {
    console.log(e.target.value);
    setUsername(e.target.value);
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
      <input value={username} onChange={handleNameChange} />
      <div className='player_frames_won'>Frames Won: {gamesWon}</div>
    </div>);
};

export default Player;