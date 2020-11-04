import React, { useState } from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { useSelector } from 'react-redux';
import Modal from './Modal';


const App = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const gameStarted = useSelector(state => state.game.gameStarted);

  return (
    <div className='app'>
      <Players />
      <Information currentFrame={3} frames={5} reds={6} difference={5} />
      <Balls />
      <Controls />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen}><p>Start new game?</p></Modal>}
    </div >)
}

export default App;