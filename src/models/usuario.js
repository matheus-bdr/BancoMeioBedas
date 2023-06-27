const Sequelize = require('sequelize');
const database = require('../db');
 
const User = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    sobrenome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    pais: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    }
})
 
module.exports = User;