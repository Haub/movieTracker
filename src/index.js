import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';




const router = (
  <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

serviceWorker.unregister();
