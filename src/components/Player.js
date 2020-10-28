import React from 'react';

const Player = ({ name, score, gamesWon, activePlayer }) => {

  const handleNameChange = e => {
    //dispatch name change

  }

  const handleActivePlayer = () => {
    //dispatch active player
  }

  const style = {
    borderColor: "white",
    borderWidth: "4px"
  }

  return (
    <div className='player_container'>
      <div className='player_score' style={activePlayer === name ? style : null} onClick={() => handleActivePlayer} ><p>{score}</p></div>
      <input value={name} onChange={handleNameChange} />
      <div className='player_frames_won'>Frames Won: {gamesWon}</div>
    </div>);
};

export default Player;