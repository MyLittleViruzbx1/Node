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
];

const getEmpleado = (id, callback) => {

   return new Promise( (resolve, reject)=>{
        //cuerpo de la promesa
        const empleado = empleados.find( (e) => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
        :reject(`No existe empleado con id ${id}`)
   });
}



const getSalario = (id, callback) => {
    return new Promise ((resolve, reject) =>{

        const salario = salarios.find( s => s.id === id )?.salario;
        (salario)
            ? resolve(salario)
            :reject(`No existe saladio con id ${id}`)
    });
}


const id =11;

// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err) );

//     getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err) );

//Promesas en cadena
let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
       return getSalario(id)
    })
    .then(salario => console.log('El empleado:', nombre, 'Tiene un salario de:',salario ))
    .catch(err => console.log(err));