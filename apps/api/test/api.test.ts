import request from 'supertest';

import app from '../src/app';

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'API - 👋🌎🌍🌏',
        },
        done
      );
  });
});

describe('GET /api/emojis', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/emojis')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, ['😀', '😳', '🙄'], done);
  });
});
