import { combineReducers } from 'redux';
import configReducer, { initialState as configState } from './config';
import savesReducer, { initialState as saveState } from './saves';
import statusReducer, { initialState as statusState } from './status';

export const emptyState = {
  serverStatus: statusState,
  serverConfig: configState,
  saves: saveState,
};

const rootReducer = combineReducers({
  serverStatus: statusReducer,
  serverConfig: configReducer,
  saves: savesReducer,
});

export default rootReducer;
