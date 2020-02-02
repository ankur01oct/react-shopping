import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';

ReactDOM.render(
    // we get it from component clas we get from react-redux, once pass store object, gives redux context to children
  <Provider store={store}>
    <BrowserRouter>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);