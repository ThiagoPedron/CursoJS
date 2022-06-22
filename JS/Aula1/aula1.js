const nums = [5,50,80,1,2,3,5,8,7,11,15,22,27]
//tira os 3 primeiros
const sliceNums = nums.slice(3)
// adiciona 5 valores na frente e concatena com o slice anterior
const addValuesNums = [-5,-3,-2,-1,0,...sliceNums]
// filtra os divisiveis por 3
const valuesFilter = addValuesNums.filter(v=> v%3 == 0)
// eleva os valores ao quadrado
const valuesMap = valuesFilter.map(v=>Math.pow(v,2))
//soma todos os valores e tira 200 do resultado final
const sumValues = valuesMap.reduce((preValue,currentValue) => preValue+currentValue,-200)



console.log(nums)

console.log(sliceNums)

console.log(addValuesNums)

console.log(valuesFilter)

console.log(valuesMap)

console.log(sumValues)



// EX 2



const impares = []
const pares = []
for(i=1;i<=10;i++){
    var num = Number(prompt(i+"° numero"))
    if(num%2!=0) impares.push(num)
    else pares.push(num)
}
impares.push(pares.shift())
const resul = []
impares.forEach(element => {
    if(element%impares.indexOf(element) == 0) resul.push(element)
})
pares.forEach(element => {
    if(element%pares.indexOf(element) == 0) resul.push(element)
});



console.log(impares)
console.log(pares)
console.log(resul)










