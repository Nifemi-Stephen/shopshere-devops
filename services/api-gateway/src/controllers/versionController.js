import service from '../config/service.js';

export function getVersion(req, res) {
    res.json({
        service: service.name,
        version: service.version,
        build: process.env.BUILD_VERSION || 'development',
    });
}