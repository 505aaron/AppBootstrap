import { Map } from 'immutable';
import { BOOTSTRAPPERS } from '../sagas';
import { BOOTSTRAP_COMPLETED } from '../../constants';

export default (state = Map(BOOTSTRAPPERS), action) => {
  switch (action.type) {
    case BOOTSTRAP_COMPLETED:
      return state.set(action.name, true);
    default:
      return state;
  }
};
