import baseService from './baseService';

export const getBooks = () => baseService().get('books');

export const updateBook = (id, body) => baseService().patch(`books/${id}`, body);

export const addBook = body => baseService().post('books', body);

export const deleteBook = id => baseService().delete(`books/${id}`);