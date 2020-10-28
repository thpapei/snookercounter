import React from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Player from './Player';
import Players from './Players';

const App = (props) => (
  <div className='app'>
    <Players>
      <Player name='Thomas' score={0} gamesWon={2} activePlayer='Thomas' />
      <Player name='George' score={23} gamesWon={1} activePlayer='Thomas' />
    </Players>
    <Information currentFrame={3} frames={5} reds={6} difference={5} />
    <Balls />
    <Controls />
  </div>)

export default App;