const books = require('../books');

const updateBookHandler = (req, h) => {
    const { bookId } = req.params;

    const { name, year, author, summary, publisher, pageCount, readPage, reading } = req.payload;
    const updatedAt = new Date().toISOString();
    const finished = pageCount === readPage ? true : false;

    const book = books.findIndex((book) => book.id === bookId);

    if (!name) {
        const res = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. Mohon isi nama buku'
        });
        res.code(400);
        return res;
    }

    if (readPage > pageCount) {
        const res = h.response({
            status: 'fail',
            message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
        })
        res.code(400);
        return res;
    }

    if (book !== -1) {
        books[book] = {
            ...books[book],
            name,
            year,
            author,
            summary,
            publisher,
            pageCount,
            readPage,
            reading,
            updatedAt,
            finished
        };

        const res = h.response({
            status: 'success',
            message: 'Buku berhasil diperbarui'
        });
        res.code(200);
        return res;
    }

    const res = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan'
    });
    res.code(404);
    return res;
};

module.exports = updateBookHandler;