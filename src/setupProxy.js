const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/SwimAPI', {
      target: 'http://172.16.12.244:5449', // API endpoint 1
      changeOrigin: true,     
      headers: {
        Connection: "keep-alive"
      }
    })
  );
  app.use(
    createProxyMiddleware('/users', {
      target: 'http://localhost:3334', // API endpoint 2
      changeOrigin: true,      
      headers: {
        Connection: "keep-alive"
      }
    })
  )
}