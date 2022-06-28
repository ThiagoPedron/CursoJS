const {nome,sobrenome,nomeCompleto} = require('./Export')

console.log(nome,sobrenome);
nomeCompleto()

const path = require('path')
console.log(__filename);
console.log(path.resolve(__dirname));
