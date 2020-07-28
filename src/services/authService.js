import baseService from './baseService';

export const login = body => baseService().post('auth/login', body);