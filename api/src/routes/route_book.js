const { addBook, getAllBooks, deleteBook, addNumberToBooks } = require("../controllers/book_controller");

const router = require("express").Router();

// routes<<<
router.get('/', getAllBooks);
router.post('/add_book', addBook);
router.delete('/delete_book/:id', deleteBook);
router.put('/add_numbers_book', addNumberToBooks);


module.exports = router;