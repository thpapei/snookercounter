import React, { useState } from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import NewGameForm from './NewGameForm';


const App = (props) => {
  const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(false);

  const gameStarted = useSelector(state => state.game.present.gameStarted);
  const numberOfReds = useSelector(state => state.game.present.numberOfReds);

  return (
    <div className='app'>
      <Players />
      <Information currentFrame={3} frames={5} numberOfReds={numberOfReds} difference={5} />
      <Balls />
      <Controls setIsModalOpen={setIsStartGameModalOpen} />
      {!gameStarted && isStartGameModalOpen ?
        <Modal setIsModalOpen={setIsStartGameModalOpen}>
          <NewGameForm />
        </Modal>
        :
        null}
    </div >)
}

export default App;