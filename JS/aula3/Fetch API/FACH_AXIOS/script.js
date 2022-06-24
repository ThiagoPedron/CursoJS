// usando o fetch
fetch('pessoas.json') // esta chamando o dados do arquivo
    .then(resposta => resposta.json()) // esperando a resposta e configurando ela para um formato json
    .then(json => carregaElementosNaPagina(json)); // uma nova promise que chama uma função

function carregaElementosNaPagina(json) {
    const table = document.createElement('table'); // define a criação de uma tabela no html

    for (let pessoa of json) { // para cada elemento do json "pessoa", vai repetir a execução
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); // adiciona a tabela definida acima na div resultado
}
axios('pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table'); // define a criação de uma tabela no html

    for (let pessoa of json) { // para cada elemento do json "pessoa", vai repetir a execução
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = pessoa.nome;
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = pessoa.idade;
        tr.appendChild(td2);

        table.appendChild(tr);
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table); // adiciona a tabela definida acima na div resultado
}

// // /// usando o axios

// axios('pessoas.json')
//     .then(resposta => carregaElementosNaPagina(resposta.data));

// function carregaElementosNaPagina(json) {
//     const table = document.createElement('table'); // define a criação de uma tabela no html

//     for (let pessoa of json) { // para cada elemento do json "pessoa", vai repetir a execução
//         const tr = document.createElement('tr');

//         let td1 = document.createElement('td');
//         td1.innerHTML = pessoa.nome;
//         tr.appendChild(td1);

//         let td2 = document.createElement('td');
//         td2.innerHTML = pessoa.idade;
//         tr.appendChild(td2);

//         table.appendChild(tr);
//     }

//     const resultado = document.querySelector('.resultado');
//     resultado.appendChild(table); // adiciona a tabela definida acima na div resultado
// }