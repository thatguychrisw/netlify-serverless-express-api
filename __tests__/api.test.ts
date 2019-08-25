import request from 'supertest'
import app from '../src/app'

test('it responds successfully to GET /', () => {
    return request(app).get('/').expect(200);
});
