const {Sequelize,DataTypes} = require('sequelize')
const sequelize = require('../database');


const RegisterAdmin = sequelize.define('adminRegister',{
    id:{
    
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false,

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
    gender:{
        type:Sequelize.STRING,
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

module.exports = RegisterAdmin;