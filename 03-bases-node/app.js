const { crearArchivo } = require('./helpers/multiplicar');
// const  argv = require('yargs');

const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true
                })
                // .check((argv, options) =>{
                //    if(isNaN(argv.b)){
                //     throw "La base tiene que ser un numero";
                //    }
                //    return true  ;
                // // console.log('YARGS', argv)
                // })
                .argv;

console.clear();


// const [,,arg3='base=5'] = process.argv;
// const [, base = 5] = arg3.split('=')


// console.log(process.argv)
// console.log(process.argv);
console.log(argv)
// const base = 12;

console.log('base: yargs', argv.base)

crearArchivo(argv.b)
    .then(nombreArchivo =>console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));



