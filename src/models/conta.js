const Sequelize = require('sequelize');
const database = require('../db');
 
const Conta = database.define('conta', {
    idUnico: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        
    },
    dono: {
        type: Sequelize.STRING,
        
        
    },
    criacao: {
        type: Sequelize.STRING,
        
    },
    saldo: {
        type: Sequelize.FLOAT,
        
    },
    contatype: {
        type: Sequelize.STRING,
       
   
    },
    senha:{
        type: Sequelize.STRING,
        
    },
/*     operacao:{
        type: Sequelize.STRING,
        allowNull: true
    },
    destinatarioTransferencia:{
        type: Sequelize.STRING,
        allowNull: true
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: true
    }, */
});
 
module.exports = Conta;
