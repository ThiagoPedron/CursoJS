const sequelize = require('sequelize');
const database = require('../db');
const schema = '';
//Model é uma abstração que representa uma tabela
class Produto extends sequelize.Model { }
Produto.init(
    {
        //Campos da nossa tabela
        Codigo:
        {
            type: sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Descricao:
        {
            type: sequelize.STRING,
            allowNull: true
        },
        DataCriacao:
        {
            type: sequelize.DATE,
            allowNull: false
        },
        DataAtualizacao:
        {
            type: sequelize.DATE,
            allowNull: true
        }
    },
    //Definição da tabela tbProduto
    {
        sequelize: database, modelName: 'tbProduto', schema
    }
)
module.exports = Produto;
