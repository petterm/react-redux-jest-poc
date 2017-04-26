import { makeActionCreator } from '../utils';

describe('config utils', () => {
  it('can make action-creators', () => {
    expect(makeActionCreator('SOME_ACTION_TYPE')()).toMatchSnapshot();
    expect(makeActionCreator('SOME_ACTION_TYPE')('value-1')).toMatchSnapshot();
    expect(makeActionCreator('SOME_ACTION_TYPE', 'arg-1', 'arg-2')('value-1', 'value-2'))
      .toMatchSnapshot();
  });
});
