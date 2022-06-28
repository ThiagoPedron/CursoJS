const path = require('path');
 const caminhoArquivo = path.resolve(__dirname, 'teste.json');
 const escreve = require('./modules/escrever');
 const ler = require('./modules/ler');


 async function lerArquivo(caminho) {
 const dados = await ler(caminho);
 transformaEmObjeto(dados);
 }

 function transformaEmObjeto(dados) {
 dados = JSON.parse(dados);
 dados.forEach(val => console.log(val));
 }

 lerArquivo(caminhoArquivo);