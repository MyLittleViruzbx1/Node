
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
        nombre: 'Mary'
    }
];



const salarios = [
    {
        id: 1,
        salario:1000
    },
    {
        id: 2,
        salario:2100
    },
    // {
    //     id: 3,
    //     salario:900
    // }
];

const getEmpleado = (id, callback)=>{
    const empleado = empleados.find( e => e.id === id)
    if(empleado){
        callback(null, empleado);
    }else{
        callback(`El empleado con ${id} no existe`);
    }
    }


const getSalario = (id, callback) =>{
    const salario = salarios.find(s => s.id === id)?.salario
    if(salario){
        callback(null, salario);
    }else{
        callback(`El salario con ${id} no existe`)
    }

}

getSalario(11, (err, salario) =>{
    if(err){
        console.log("Error!");
        return console.log(err);
    }else{
        console.log('salario existe');
        console.log(salario)
    }
});


getEmpleado(11, (err, empleado) =>{
    if( err ){
        console.log('Error!');
        return console.log(err);
    }else{
        console.log('Empleado existe')
        console.log(empleado.nombre)
    }
});