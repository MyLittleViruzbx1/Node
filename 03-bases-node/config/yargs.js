const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: true,
        describe: 'Muestra la table en consola'
    })
    .option('h',{
        alias:'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero tope de la tabla'
    }
    )
    .check((argv, options) =>{
    if(isNaN(argv.b)){
        throw 'La base debe ser un numero'
    }
    return true;
    })
.argv;


module.exports = argv;