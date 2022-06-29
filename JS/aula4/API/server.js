// const express = require('express');
// const app = express();
// const routes = require('./routes');
// app.use(express.urlencoded({ extended: true }));
// app.set('views','./src/views');
// app.set('view engine','ejs');
// app.use(routes);
// app.listen(3000, () => console.log("Acessar http://localhost:3000"));

const express = require('express');
const app = express();

const sql = require('mssql/msnodesqlv8')

const pool = new sql.ConnectionPool({
    database: "testeJs",
    server: "CTPC3622",
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true
    }
})

pool.connect().then(() => {
    pool.request().query(`CREATE TABLE Users ( id int PRIMARY KEY IDENTITY(1,1), nome varchar(60))`, (err, result) => {

        if (err) console.log(err);

        else {
            console.dir(result.recordset);
            app.emit('pronto');
        }
    });
    
});


function InsereDados(){
    pool.connect().then(() => {
        pool.request().query(`INSERT INTO Users(nome) VALUES ('Thiago')`, (err,result)=> {
            if(err) console.log(err);
            else{
                console.dir(result.recordset);
                app.emit('pronto');
            }
        });
    });
}


const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000");
        console.log("Servidor executando na porta 3000");
    });
});