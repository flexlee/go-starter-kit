import { renderToString } from './router';
const router = require('./router');

// export main function for server side rendering
global.main = renderToString;

// start app if it in the browser
if (typeof window !== 'undefined') {
  // Start main application here
  router.runRouter();
}
