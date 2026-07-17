function createLog(level, message) {
    return JSON.stringify({
        timestamp: new Date().toISOString(),
        service: 'api-gateway',
        level,
        message,
    });
}

export const logger = {
    info(message) {
        console.log(createLog('INFO', message));
    },

    warn(message) {
        console.warn(createLog('WARN', message));
    },

    error(message) {
        console.error(createLog('ERROR', message));
    },
};