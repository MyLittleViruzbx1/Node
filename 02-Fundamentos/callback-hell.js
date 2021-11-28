
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


const getEmpleado = (id, callback) => {

    const empleado = empleados.find( (e) => e.id === id)?.nombre;

    if(empleado) {
        callback(null,empleado);
    }else{
        callback(`Empleado con id ${id} no existe.`);
    }
}


//Tareas de salario
const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;//en vez de e era cualquier letra s 
    //puse pero se puede cualquiera es por buenas practicas que sea diferente

    if(salario) {
        callback(null,salario);
    }else{
        callback(`Salario con id ${id} no existe.`);
    }
}
const id =3;

getEmpleado(1,(err,empleado) =>{

    if(err){
        console.log('Error');
        return console.error(err);
    }
    // console.log('Empleado Encontrado');
    // console.log(empleado.nombre);

    getSalario (id, (err, salario)=>{
        if(err){
            return console.log(err);
        }
        console.log('El empleado: ', empleado, 'Tiene un salario de: ', salario);
    })
    
})

//xxxxxxxxxxxxxcxczcxzczxcz
// getSalario (id, (err, salario)=>{
//     if(err){
//         return console.log(err);
//     }
//     console.log(salario);
// })
