import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { Route, BrowserRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as reducers from './reducers';
import App from './components/App';

const middlewares = process.env.NODE_ENV === 'development' ? [thunk, logger] : [thunk];

const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(...middlewares)
);

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en-US">
      <BrowserRouter basename="/">
        <Route path="/" component={App} />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
