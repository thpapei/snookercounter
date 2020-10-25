import React from 'react';
import Information from './Information';
import Player from './Player';
import Players from './Players';

const App = (props) => (
  <div className='app'>
    <h2>Snooker Counter</h2>
    <Players>
      <Player name='Thomas' score={0} gamesWon={2} />
      <Player name='George' score={23} gamesWon={1} />
    </Players>
    <Information currentFrame={3} frames={5} reds={6} difference={5} />


  </div>)

export default App;