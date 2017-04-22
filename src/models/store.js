/* eslint no-underscore-dangle: 'off' */
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

export default initialState => createStore(
  rootReducer, initialState,
  applyMiddleware(thunkMiddleware),
  (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
