import { Formik, Field, ErrorMessage, Form } from 'formik';
import { string, object } from 'yup';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import confirm from '../assets/images/confirm.png';
import cancel from '../assets/images/cancel.png';
import { startGame } from '../state/slices/game';
import { useStartGameAudio } from '../utilities/sound';

const NewGameForm = ({ setIsModalOpen }) => {
  const dispatch = useDispatch();
  const startGameAudio = useStartGameAudio();

  return (
    <Formik
      initialValues={{
        player1Name: '',
        player2Name: '',
        numberOfReds: 15,
        totalFrames: 1
      }}
      validationSchema={object({
        player1Name: string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        player2Name: string()
          .max(20, 'Must be 20 characters or less')
          .required('Required')
      })}
      onSubmit={({ player1Name, player2Name, numberOfReds, totalFrames }, actions) => {
        dispatch(startGame({
          ['1']: player1Name,
          ['2']: player2Name,
          numberOfReds: parseInt(numberOfReds),
          totalFrames: parseInt(totalFrames),
          gameStarted: true
        }));
        setIsModalOpen(false);
        startGameAudio.play();
      }}
    >
      <Form>
        <div className='form-fields'>
          <label htmlFor='player1Name'>Player 1: </label>
          <Field id='player1Name' name='player1Name' placeholder='player 1 name' />
        </div>
        <ErrorMessage name='player1Name' render={message => <div className='error-message'>{message}</div>} />


        <div className='form-fields'>
          <label htmlFor='player2Name'>Player 2: </label>
          <Field id='player2Name' name='player2Name' placeholder='player 2 name' />
        </div>
        <ErrorMessage name='player2Name' render={message => <div className='error-message'>{message}</div>} />


        <div className='form-fields'>
          <label htmlFor='numberOfReds'>Number of reds: </label>
          <Field as='select' id='numberOfReds' name='numberOfReds'>
            <option value={6}>6</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </Field>
        </div>

        <div className='form-fields'>
          <label htmlFor='totalFrames'>Total frames: </label>
          <Field as='select' id='totalFrames' name='totalFrames'>
            <option value={1}>1</option>
            <option value={3}>3</option>
            <option value={5}>5</option>
            <option value={7}>7</option>
            <option value={9}>9</option>
            <option value={11}>11</option>
            <option value={13}>13</option>
            <option value={15}>15</option>
            <option value={17}>17</option>
            <option value={19}>19</option>
            <option value={21}>21</option>
          </Field>
        </div>

        <div className='confirm-buttons form-fields' >
          <button className='control confirm' type='submit'><img src={confirm} /></button>
          <button className='control cancel' onClick={() => setIsModalOpen(false)}> <img src={cancel} /></button>
        </div>
      </Form>
    </Formik >
  )
}

export default NewGameForm;