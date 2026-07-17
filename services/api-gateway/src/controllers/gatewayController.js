function comingSoon(service) {
    return {
        status: 'success',
        message: `${service} endpoint available. Service integration coming soon.`,
    };
}

export function auth(req, res) {
    res.json(comingSoon('Authentication'));
}

export function products(req, res) {
    res.json(comingSoon('Product'));
}

export function inventory(req, res) {
    res.json(comingSoon('Inventory'));
}

export function orders(req, res) {
    res.json(comingSoon('Order'));
}

export function notifications(req, res) {
    res.json(comingSoon('Notification'));
}