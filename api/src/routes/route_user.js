const { getAllUsers, getOneUser, addUser, deleteUser, userGetBook, userReturnBook } = require("../controllers/user_controller");

const router = require("express").Router();

//routes<<<
router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/add_user', addUser);
router.delete('/delete/:id', deleteUser);
router.put('/borrow_book', userGetBook);//
router.put('/return_book', userReturnBook);

module.exports = router