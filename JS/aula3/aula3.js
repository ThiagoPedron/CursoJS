// function wait(msg,time){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("- Resolvido")
//         }, time);
//     })
// }

// const promises = [
//     'Primeiro Valor',
//     wait('Promise 1',2000),
//     wait('Promise 2', 500),
//     wait('Promise 3', 4000),
//     'Outro Valor'
// ]

// Promise.all(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch (function (erro){
//         console.log(erro);
//     })

//     Promise.race(promises)
//     .then(function(valor){
//         console.log(valor)
//     })
//     .catch (function (erro){
//         console.log(erro);
//     })


function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function wait(msg, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg);
        }, time);
    });
}
async function executa() {
    try {
        const fase1 = await wait('Fase 1', rand(1, 5));
        console.log(fase1);
        const fase2 = await wait('Fase 2', rand(1, 5));
        console.log(fase2);
        const fase3 = await wait('Fase 3', rand(1, 5));
        console.log(fase3);
        executa();
    } catch (e) {
        console.log(e)
    }
}
executa();