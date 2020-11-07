import React, { useState } from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { useSelector } from 'react-redux';
import Modal from './Modal';
import NewGameForm from './NewGameForm';
import startIcon from '../assets/images/start.png';
import FoulPanel from './FoulPanel';


const App = (props) => {
  const [isStartGameModalOpen, setIsStartGameModalOpen] = useState(false);
  const [isFoulPanelModalOpen, setIsFoulPanelModalOpen] = useState(false);

  const gameStarted = useSelector(state => state.game.present.gameStarted);

  return (
    <>
      <Players />
      <Information currentFrame={3} frames={5} difference={5} />
      {gameStarted ?
        (
          <>
            <Balls setIsModalOpen={setIsFoulPanelModalOpen} />
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
      {
        isFoulPanelModalOpen ?
          <Modal setIsModalOpen={setIsFoulPanelModalOpen}>
            <FoulPanel setIsModalOpen={setIsFoulPanelModalOpen} />
          </Modal>
          :
          null
      }

    </>)
}

export default App;