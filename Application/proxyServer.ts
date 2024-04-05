import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const PORT = 3001; // Port for the proxy server
const TARGET_PORT = 3000; // Port your Next.js app is running on

// Proxy middleware options
const options = {
    target: `http://localhost:${TARGET_PORT}`, // Target host where Next.js app is running
    changeOrigin: true,
    pathRewrite: {
        '^/api/webhooks/clerk-mongodb-sync': '/api/webhooks/clerk-mongodb-sync', // No rewrite needed, directly proxying to same endpoint
    },
};

// Configure the proxy middleware to intercept requests to "/api/webhooks/clerk-mongodb-sync"
// Clerk sends data to "http://<ngrok-url>/api/webhooks/clerk-mongodb-sync"
// It gets forwarded to my local "http://localhost:3000/api/webhooks/clerk-mongodb-sync" endpoint
// I.e. the only thing exposed on the internet is this singular proxy server that only hosts the Clerk webhook endpoint that we forward locally
app.use('/api/webhooks/clerk-mongodb-sync', createProxyMiddleware(options as any) as any);

app.listen(PORT, () => {
    console.log(`Proxy server listening on port ${PORT}.`);
});
