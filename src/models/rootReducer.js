import { combineReducers } from 'redux';
import configReducer from './config';

const rootReducer = combineReducers({
  serverConfig: configReducer,
});

export default rootReducer;
