require('color');

const mostrarMenu = () =>{
    console.clear();
    console.log('========================'.green);
    console.log('Selecccione una opcion'.green);
    console.log('========================\n'.green)
    console.log(`${1.} Crear una tarea`);
    console.log(`${2.} Listar tareas`);
    console.log(`${3.} Listar tareas copletadas`);
    console.log(`${4.} Listar tareas pendientes`);
    console.log(`${5.}Completar tarea(s)`);
    console.log(`${6.} Borrar tarea`);
    console.log(`${0.} Salir\n`);
}

module.exports = {
    mostrarMenu
}