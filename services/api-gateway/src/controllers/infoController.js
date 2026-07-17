import service from '../config/service.js';

export function getInfo(req, res) {
    res.json({
        service: service.name,
        version: service.version,
        description: service.description,
    });
}