import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'store/reducers/rootReducer'
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(),
)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
ReactDOM.render(app, document.getElementById('root'));

serviceWorker.unregister();
