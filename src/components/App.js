import React, { useState } from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import Break from './Break';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import NewGameForm from './NewGameForm';
import startIcon from '../assets/images/start.png';

const App = (props) => {
  const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(false);

  const gameStarted = useSelector(state => state.game.present.gameStarted);
  const currentBreak = useSelector(state => state.game.present.currentBreak);

  return (
    <>
      <Players />
      <Information currentFrame={3} frames={5} difference={5} />
      {gameStarted ?
        (
          <>
            <Break currentBreak={currentBreak} />
            <Balls />
            <Controls />
          </>
        )
        :
        (<div className='control call-to-action' onClick={() => setIsStartGameModalOpen(true)}><img src={startIcon} /></div>)}
      {
        isStartGameModalOpen ?
          <Modal setIsModalOpen={setIsStartGameModalOpen}>
            <NewGameForm setIsModalOpen={setIsStartGameModalOpen} />
          </Modal>
          :
          null
      }
    </>)
}

export default App;