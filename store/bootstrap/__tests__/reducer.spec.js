import { combineReducers } from 'redux';
import { Map } from 'immutable';
import bootstrap, * as fromBootstrap from '..';
import * as actions from '../../constants';
import { BOOTSTRAPPERS } from '../sagas';

const reducer = combineReducers({ bootstrap });

describe('bootstrap', () => {
  let defaultState;
  beforeEach(() => {
    defaultState = Map(BOOTSTRAPPERS);
  });

  test('default state', () => {
    let empty;
    const state = reducer(empty, { type: 'NOOP' });

    expect(state.bootstrap).toEqual(defaultState);
  });

  describe(actions.BOOTSTRAP_COMPLETED, () => {
    test('updates state', () => {
      let state;

      defaultState.keySeq().forEach((key, index) => {
        state = reducer(state, fromBootstrap.bootstrapCompleted(key));

        if (index < defaultState.size - 1) {
          expect(fromBootstrap.isBootstrapComplete(state)).toBeFalsy();
        } else {
          expect(fromBootstrap.isBootstrapComplete(state)).toBeTruthy();
        }
      });
    });
  });
});
