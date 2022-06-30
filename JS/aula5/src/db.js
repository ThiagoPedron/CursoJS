const sequelize = require('sequelize');

//configurações da base de dados
const database = new sequelize('testeJs', 'tnpUser', 'etsds10240305',

    {
        dialect: 'mssql', host: 'CTPC3622', port: 1433
    });
database.sync();

module.exports = database;
