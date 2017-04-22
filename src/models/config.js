import updeep from 'updeep';
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

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  uploading: false,
  uploadFailed: false,
  options: defaultOptions,
};
export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case types.CONFIG_UPDATE_VALUE: return updeep({
      options: {
        [action.payload.name]: {
          value: action.payload.value,
        },
      },
    }, state);
    case types.CONFIG_UPLOAD_START: return {
      ...state,
      uploading: true,
      uploadFailed: false,
    };
    case types.CONFIG_UPLOAD_SUCCESS: return {
      ...state,
      options: action.data,
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
