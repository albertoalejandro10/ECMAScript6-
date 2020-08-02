//ES6: Arrow Functions.

let name = "Alberto"
let age = 23;
//es5
obj = {name: name, age: age};
//es6
obj2 = {name, age};
console.log(obj2);


// Arrow Functions
const names = [
    {name: 'Alberto', age: 23},
    {name: 'Lionel', age: 27},
]

// let listOfNames = names.map(function(item){
//     console.log(item.name);
// });


// let listOfNames2 = names.map(item=>console.log(item.name));

let listOfNames3 = (names) => {
    console.log(item.name);
}


const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('Hey!!');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hola'))
    .catch(error => console.log(error));


    //Clases

    class Calculadora{
        constructor(){
            this.valueA = 0;
            this.valueB = 0;
        }
        sum(valueA, valueB){
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new Calculadora();
    console.log(calc.sum(2, 2));

    import hello from './module'
    hello();
