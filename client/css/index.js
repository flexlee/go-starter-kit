require('normalize.css');
require('./global');

/**
 * modules.
 * Include all css files just if you need
 * to hot reload it. And make sure that you
 * use `webpack.optimize.DedupePlugin`
 */
// require('#app/modules/app/styles');
require('#app/modules/homepage/styles');
require('#app/modules/usage/components/styles');
require('#app/modules/not-found/styles');
