
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

const id = 3;

const getEmpleado = (id )=>{

   return new Promise( (resolve, reject)=>{

        const empleado = empleados.find( e => e.id === id)?.nombre;
         (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`);
    });

}



let nombre;

getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
       return getSalario(id) 
    })
    .then(salario => console.log('El empleado:', nombre, 'tiene un salario', salario))
    .catch( err => console.log(err))


    const getSalario = (id) =>{

        return new Promise((resolve, reject)=>{
    
            const salario = salarios.find(s => s.id === id)?.salario;
            
            (salario)
                ? resolve(salario)
                : (`El salario con ${id} no existe`)
            
        })
    }



const getInfoUsuario = async(id) =>{

    try {    
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario de: ${empleado} es de ${salario}`;
    }
    catch (error) {
        return error;
        // throw error;
    }
}

getInfoUsuario(id)
.then( msj => console.log(msj))
.catch( err => console.log(err))