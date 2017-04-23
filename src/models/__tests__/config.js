import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  initialState,
  updateValue,
  save,
  saveStart,
  saveSuccess,
  saveFail,
  upload,
} from '../config';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const newOptionValues = { name: 'new name', autosave_interval: 30 };

describe('config actions', () => {
  it('handles CONFIG_SAVE_SUCCESS action', () => {
    const store = mockStore({
      ...initialState,
      saving: true,
    });
    const response = JSON.stringify(newOptionValues);
    fetch.mockResponseOnce(response);
    return store.dispatch(save())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });

  it('handles CONFIG_UPLOAD_SUCCESS action', () => {
    const store = mockStore({
      ...initialState,
      uploading: true,
    });
    const response = JSON.stringify(newOptionValues);
    fetch.mockResponseOnce(response);
    return store.dispatch(upload({ something: 123 }))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
});

describe('config reducer', () => {
  it('handles CONFIG_UPDATE_VALUE', () => {
    expect(reducer(initialState, updateValue('name', 'newName'))).toMatchSnapshot();
  });

  it('handles CONFIG_SAVE_START', () => {
    expect(reducer({
      ...initialState,
      saving: true,
    }, saveStart())).toMatchSnapshot();
  });
  it('handles CONFIG_SAVE_SUCCESS', () => {
    expect(reducer({
      ...initialState,
      saving: false,
      unsavedChanges: false,
    }, saveSuccess(newOptionValues))).toMatchSnapshot();
  });
  it('handles CONFIG_SAVE_FAIL', () => {
    expect(reducer({
      ...initialState,
      saving: true,
      unsavedChanges: true,
    }, saveFail({ error: 'some error' }))).toMatchSnapshot();
  });
});
