import { delay } from 'redux-saga';
import { takeLatest, put, call } from 'redux-saga/effects';
import { INITIALIZE_APP } from '../../constants';
import { bootstrapCompleted } from '../actions';

export const NAME = 'connection';
export const CONNECT_DELAY = 5000;
export const API_HOST = 'https://www.google.com';

export const testConnection = token => fetch(API_HOST, {
  method: 'OPTIONS',
});


export const checkConnection = function* checkConnection() {
  let connected = false;

  while (connected === false) {
    try {
      yield call(testConnection);
      connected = true;
    } catch (e) {
      console.warn('Please connect to the internet to continue');
      yield call(delay, CONNECT_DELAY)
    }
  }

  yield put(bootstrapCompleted(NAME));
};

export default takeLatest(INITIALIZE_APP, checkConnection);
