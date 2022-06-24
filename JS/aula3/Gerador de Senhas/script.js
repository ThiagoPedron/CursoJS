function geraLetras(min, max) {
    return String.fromCharCode(random(min, max))
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}

function senha(size, [mai, min, num, sim]) {
    let senha = ''
    for (let i = 0; i < size; i++) {

        if (mai) senha += geraLetras(65, 90)
        if (min) senha += geraLetras(97, 122)
        if (num) senha += geraLetras(48, 57)
        if (sim) senha += geraLetras(33, 47)
    }
    return senha.slice(0, size).shuffle()
}

function GeraSenha() {
    var input = Number(document.querySelector('#number').value)
    var checkboxes = document.getElementsByName('caracter');
    var selected = [];
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            selected.push(true);
        }
        else {
            selected.push(false);
        }
    }
    
     if (verificaTamanho(input, selected)) document.getElementById('senha').textContent = senha(input, selected)

}
function verificaTamanho(input, selected) {
    var cont = 0
    selected.forEach(element => {
        if (element) cont++
    });

    if (Number(input) == "" || Number(input) >= 99999) {
        alert("Tamanho inválido!")
        return false
    }
    else if (cont == 0) {
        alert("Selecione um parâmentro!")
        return false
    }
    else if (Number(input) < cont) {
        alert("Tamanho não comporta todos os parâmentros selecionados!")
        return false
    }
    else return true
}


function Copiar() {
    var copyText = document.getElementById("senha");
    document.getElementById("copia").title = "copiado"
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
}