import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
// import App from '#app/modules/app';
import AppLayout from '#app/modules/layout/components/Layout.js';
import Homepage from '#app/modules/homepage';
import Usage from '#app/modules/usage/components/Usage.js';
import Test from '#app/modules/test';
import NotFound from '#app/modules/not-found';

/**
 * Returns configured routes for different
 * environments. `w` - wrapper that helps skip
 * data fetching with onEnter hook at first time.
 * @param {Object} - any data for static loaders and first-time-loading marker
 * @returns {Object} - configured routes
 */
export default ({ store, first }) => {
  // Make a closure to skip first request
  function w(loader) {
    return (nextState, replaceState, callback) => {
      if (first.time) {
        first.time = false;
        return callback();
      }
      return loader ? loader({ store, nextState, replaceState, callback }) : callback();
    };
  }

  return (
    <Route path="/" component={AppLayout}>
      <IndexRoute component={Homepage} onEnter={w(Homepage.onEnter)} />
      <Route path="/usage" component = {Usage} onEnter = {w(Usage.onEnter)} />
      <Route path="/test" component = {Test} onEnter = {w(Usage.onEnter)} />
      {/* Server redirect in action */}
      <Redirect from="/docs" to = "/usage" />
      <Route path = "*" component={NotFound} onEnter = {w(NotFound.onEnter)} />
    </Route>
  );
};
