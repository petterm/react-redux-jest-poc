// import updeep from 'updeep';
import { types, defaultOptions } from './configConstants';

// ------------------------------------
// Actions
// ------------------------------------
export const updateValue = (name, value) => ({
  // TODO: Should do ajax update
  type: types.CONFIG_UPDATE_VALUE,
  payload: { name, value },
});
export const refresh = config => ({
  type: types.CONFIG_REFRESH,
  payload: config,
});

export const saveStart = () => ({
  type: types.CONFIG_SAVE_START,
});
export const saveSuccess = data => ({
  type: types.CONFIG_SAVE_SUCCESS,
  payload: data,
});
export const saveFailed = () => ({
  type: types.CONFIG_SAVE_FAIL,
});
export const save = () => dispatch => {
  dispatch(saveStart());
  return fetch('/api/saveConfig', {})
    .then(response => response.json())
    .then(responseJson => dispatch(saveSuccess(responseJson)))
    .catch(error => dispatch(saveFailed(error)));
};

export const uploadStart = () => ({
  type: types.CONFIG_UPLOAD_START,
});
export const uploadSuccess = data => ({
  type: types.CONFIG_UPLOAD_SUCCESS,
  payload: data,
});
export const uploadFail = error => ({
  type: types.CONFIG_UPLOAD_FAIL,
  payload: error,
});
export const upload = file => dispatch => {
  dispatch(uploadStart());

  const data = new FormData();
  data.append('file', file);
  data.append('name', 'serverConfig');

  return fetch('/api/uploadConfig', {
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
