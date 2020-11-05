import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const NewGameForm = () => {
  const dispatch = useDispatch();

  const [player1name, setPlayer1Name] = useState('');

  return (
    <form>
      <div className='player-names'>
        Player 1 Name:<input placeholder='Player 1 name' />
        Player 2 Name:<input placeholder='Player 2 name' />
      </div>

    </form>
  )
}

export default NewGameForm;