import { combineReducers } from 'redux';
import configReducer, { initialState as configState } from './config';
import savesReducer, { initialState as saveState } from './saves';

export const emptyState = {
  serverConfig: configState,
  saves: saveState,
};

const rootReducer = combineReducers({
  serverConfig: configReducer,
  saves: savesReducer,
});

export default rootReducer;
