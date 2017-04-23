/* eslint func-names: 'off', prefer-arrow-callback: 'off' */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import savesReducer, {
  initialState,
  syncronize,
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

  // TODO: Add test for reducer as well..
});
