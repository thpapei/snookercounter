import React, { useState } from 'react';

const Players = props => {
  const [activePlayer, setActivePlayer] = useState(1);
  console.log(props.children);
  return <div className='players'>{props.children}</div>;
}

export default Players;