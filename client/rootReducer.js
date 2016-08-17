import { combineReducers } from 'redux';
import usageReducers from './modules/usage/reducers';
import layoutReducers from './modules/layout/reducers';

const rootReducer = combineReducers({
  ...usageReducers,
  ...layoutReducers,
});

export default rootReducer;
