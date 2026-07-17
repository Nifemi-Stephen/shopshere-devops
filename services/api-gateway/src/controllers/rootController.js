import service from '../config/service.js';

export function getRoot(req, res) {
    res.json({
        service: service.name,
        message: `Welcome to ShopVerse API Gateway`,
        version: service.version,
    });
}