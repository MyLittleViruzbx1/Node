
const empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Katherine'
    },
    {
        id: 3,
        nombre: 'Penelope'
    }
];



const saladios = [
    {
        id: 1,
        salario:1000
    },
    {
        id: 2,
        salario:2100
    },
    {
        id: 3,
        salario:900
    }
];


const getEmpleado = (id, callback) => {
    const empleado = empleados.find( e => e.id === id);
    if(empleado) {
        callback(null,empleado);
    }else{
        callback(`Empleado con id ${id} no existe.`);
    }
}

getEmpleado(1,(err,empleado) =>{

    if(err){
        console.log('Error');
        return console.error(err);
    }

    console.log('Empleado Encontrado');
    console.log(empleado);
})

