const sequelize = require('sequelize');
const database = require('../db');
const Usuario   =  require('./usuario')
const schema = '';

class Contato extends sequelize.Model{}
    Contato.init({
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
        Telefone :{
            type: sequelize.STRING,
            allowNull: false
        },
        UsuarioID:{
            type: sequelize.INTEGER,
            allowNull: false,
            references : {
                model : Usuario,
                key:'Id'
            }
        }
    },
        {
            sequelize: database, modelName: 'tbContato', schema
        }
    )
    model.exports = Usuario;
    
