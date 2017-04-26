/* eslint func-names: 'off', prefer-arrow-callback: 'off' */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import savesReducer, {
  initialState,
  syncronize,
  syncStart,
  syncSuccess,
  syncFail,
} from '../saves';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('handles syncronize actions', function () {
  const mockSyncResponse = {
    'save 1': {
      timestamp: 1234567,
    },
    another_save: {
      timestamp: 2234567,
    },
  };
  it('handles successful syncronize action', function () {
    const store = mockStore({
      ...initialState,
    });
    const response = JSON.stringify(mockSyncResponse);
    fetch.mockResponseOnce(response);
    return store.dispatch(syncronize())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
  it('handles failed syncronize action', function () {
    const store = mockStore({
      ...initialState,
    });
    const response = JSON.stringify({ error: 'some error message' });
    fetch.mockResponseOnce(response, { status: 500, statusText: 'Server error' });
    return store.dispatch(syncronize())
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      });
  });
  it('reduces syncStart action', function () {
    expect(savesReducer(initialState, syncStart())).toMatchSnapshot();
    expect(savesReducer({
      ...initialState,
      syncError: Error('Old error'),
    }, syncStart())).toMatchSnapshot();
  });
  it('reduces syncSuccess action', function () {
    expect(savesReducer({
      ...initialState,
      syncronizing: true,
    }, syncSuccess(mockSyncResponse))).toMatchSnapshot();
  });
  it('reduces syncFail action', function () {
    expect(savesReducer(initialState, syncFail(Error('Some error')))).toMatchSnapshot();
  });
});
