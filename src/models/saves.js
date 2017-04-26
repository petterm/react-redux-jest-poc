import { makeActionCreator, handleFetchErrors } from './utils';

// ------------------------------------
// Types
// ------------------------------------
const SAVES_SYNC_START = 'SAVES_SYNC_START';
const SAVES_SYNC_SUCCESS = 'SAVES_SYNC_SUCCESS';
const SAVES_SYNC_FAIL = 'SAVES_SYNC_FAIL';

const SAVES_UPLOAD_START = 'SAVES_UPLOAD_START';
const SAVES_UPLOAD_SUCCESS = 'SAVES_UPLOAD_SUCCESS';
const SAVES_UPLOAD_FAIL = 'SAVES_UPLOAD_FAIL';

const SAVES_DELETE_START = 'SAVES_DELETE_START';
const SAVES_DELETE_SUCCESS = 'SAVES_DELETE_SUCCESS';
const SAVES_DELETE_FAIL = 'SAVES_DELETE_FAIL';

// const SAVES_CONFIG_UPDATE = 'SAVES_CONFIG_UPDATE';
// const SAVES_CREATE_START = 'SAVES_CREATE_START';
// const SAVES_CREATE_SUCCESS = 'SAVES_CREATE_SUCCESS';
// const SAVES_CREATE_FAIL = 'SAVES_CREATE_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export const syncStart = makeActionCreator(SAVES_SYNC_START);
export const syncSuccess = makeActionCreator(SAVES_SYNC_SUCCESS);
export const syncFail = makeActionCreator(SAVES_SYNC_FAIL);
export const syncronize = () => dispatch => {
  dispatch(syncStart());
  return fetch('/api/saves', {})
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(responseJson => dispatch(syncSuccess(responseJson)))
    .catch(error => dispatch(syncFail(error)));
};

export const uploadStart = makeActionCreator(SAVES_UPLOAD_START);
export const uploadSuccess = makeActionCreator(SAVES_UPLOAD_SUCCESS);
export const uploadFail = makeActionCreator(SAVES_UPLOAD_FAIL);
export const upload = file => dispatch => {
  const data = new FormData();
  data.append('file', file);
  data.append('name', 'savefile');

  dispatch(uploadStart());
  return fetch('/api/saves/upload', {
    method: 'POST',
    body: data,
  })
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(responseJson => dispatch(uploadSuccess(responseJson)))
    .catch(error => dispatch(uploadFail(error)));
};

export const deleteStart = makeActionCreator(SAVES_DELETE_START);
export const deleteSuccess = makeActionCreator(SAVES_DELETE_SUCCESS);
export const deleteFail = makeActionCreator(SAVES_DELETE_FAIL);
export const deleteSave = saveId => dispatch => {
  dispatch(deleteStart());
  return fetch(`/api/saves/${saveId}`, {
    method: 'DELETE',
  })
    .then(handleFetchErrors)
    .then(response => response.json())
    .then(responseJson => dispatch(deleteSuccess(responseJson)))
    .catch(error => dispatch(deleteFail(error)));
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
  deleting: false,
  deleteError: undefined,
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
    // Delete
    // ------------------------------
    case SAVES_DELETE_START: return {
      ...state,
      deleting: true,
      deleteError: undefined,
    };
    case SAVES_DELETE_SUCCESS: return {
      ...state,
      deleting: false,
      saves: action.payload,
    };
    case SAVES_DELETE_FAIL: return {
      ...state,
      deleteError: action.payload,
    };
    default: return state;
  }
}
