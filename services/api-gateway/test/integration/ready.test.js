import request from 'supertest';
import { describe, it, expect } from 'vitest';

import app from '../../src/app.js';

describe('Ready Endpoint', () => {
    it('should return ready state', async () => {
        const response = await request(app).get('/ready');

        expect(response.status).toBe(200);

        expect(response.body.status).toBe('READY');
    });
});