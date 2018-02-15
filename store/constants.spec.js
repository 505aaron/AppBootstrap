import { Map } from 'immutable';
import * as root from './constants';
import * as bootstrap from './bootstrap/_constants';

const allConstants = Map({
  bootstrap,
});

describe('root constant', () => {
  allConstants.forEach((value, key) => {
    test(`contains ${key} constants`, () => {
      expect(root).toMatchObject(value);
    });
  });

  test('length is accurate', () => {
    const expectedTotal = allConstants.reduce(
      (sum, constants) => sum + Object.keys(constants).length,
      0,
    );

    expect(Object.keys(root).length).toEqual(expectedTotal);
  });
});
