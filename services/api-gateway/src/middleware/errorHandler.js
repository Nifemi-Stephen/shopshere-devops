import { logger } from '../config/logger.js';

export function errorHandler(err, req, res, next) {
    logger.error(
        `${req.method} ${req.originalUrl} - ${err.message}`
    );

    res.status(err.status || 500).json({
        status: 'error',
        message:
            process.env.NODE_ENV === 'production'
                ? 'Internal Server Error'
                : err.message,
    });
}