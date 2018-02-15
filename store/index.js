import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import bootstrap, { sagas as bootstrapSagas } from './bootstrap';

export const rootSaga = function* rootSaga() {
  yield all([
    ...bootstrapSagas,
  ]);
};

export default combineReducers({
  bootstrap,
});
