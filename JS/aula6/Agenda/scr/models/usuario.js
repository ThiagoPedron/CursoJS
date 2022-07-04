const sequelize = require('sequelize');
const database = require('../db');
const schema = '';

class Usuario extends sequelize.Model{}
    Usuario.init({
        Id:{
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome :{
            type: sequelize.STRING,
            allowNull: false
        },
        Sobrenome :{
            type: sequelize.STRING,
            allowNull: false
        },
        Email :{
            type: sequelize.STRING,
            allowNull: false
        },
        Senha :{
            type: sequelize.STRING,
            allowNull: false
        }
    },
        {
            sequelize: database, modelName: 'tbUsuario', schema
        }
    )
    model.exports = Usuario;
    
