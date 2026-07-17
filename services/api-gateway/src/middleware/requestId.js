import { generateRequestId } from '../utils/requestId.js';

export function requestId(req, res, next) {
    const id = generateRequestId();

    req.requestId = id;

    res.setHeader('X-Request-ID', id);

    next();
}