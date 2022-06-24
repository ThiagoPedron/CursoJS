/// declair
// const object = {
//     methodOfObject(){
//         console.log("Im a method into the object")
//     }
// }

// const funcionArrow = () => console.log("Anther way to declar a function");
// const funcionArrow2 = () => {
//     console.log("Can be declar like this too");
// }





// const Car = {
//     drive(speed,diraction){
//         const speedLimit = 150 
//         console.log("Speed: ",speed,"Diraction: ",diraction);
//         return speed >= speedLimit? "Infraction" : "Can go"
//     }
// }

// console.log(Car.drive(200,"Noth"))
// funcionArrow()
// funcionArrow2()
// object.methodOfObject();



// //// callBack


// function func1(callback){
//     setTimeout(function() {
//         console.log("First Function")
//         if(callback) callback()
//     },2500)
// }
// function func2(callback){
//     setTimeout(function() {
//         console.log("Second Function")
//         if(callback) callback()
//     },2000)
// }

// function func3(callback){
//     setTimeout(function() {
//         console.log("Third Function")
//         if(callback) callback()
//     },1000)
// }

// function end(){
//     console.log("End!");
// }

// func1(f1CallBack);

// function f1CallBack(){
//     func2(f2CallBack)
// }

// function f2CallBack(){
//     func3(f3CallBack)
// }
// function f3CallBack(){
//     end()
// }


// // factory Funcion

// function createPerson(name,height,weight){
//     return{
//         name : name,
//         height : height,
//         weight : weight,
//         imc(){
//             let number = (this.weight / this.height**2).toFixed(2)
//             return this.name + ' IMCs is ' + number
//         }
//     }
// }

// const person = createPerson("Thiago",1.9,81)
// console.log(person);
// console.log(person.imc());


// //// private mathod

// function Person (name,surname){
//     this.name = name;
//     this.surname = surname;


//     const privateMathod = () => console.log("This method is private and will not apear to be call");
//     this.method = () => {
//         console.log("This method can be called and can call internal methods");
//         privateMathod()
//     }
// }
// const person = new Person('Thiago','Pedron')
// person.method()



// //// GET E SET
// function Person (name,surname){
//   return{
//     name : name,
//     surname : surname,

//     get FullName(){
//         return `${this.name} ${this.surname}`;
//     },
//   };
// }
// const person = new Person('Thiago','Pedron')
// console.log(person.name);
// console.log(person.surname);
// console.log(person.FullName);
// person.FullName = "Another name"
// console.log("\n");


// // // Generation Function
// function* infinityGeneration(){
//     yield "1 Value"
//     yield "2 Value"
//     yield "3 Value"
//     yield "4 Value"
// }

// const  generator = infinityGeneration()
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());


// // // Recursive function

// function recursive(i){
//     if (i > 10 ) return
//     console.log(i)
//     i++
//     recursive(i)
// }
// recursive(0)



// object.defineProperties
// // enurable true or false
// // writable true or false
// // configurable true or false

// function Product (name,price,stock){
//     Object.defineProperties(this, {
//         name:{
//             enumerable:true,
//             value: name,
//             writable: false,
//             configurable: false
//         },
//         price:{
//             enumerable:true,
//             value: price,
//             writable: false,
//             configurable: false
//         },
//         stock:{
//             enumerable:false,
//             value: stock,
//             writable: false,
//             configurable: false
//         }
//     })
// }
// const p = new Product("Car",20,3)
// console.log(p);

// // Object.assign( ) é usado para criar um objeto juntando dois, caso queria apenas duplicar um objeto pode passar o primeiro como objeto vazio
// const Product = {name : "product", price:1.4}
// const cup = Object.assign({},Product)
// cup.name = "Cup"
// cup.price = 1.5
// console.log(cup);
// console.log(Product);
