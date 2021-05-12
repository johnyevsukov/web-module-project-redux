import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';

import reducer, { rootReducer } from './reducers';

import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

const store = createStore(rootReducer)
console.log(store.getState())

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);
