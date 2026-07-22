import { logger } from '../config/logger.js';

export function requestLogger(req, res, next) {
    const start = Date.now();

    res.on('finish', () => {
        logger.info(
            JSON.stringify({
                requestId: req.requestId,
                method: req.method,
                path: req.originalUrl,
                status: res.statusCode,
                duration: `${Date.now() - start}ms`,
            })
        );
    });

    next();
}