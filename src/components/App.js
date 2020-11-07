import React, { useState } from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import NewGameForm from './NewGameForm';
import startIcon from '../assets/images/start.png';


const App = (props) => {
  const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(false);

  const gameStarted = useSelector(state => state.game.present.gameStarted);

  return (
    <div className='app'>
      <Players />
      <Information currentFrame={3} frames={5} difference={5} />
      {gameStarted ?
        (
          <>
            <Balls />
            <Controls setIsModalOpen={setIsStartGameModalOpen} />
          </>
        )
        :
        (<div className='control call-to-action' onClick={() => setIsStartGameModalOpen(true)}><img src={startIcon} /></div>)}
      {isStartGameModalOpen ?
        <Modal setIsModalOpen={setIsStartGameModalOpen}>
          <NewGameForm setIsModalOpen={setIsStartGameModalOpen} />
        </Modal>
        :
        null}
    </div >)
}

export default App;