
function verificaSequencia(cpf){
    cpf = cpf.replace("-",".").replaceAll(".","")
   const array = cpf.split(".")
   var regex = /^(\d)\1+$/;
   var resultado = array.map(function (str) {
    return regex.test(str)
});
    return resultado.includes(true)? false : validaCPF(cpf)
}

function validaCPF(entrada){
    var sum = 0
    var cont = 10
    var cpf = Array.from(entrada)
    const digitoVerificador = [...cpf.splice(-2,2)]
    console.log(cpf)
    
    cpf.forEach(element => {
        var mult = Number(element) * cont
       sum += mult 
       cont--
       
    });

    const verifica = [(11-sum%11 > 9? 0 : 11-sum%11).toString()]
   
    cont = 11
    sum = 0
    cpf.push(digitoVerificador[0])
    cpf.forEach(element=>{
        var mult = Number(element) * cont
        sum += mult 
        cont--
    })
    verifica.push((11-sum%11 > 9? 0 : 11-sum%11).toString())
    console.log(verifica,digitoVerificador);
    return JSON.stringify(verifica)==JSON.stringify(digitoVerificador)? true : false
    
}

