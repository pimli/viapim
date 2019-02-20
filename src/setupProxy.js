const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/pc-se', { target: 'https://content.viaplay.se' }));
};