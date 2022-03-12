const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  sequelize.define('book', {
    name: { type: DataTypes.STRING, allowNull: false },
    number: { type: DataTypes.INTEGER },
    description: { type: DataTypes.TEXT },
    id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true }
  },{timestamp: false})
};