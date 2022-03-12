const { DataTypes } = require("sequelize");

module.exports = sequelize => {
  sequelize.define('user', {
    fullname: { type: DataTypes.STRING },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    id: { type: DataTypes.INTEGER, primaryKey: true, allownull: false }
  })
};