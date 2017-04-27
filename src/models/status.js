import { makeActionCreator, handleFetchErrors } from './utils';

// ------------------------------------
// Types
// ------------------------------------
const STATUS_START_SERVER_START = 'STATUS_START_SERVER_START';
const STATUS_START_SERVER_SUCCESS = 'STATUS_START_SERVER_SUCCESS';
const STATUS_START_SERVER_FAIL = 'STATUS_START_SERVER_FAIL';
const STATUS_STOP_SERVER_START = 'STATUS_STOP_SERVER_START';
const STATUS_STOP_SERVER_SUCCESS = 'STATUS_STOP_SERVER_SUCCESS';
const STATUS_STOP_SERVER_FAIL = 'STATUS_STOP_SERVER_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export const startStart = makeActionCreator(STATUS_START_SERVER_START);
export const startSuccess = makeActionCreator(STATUS_START_SERVER_SUCCESS);
export const startFail = makeActionCreator(STATUS_START_SERVER_FAIL);
export const startServer = () => dispatch => {
  dispatch(startStart());
  return fetch('/api/startServer', {})
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(responseJson => dispatch(startSuccess(responseJson)))
    .catch(error => dispatch(startFail(error)));
};

export const stopStart = makeActionCreator(STATUS_STOP_SERVER_START);
export const stopSuccess = makeActionCreator(STATUS_STOP_SERVER_SUCCESS);
export const stopFail = makeActionCreator(STATUS_STOP_SERVER_FAIL);
export const stopServer = () => dispatch => {
  dispatch(stopStart());
  return fetch('/api/stopServer', {})
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(responseJson => dispatch(stopSuccess(responseJson)))
    .catch(error => dispatch(stopFail(error)));
};

// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  status: 'unknown',
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function savesReducer(state = initialState, action) {
  switch (action.type) {
    default: return state;
  }
};
