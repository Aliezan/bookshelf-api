const addBooksHandler = require('./handler/addBooks');
const getAllBooksHandler = require('./handler/getBooks');
const getDetailBookHandler = require('./handler/getDetailBook');
const updateBookHandler = require('./handler/updateBook');
const deleteBookHandler = require('./handler/deleteBook');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooksHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getDetailBookHandler,
    },
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookHandler,
    },
]

module.exports = routes;