import http from 'node:http';

import app from './app.js';
import env from './config/env.js';
import { logger } from './config/logger.js';

const server = http.createServer(app);

server.listen(env.port, "0.0.0.0", () => {
    logger.info(`API Gateway listening on port ${env.port}`);
});

process.on('SIGTERM', () => {
    logger.info('SIGTERM received. Shutting down.');

    server.close(() => {
        logger.info('Server stopped.');

        process.exit(0);
    });
});

process.on('SIGINT', () => {
    logger.info('SIGINT received. Shutting down.');

    server.close(() => {
        logger.info('Server stopped.');

        process.exit(0);
    });
});