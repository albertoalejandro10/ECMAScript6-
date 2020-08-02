//ES8: - Novedades: Object entries, Object Values, Padding y Trailing-Comas

//Object entries
const data = {
    front: 'Alberto',
    backend: 'Alejandro'
}

const matriz = Object.entries(data);
console.log(matriz);

//Object values

const data = {
    front: 'Alberto',
    backend: 'Alejandro',
}

const matriz = Object.values(data);
console.log(matriz);
console.log(matriz.length);

//Padding
const string = 'Hello';
console.log(string.padStart(7, 'Hi'));
console.log(string.padEnd(12,  ' ------'));
console.log('food'.padEnd(12, ' ------'));

