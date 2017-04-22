import reducer from './config';

describe('config reducer', () => {
  it('should handle update value', () => {
    const NEW_VALUE = 2;
    const state = reducer({
      options: {
        option1: {
          value: 1,
        },
      },
    }, {
      type: 'CONFIG_UPDATE_VALUE',
      payload: {
        name: 'option1',
        value: NEW_VALUE,
      },
    });
    expect(state).toEqual({
      options: {
        option1: {
          value: NEW_VALUE,
        },
      },
    });
  });
});
