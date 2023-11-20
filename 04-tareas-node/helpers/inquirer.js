require('colors');
// const inquirer = require('inquirer');
const inquirer = require('inquirer');
// import inquirer from 'inquirer';


const menuOps = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: ['opt1', 'opt2', 'opt3']
    }
]

const inquirerMenu = async() =>{

    console.clear();

    console.log('=========================='.green);
    console.log('   Seleccione una opcion  '.green)
    console.log('==========================\n'.green);

   const opt = await inquirer.prompt(menuOps);

    return opt;

}



module.exports = {
    inquirerMenu
}