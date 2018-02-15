import { BOOTSTRAP_COMPLETED, INITIALIZE_APP } from '../../constants';

export const bootstrapCompleted = name => ({
  type: BOOTSTRAP_COMPLETED,
  name,
});

export const initializeApp = () => ({
  type: INITIALIZE_APP,
});
