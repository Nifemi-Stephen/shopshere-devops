import request from 'supertest';
import { describe, it, expect } from 'vitest';

import app from '../../src/app.js';

describe('404 Handler', () => {
    it('should return 404 for unknown routes', async () => {
        const response = await request(app).get('/unknown-route');

        expect(response.status).toBe(404);

        expect(response.body.status).toBe('error');
    });
});