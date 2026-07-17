import request from 'supertest';
import { describe, it, expect } from 'vitest';

import app from '../../src/app.js';

describe('Root Endpoint', () => {
    it('should return gateway information', async () => {
        const response = await request(app).get('/');

        expect(response.status).toBe(200);

        expect(response.body.service).toBe('api-gateway');

        expect(response.body.version).toBe('1.0.0');
    });
});