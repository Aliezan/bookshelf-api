const books = require('../books');

const deleteFinishedBookHandler = (req, h) => {
    const { bookIdWithFinishedReading } = req.params;

    const finishedBook = books.findIndex((book) => book.finished === bookIdWithFinishedReading);

    if (finishedBook !== -1) {
        books.splice(finishedBook, 1);
        const res = h.response({
            status: 'success',
            message: 'Buku berhasil dihapus',
        });
        res.code(200);
        return res
    }
}