import React from 'react';
import Balls from './Balls';
import Controls from './Controls';
import Information from './Information';
import Players from './Players';
import { Provider } from 'react-redux';
import store from '../state/createStore';

const App = (props) => (
  <div className='app'>
    <Provider store={store}>
      <Players />
      <Information currentFrame={3} frames={5} reds={6} difference={5} />
      <Balls />
      <Controls />
    </Provider>
  </div>)

export default App;