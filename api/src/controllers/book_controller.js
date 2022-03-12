const { book } = require("../database/db")

const getAllBooks = async (req, res) => {
  try {
    const books = await book.findAll();
    res.json(books);
  } catch (err) {
    console.log('error en obtener libros', err);
    res.status(500).json(err)
  };
};

const addBook = async (req, res) => {
  const { name, number, description, id } = req.body;
  try {
    const newBook = await book.create({
      name: name,
      number: number,
      description: description,
      id: id
    });
    res.json(newBook);
  } catch (err) {
    console.log('error en addbook', err);
    res.status(500).json(err)
  };
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await book.destroy({
      where: {
        id: id
      }
    });
    res.json({bookDeleted: deleted});
  } catch (err) {
    console.log('error en deletebook', err);
    res.status(500).json(err);
  };
};

const addNumberToBooks = async (req, res) => {
  const { id, newNumber } = req.body;
  try {
    const currentlyBook = await book.findByPk(id)
    let newNumberBooks = parseInt(newNumber) + parseInt(currentlyBook.number);
    if (newNumberBooks > 0) {
      const increment = await book.update({
        number: newNumberBooks
      },{
        where: {
          id: id
        }
      });
      res.json({ 'increment': newNumber })
    } else {
      res.json({ error: {
        data: 'Dont have enough books in database',
        cod: 4002
      } })
    }
  } catch (err) {
    console.log('error en addbooks', err);
    res.status(500).json(err);
  };
};

module.exports = {
  getAllBooks,
  addBook,
  deleteBook,
  addNumberToBooks
}