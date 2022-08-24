const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../database');


const RegisterEmployee = sequelize.define('employeeRegister',{
    id:{
    
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    firstName:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull:false,
    
    },
  mobileNumber:{
        type: Sequelize.STRING,
        allowNull:false,
},
    email:{
        type: Sequelize.STRING,
        allowNull:false,
     
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
        
    },
    address:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    experience:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    designation:{
        type:Sequelize.STRING,
        allowNull:false,

    },
    salary:{
        type: Sequelize.INTEGER,
        allowNull:false,
    },
    image:{
        type:Sequelize.TEXT,
        allowNull:false,

    },
 
 
},
{
    freezeTableName:true,
    timestamps:false

});

module.exports = RegisterEmployee;