const books = require('../books');

const getDetailBookHandler = (req, h) => {
    const { bookId } = req.params;
    const book = books.filter(book => book.id === bookId)[0];

    if (book !== undefined) {
        return {
            status: 'success',
            data: {
                book,
            },
        };
    }

    const res = h.response({
        status: 'fail',
        message: 'Buku tidak ditemukan',
    });
    res.code(404);
    return res;
}

module.exports = getDetailBookHandler;