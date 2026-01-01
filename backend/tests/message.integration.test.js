import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../src/app.js';

describe('Integración endpoint /api/message', () => {

  it('debería devolver status 200 y mensaje correcto', async () => {
    const res = await request(app).get('/api/message');

    // Comprobamos status
    expect(res.status).toBe(200);

    // Comprobamos estructura JSON
    expect(res.body).toHaveProperty('message');

    // Comprobamos contenido
    expect(res.body.message).toBe('Hola desde el servidor 🚀');
  });

});
