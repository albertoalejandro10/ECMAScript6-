//ES7 - Novedades: includes y operador de exponenciacion
//Includes
let numbers = [1,2,3,4,10,5]

if(numbers.includes(7)){
    console.log('Si se encuentra el valor 7')
}else{
    console.log('No se encuentra el valor')
}

//Exponencial

let base = 4;
let exponent = 3;

let resultado = base ** exponent;
console.log(resultado);