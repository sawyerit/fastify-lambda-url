import app from '../app';

describe('GET /hello/:id', () => {
  it('should return a message', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/hello/12345'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, 12345!' });
  });
});

describe('POST /hello', () => {
  it('should return a message with data', async () => {
    const response = await app.inject({
      method: 'POST',
      url: '/hello',
      payload: { test: 'data' }
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({ message: 'Hello, World!', data: { test: 'data' } });
  });
});