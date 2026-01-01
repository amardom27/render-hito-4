import { describe, it, expect } from 'vitest';
import { getMessage } from '../src/message.js';

describe('Función getMessage()', () => {

  it('debería devolver el mensaje correcto', () => {
    const result = getMessage();
    expect(result).toBe('Hola desde el servidor 🚀');
  });

});
