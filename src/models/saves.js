import makeActionCreator from './utils';

// ------------------------------------
// Types
// ------------------------------------
const SAVES_SYNC_START = 'SAVES_SYNC_START';
const SAVES_SYNC_SUCCESS = 'SAVES_SYNC_SUCCESS';
const SAVES_SYNC_FAIL = 'SAVES_SYNC_FAIL';

const SAVES_UPLOAD_START = 'SAVES_UPLOAD_START';
const SAVES_UPLOAD_SUCCESS = 'SAVES_UPLOAD_SUCCESS';
const SAVES_UPLOAD_FAIL = 'SAVES_UPLOAD_FAIL';

const SAVES_CONFIG_UPDATE = 'SAVES_CONFIG_UPDATE';
const SAVES_CREATE_START = 'SAVES_CREATE_START';
const SAVES_CREATE_SUCCESS = 'SAVES_CREATE_SUCCESS';
const SAVES_CREATE_FAIL = 'SAVES_CREATE_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
const syncStart = makeActionCreator(SAVES_SYNC_START);
const syncSuccess = makeActionCreator(SAVES_SYNC_SUCCESS);
const syncFail = makeActionCreator(SAVES_SYNC_FAIL);
export const syncronize = () => dispatch => {
  dispatch(syncStart());
  return fetch('/api/saves', {})
    .then(response => response.json())
    .then(responseJson => dispatch(syncSuccess(responseJson)))
    .catch(error => dispatch(syncFail(error)));
};

const uploadStart = makeActionCreator(SAVES_UPLOAD_START);
const uploadSuccess = makeActionCreator(SAVES_UPLOAD_SUCCESS);
const uploadFail = makeActionCreator(SAVES_UPLOAD_FAIL);
export const upload = file => dispatch => {
  const data = new FormData();
  data.append('file', file);
  data.append('name', 'savefile');

  dispatch(uploadStart());
  return fetch('/api/saves/upload', {
    method: 'POST',
    body: data,
  })
    .then(response => response.json())
    .then(responseJson => dispatch(uploadSuccess(responseJson)))
    .catch(error => dispatch(uploadFail(error)));
};


// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  saves: {},
  newSaveConfig: {},
  syncronizing: false,
  syncError: undefined,
  uploading: false,
  uploadError: undefined,
  creating: false,
  createError: undefined,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function savesReducer(state = initialState, action) {
  switch (action.type) {
    // Syncronize
    // ------------------------------
    case SAVES_SYNC_START: return {
      ...state,
      syncronizing: true,
      syncError: undefined,
    };
    case SAVES_SYNC_SUCCESS: return {
      ...state,
      syncronizing: false,
      saves: action.payload,
    };
    case SAVES_SYNC_FAIL: return {
      ...state,
      syncError: action.payload,
    };
    // Upload
    // ------------------------------
    case SAVES_UPLOAD_START: return {
      ...state,
      uploading: true,
      uploadError: undefined,
    };
    case SAVES_UPLOAD_SUCCESS: return {
      ...state,
      uploading: false,
      saves: action.payload,
    };
    case SAVES_UPLOAD_FAIL: return {
      ...state,
      uploadError: action.payload,
    };
    default: return state;
  }
}
