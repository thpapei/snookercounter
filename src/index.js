import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './state/createStore';
import './styles/styles.scss';


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));