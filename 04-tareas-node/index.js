require('colors');
const { inquirerMenu } = require('./helpers/inquirer');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main =async() =>{
    console.log('first')
    do {
        
        // opt = await mostrarMenu();
        opt = await inquirerMenu();
        console.log({opt})
       if(opt !== '0') await pausa();
    } while (opt !== '0');
    // pausa();
}

main();