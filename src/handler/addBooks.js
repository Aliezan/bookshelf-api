const { nanoid } = require('nanoid');
const books = require('../books');

const addBooksHandler = (req, h) => {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;

    if (!name) {
        const res = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. Mohon isi nama buku'
        });
        res.code(400);
        return res;
    }

    if (readPage > pageCount) {
        const res = h.response({
            status: 'fail',
            message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
        })
        res.code(400);
        return res;
    }

    const id = nanoid(16);
    const insertedAt = new Date().toISOString();
    const updatedAt = insertedAt;
    const finished = pageCount === readPage ? true : false;

    const newBook = {
        id, name, year, author, summary, publisher, pageCount, readPage, reading, insertedAt, updatedAt, finished
    };

    books.push(newBook)

    const isSuccess = books.filter(book => book.id === id).length > 0;

    if (isSuccess) {
        const res = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan',
            data: {
                bookId: id,
            }
        });
        res.code(201);
        return res;
    }
}

module.exports = addBooksHandler;

