import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';
import {weatherReducer} from './reducers/weatherReducer';
import thunk from 'redux-thunk';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(weatherReducer, applyMiddleware(thunk))}>
      <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


