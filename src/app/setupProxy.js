const { createProxyMiddleware } = require('http-proxy-middleware');
const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL_DEPLOYED;

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: API_URL,
            changeOrigin: true,
            secure: false
        })
    )
}