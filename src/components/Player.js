import React from 'react';

const Player = ({ name, score, gamesWon }) => {

  const handleNameChange = e => {
    //dispatch name change
  }
  return (<div className='player_container'>
    <div className='player_score'>Score: {score}</div>
    <div className='player_games_won'>Frames Won: {gamesWon}</div>
    Name: <input value={name} onChange={handleNameChange} />
  </div>);
};

export default Player;