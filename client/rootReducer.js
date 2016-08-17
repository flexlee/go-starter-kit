import { combineReducers } from 'redux';
import usageReducers from './modules/usage/reducers';

const rootReducer = combineReducers({
  ...usageReducers,
});

export default rootReducer;
