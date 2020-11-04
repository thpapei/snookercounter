import React from 'react';
import confirm from '../assets/images/confirm.png';
import cancel from '../assets/images/cancel.png';

const Modal = (props) => {

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      props.setIsModalOpen(false)
    }
  }

  const handleConfirm = (e) => {
    if (props.confirmFunction) {
      props.confirmFunction();
    }
    handleClose(e);
  }

  return (
    <div className='overlay' onClick={handleClose}>
      <div className='modal'>
        {props.children}
        <div className='controls'>
          <div className='control confirm'><img src={confirm} onClick={handleConfirm} /></div>
          <div className='control cancel'><img src={cancel} onClick={handleClose} /></div>
        </div>
      </div>
    </div>
  )
}

export default Modal;