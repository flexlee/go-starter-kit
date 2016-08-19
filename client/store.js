import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './rootReducer.js';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const middlewares = [
  thunkMiddleware,
];

// Add state logger
let devtools;

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger());
  devtools = window.devToolsExtension();
} else {
  devtools = f => f;
}

// Add state logger
// if (process.env.NODE_ENV !== 'production') {
//   console.log(window.devToolsExtension);
//   if (typeof window === 'object' && window.devToolsExtension) {
//     devtools = window.devToolsExtension();
//     devtools = f => f;
//   } else {
//     middlewares.push(createLogger());
//     devtools = f => f;
//   }
// } else {
//   devtools = f => f;
// }

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(...middlewares),
      devtools,
    )
  );
}

export let store = null;
export function setAsCurrentStore(s) {
  store = s;
  if (process.env.NODE_ENV !== 'production'
    && typeof window !== 'undefined') {
    window.store = store;
  }
}
