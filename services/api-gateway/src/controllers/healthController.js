import env from '../config/env.js';
import service from '../config/service.js';

export function getHealth(req, res) {
    res.json({
        service: service.name,
        version: service.version,
        status: 'UP',
        environment: env.nodeEnv,
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
    });
}

export function getReady(req, res) {
    res.json({
        service: service.name,
        status: 'READY',
    });
}