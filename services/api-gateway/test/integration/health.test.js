import request from 'supertest';
import { describe, it, expect } from 'vitest';

import app from '../../src/app.js';

describe('Health Endpoint', () => {
    it('should return service health', async () => {
        const response = await request(app).get('/health');

        expect(response.status).toBe(200);

        expect(response.body.status).toBe('UP');

        expect(response.body.service).toBe('api-gateway');
    });
});