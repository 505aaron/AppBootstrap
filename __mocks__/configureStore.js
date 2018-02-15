import { createStore } from 'redux';
import app from '../store';

module.exports = function configureStore() {
  const store = createStore(app);
  return store;
};
