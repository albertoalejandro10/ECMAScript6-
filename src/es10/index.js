//Novedades ES10 - Junio, 2019 || flat, flatmap, trimStart and trimEnd, try/catch, Object.fromEntries y Symbol.


//Flat
let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2))

//FlatMap
//mapear cada elemento, luego pasarle una funcion y aplanar
let array = [1,2,3,4,5];
console.log(array.flatMap(value => [value, value * 2]));

//Trim
let hello = '                      hello world';
console.log(hello);
console.log(hello.trimStart()); // inicio

let hello = 'hello world                  ';
console.log(hello);
console.log(hello.trimEnd()); // final

//optional catch biding
try {
    
} catch /*(error) ya no es necesario colocarlo*/{
    error
}

//fromEntries
// array to object
let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))

//symbol object
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);