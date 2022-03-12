const { Sequelize } = require("sequelize");
const model_book = require("./models/model_book");
const model_user = require("./models/model_user");


//Connection URI
const sequelize = new Sequelize('postgres://DanielAmado:1004148762@localhost:5432/smdb', {
  logging: false
});

// Models use by sequelize
model_user(sequelize);
model_book(sequelize);

const { user, book } = sequelize.models;

// Associations
user.belongsToMany(book, { through: 'borrowed_books' });
book.belongsToMany(user, { through: 'borrowed_books' });

module.exports = {
  ...sequelize.models,
  db: sequelize
};