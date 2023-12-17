const books = require('../books');

const getAllBooksHandler = (req, h) => {
    const { reading, finished, name } = req.query;

    if (reading === '1') {
        const readingBooks = books.filter((book) => book.reading === true);
        const formattedBooks = readingBooks.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }))

        const res = h.response({
            status: 'success',
            data: {
                books: formattedBooks
            }
        });

        return res;
    }

    if (reading === '0') {
        const unreadingBooks = books.filter((book) => book.reading === false);
        const formattedBooks = unreadingBooks.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }))

        const res = h.response({
            status: 'success',
            data: {
                books: formattedBooks
            }
        });

        return res;
    }

    if (finished === '1') {
        const finishedBooks = books.filter((book) => book.finished === true);
        const formattedBooks = finishedBooks.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }))


        const res = h.response({
            status: 'success',
            data: {
                books: formattedBooks
            }
        });

        return res;
    }

    if (finished === '0') {
        const unfinishedBooks = books.filter((book) => book.finished === false);
        const formattedBooks = unfinishedBooks.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }))


        const res = h.response({
            status: 'success',
            data: {
                books: formattedBooks
            }
        });

        return res;
    }

    if (name) {
        const filteredBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
        const formattedBooks = filteredBooks.map((book) => ({
            id: book.id,
            name: book.name,
            publisher: book.publisher,
        }))


        const res = h.response({
            status: 'success',
            data: {
                books: formattedBooks
            }
        });

        return res;
    }



    const response = books.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
    }));

    return {
        status: 'success',
        data: {
            books: response,
        },
    };

}


module.exports = getAllBooksHandler;