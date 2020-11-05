import React from 'react';

const Modal = (props) => {

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      props.setIsModalOpen(false)
    }
  }

  return (
    <div className='overlay' onClick={handleClose}>
      <div className='modal'>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;