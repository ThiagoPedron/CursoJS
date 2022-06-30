const ModelProduto = require('../models/produto');
module.exports =
{
    async Create(req, res) {

        try {
            const prod = await ModelProduto.create(
                {
                    Descricao: req.body.Descricao,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacao: null
                }
            );
            return res.json(prod);
        }
        catch (erro) {
            return console.error("Error na Create :", erro);
        }
    },

    async Delete(req, res) {
        try {
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            await prod.destroy();
            return res.json("Deletado com sucesso!");
        }
        catch (erro) {
            return console.error("Error na Delete :", erro);
        }
    },
    async List(req,res) {
        try {
            const prod = await ModelProduto.findAll();
            return res.json(prod)
        }
        catch (erro) {
            return console.error("Error no Select :", erro);
        }
    },
    async Update(req, res) {

        try {
            const prod = await ModelProduto.update(
                {
                    Descricao: req.body.Descricao,
                    DataAtualizacao: req.body.DataAtualizacao,
                },{
                    where : {Codigo : req.body.Codigo}
                }
            );
            return res.json(prod);
        }
        catch (erro) {
            return console.error("Error na Atualizar :", erro);
        }
    },
    async GetOne(req,res){
        try{
            const prod = await ModelProduto.findByPk(req.body.Codigo);
            return res.json(prod);
        }
        catch (erro) {
            return console.error("Error na Bucar  :", erro);
        }
    },
    async GetOneByName(req,res){
        try{
            const prod = await ModelProduto.findOne({
                where: {Descricao: req.body.Descricao}
            });
            return res.json(prod);
        }
        catch (erro) {
            return console.error("Error na Bucar  :", erro);
        }
    }
}


