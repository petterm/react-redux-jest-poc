/* eslint no-underscore-dangle: 'off' */
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer, { emptyState } from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => createStore(
  rootReducer, emptyState,
  composeEnhancers(applyMiddleware(thunkMiddleware)));
