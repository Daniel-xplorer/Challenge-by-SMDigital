const { user, book } = require("../database/db")

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await user.findAll({
      include: {
        model: book
      }
    });
    res.json({allUsers})
  } catch (err) {
    console.log('error en getallUsers', err);
    res.status(500).json(err);
  };
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await user.findAll({
      where: {
        id: id
      }
    });
    res.json({response});
  } catch (err) {
    console.log('error en getoneUsers', err);
    res.status(500).json(err);
  };
};

const addUser = async (req, res) => {
  const { id, fullname, username } = req.body;
  try {
    const newUser = await user.create({
      id: id,
      fullname: fullname,
      username: username
    });
    res.json({newUser})
  } catch (err) {
    console.log('error en adduser', err);
    res.status(500).json({error: err});
  };
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await user.destroy({
      where: {
        id: id
      }
    });
    res.json({userDeleted: response})
  } catch (err) {
    console.log('error en deletes', err);
    res.status(500).json(err);
  };
};

const userGetBook = async (req, res) => {
  const { userId, bookId } = req.body;
  try{
    const currentlyBook = await book.findByPk(bookId);
    if (currentlyBook.number > 0) {
      const currentlyUser = await user.findOne({
        where: {
          id: userId
        }
      });
      await currentlyUser.addBook(currentlyBook);
      await currentlyBook.update({
        number: currentlyBook.number - 1
      });
      console.log("usergetbook", currentlyBook)
      res.json({ succesfully: 'yes' });
    } else {
      res.json({ error: {
        data: "No hay libros para prestar",
        cod: 4001
      }});
    };
  } catch (err) {
    console.log('error en userGetBook', err);
    res.status(500).json(err);
  };
};

const userReturnBook = async (req, res) => {
  const { userId, bookId } = req.body;
  try {
    const currentlyBook = await book.findByPk(bookId);
    await book.update({
      number: currentlyBook.number + 1
    },{
      where: { id: bookId }
    })
    const currentlyUser = await user.findByPk(userId);
    currentlyUser.removeBook(currentlyBook)
    res.json(currentlyUser);
  } catch (err) {
    console.log(err);
  };
};

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  deleteUser,
  userGetBook,
  userReturnBook
};