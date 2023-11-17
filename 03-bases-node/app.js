
const {crearArchivo} = require('./helpers/multiplicar')

const argv = require('yargs').argv;

console.clear();


// base = 5;

// const [,,arg3= 'base=3'] = process.argv;
// const [, base = 5] = arg3.split('=');



console.log(process.argv)
console.log(argv)


console.log('base: yargs', argv.base)

// console.log(base);

// crearArchivo(base)
//     .then(nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch(err => console.log(err) );