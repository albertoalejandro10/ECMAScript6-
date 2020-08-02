//ES6 Junio(2016) - Novedades: Default params, templates, let y const, Spread Operator, Destructuring y Arrow Functions.

//Default Params Older version
function newFunction(name, age, country){
    var name = name || "Oscar";
    var age = age || 32;
    var country = country || 'MX';
}

//Default Params Newest version
function newFunction2(name="Alberto", age = 23, country="Venezuela"){
    console.log(name, age, country);
}

newFunction2();
newFunction2('Raquel', age = 23);


//Concatenacion Older version
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Concatenacion Newest version
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Older ES5
let lorem = "Qui consequatur. Commodi. Ipsum ver duis yet minima \n"
+ "otra frase epica que necesitamos."

//Newest ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name': 'Yadilis',
    'age': 62,
    'country': 'VE'
}
//Destructuring Older
console.log(person.name, person.age);

//Destructuring Newest version
let {age} = person;
console.log(age);


//Let y const
{var globalVar = "Global Var";}
//{let globalLet = "Global Let";}
{let globalLet = "Global Let";
console.log(globalLet)}


console.log(globalVar);
console.log(globalLet);

const a = "b";
a = "a";
console.log(a) //No se puede reasignar dicha variable debido a que es una variable constante