import crypto from 'node:crypto';

/**
 * Generate a unique request ID.
 *
 * @returns {string}
 */
export function generateRequestId() {
    return crypto.randomUUID();
}