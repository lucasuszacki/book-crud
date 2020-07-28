import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const baseService = axios.create({
    baseURL: 'https://some-domain.com/api/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const mock = new MockAdapter(baseService);
mock.onGet('/login').reply(200, {
    users: [
        { id: 1, name: 'John Smith' }
    ]
});

export const login = body => baseService.get('/login');