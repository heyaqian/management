const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {

    app.use('/api',     
    createProxyMiddleware({ 
              target: 'https://cnodejs.org/api/v1',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":"/"
              } 
            }
         ));

           app.use('/hd', 
    createProxyMiddleware({ 
              target: 'http://localhost:4000',
              changeOrigin: true,
              pathRewrite:{
                  "^/hd":""
              } 
            }
         ));
}