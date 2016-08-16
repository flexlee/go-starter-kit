import { combineReducers } from 'redux';
import configReducer from './components/usage/reducer.js';

const rootReducer = combineReducers({
  configReducer,
});

export default rootReducer;
