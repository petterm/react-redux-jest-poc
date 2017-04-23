/* eslint func-names: 'off', prefer-arrow-callback: 'off' */
// import updeep from 'updeep';
import { types, defaultOptions } from './configConstants';
import makeActionCreator from './utils';

// ------------------------------------
// Actions
// ------------------------------------
export const refresh = makeActionCreator(types.CONFIG_REFRESH);
export const updateValue = makeActionCreator(types.CONFIG_UPDATE_VALUE, 'name', 'value');
export const saveStart = makeActionCreator(types.CONFIG_SAVE_START);
export const saveSuccess = makeActionCreator(types.CONFIG_SAVE_SUCCESS);
export const saveFail = makeActionCreator(types.CONFIG_SAVE_FAIL);
export const save = () => dispatch => {
  dispatch(saveStart());
  return fetch('/api/config/save', {})
    .then(response => response.json())
    .then(responseJson => dispatch(saveSuccess(responseJson)))
    .catch(error => dispatch(saveFail(error)));
};

export const uploadStart = makeActionCreator(types.CONFIG_UPLOAD_START);
export const uploadSuccess = makeActionCreator(types.CONFIG_UPLOAD_SUCCESS);
export const uploadFail = makeActionCreator(types.CONFIG_UPLOAD_FAIL);
export const upload = file => dispatch => {
  const data = new FormData();
  data.append('file', file);
  data.append('name', 'serverConfig');

  dispatch(uploadStart());
  return fetch('/api/config/upload', {
    method: 'POST',
    body: data,
  })
    .then(response => response.json())
    .then(responseJson => dispatch(uploadSuccess(responseJson)))
    .catch(error => dispatch(uploadFail(error)));
};

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = {
  uploading: false,
  uploadFailed: false,
  unsavedChanges: false,
  saving: false,
  saveFailed: false,
  optionValues: {},
  optionInfo: defaultOptions,
};

export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case types.CONFIG_UPDATE_VALUE: return {
      ...state,
      unsavedChanges: true,
      optionValues: {
        ...state.optionValues,
        [action.payload.name]: action.payload.value,
      },
    };
    case types.CONFIG_SAVE_START: return {
      ...state,
      saving: true,
      saveFailed: false,
    };
    case types.CONFIG_SAVE_SUCCESS: return {
      ...state,
      optionValues: action.payload,
      saving: false,
      unsavedChanges: false,
    };
    case types.CONFIG_SAVE_FAIL: return {
      ...state,
      saving: false,
      saveFailed: true,
    };
    case types.CONFIG_UPLOAD_START: return {
      ...state,
      uploading: true,
      uploadFailed: false,
    };
    case types.CONFIG_UPLOAD_SUCCESS: return {
      ...state,
      optionValues: action.payload,
      uploading: false,
    };
    case types.CONFIG_UPLOAD_FAIL: return {
      ...state,
      uploading: false,
      uploadFailed: true,
    };
    default: return state;
  }
}
