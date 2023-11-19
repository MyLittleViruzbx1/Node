const { rainbow } = require('colors');
const fsmyz = require('fs');
let colors = require('colors');
const crearArchivo = (base = 5, listar = false) =>{
    
    return new Promise((resolve, reject) =>{

        try {
            
            let salida = '';
            
            for(let i = 1; i <= 10 ;i++ ){
                salida += `${base } ${'x'.green} ${i} ${'='.green} ${i*base}\n`
            }
            if(listar){
                console.log('============' .green);
                console.log(`Tabla del ${base}`.rainbow);
                console.log('============' .green);
                console.log(salida)
            }
            fsmyz.writeFileSync(`tabla-${base}.txt`, salida .green);
          
            resolve(`Tabla-${base}.txt creado`);

        } catch (error) {
            console.log(error)
        }
        
    })
}

module.exports = {
    crearArchivo
}