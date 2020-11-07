import React from 'react';
import cancel from '../assets/images/cancel.png';
import white from '../assets/images/whiteFoul.png';
import blue from '../assets/images/blueFoul.png'
import pink from '../assets/images/pinkFoul.png'
import black from '../assets/images/blackFoul.png'

const FoulPanel = ({ setIsModalOpen }) => {
  return (
    <div className='foul-panel'>
      <h3>Foul</h3>
      <div className='controls foul-balls'>
        <div className='control foul-white'><img src={white} alt='white' /><p>4</p></div>
        <div className='control foul-blue'><img src={blue} alt='blue' /><p>5</p></div>
        <div className='control foul-pink'><img src={pink} alt='pink' /><p>6</p></div>
        <div className='control foul-black'><img src={black} alt='black' /><p>7</p></div>
      </div>
      <button className='control cancel' onClick={() => setIsModalOpen(false)}> <img src={cancel} /></button>
    </div>
  )
}

export default FoulPanel;