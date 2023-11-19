
// const { number, argv, option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
let colors = require('colors');
console.clear();


// base = 5;

// const [,,arg3= 'base=3'] = process.argv;
// const [, base = 5] = arg3.split('=');



// console.log(process.argv)
console.log(argv)


// console.log('base: yargs', argv.base)

// console.log(base);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.green) )
    .catch(err => console.log(err) );
