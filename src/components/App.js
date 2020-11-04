import React from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { useSelector } from 'react-redux';


const App = (props) => {

  const gameStarted = useSelector(state => state.game.gameStarted);
  console.log(gameStarted);

  return (
    <div className='app'>
      <Players />
      <Information currentFrame={3} frames={5} reds={6} difference={5} />
      <Balls />
      <Controls />
    </div >)
}

export default App;