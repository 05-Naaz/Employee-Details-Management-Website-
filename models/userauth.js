const {Sequelize} = require("sequelize");
const sequelize = require('../database');

const UserAuth = sequelize.define("user_auth", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true,
  },
  adminid: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
  }

},
{
  timestamps:false,
  freezeTableName: true
});

module.exports = UserAuth;