const {Sequelize} = require("sequelize");
const sequelize = require('../database');

const EmployeeAuth = sequelize.define("employee_auth", {
  id: {
    type: Sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey:true,
  },
  employeeid: {
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

module.exports = EmployeeAuth;