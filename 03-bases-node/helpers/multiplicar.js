const { rejects } = require('assert');
const fs = require('fs');
const crearFile = ( base = 5 ) =>{

    return new Promise((resolve, reject)=>{
    
        
        console.log('=====================');
        console.log(`Tabla del ${base}`);
        console.log('=====================');
        
        let salida = '';
        
    
    for(numero = 1; numero <= 10; numero++){
            salida += `${base} x ${numero} = ${base*numero}\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync( `tabla-${base}.txt`, salida)
            // if(err) throw err;
            // console.log(`Archivo del ${base} creada`)
         
        
        // console.log(salida)
        resolve(`tabla-${base}.txt creado`);
        
    })
}
    
module.exports = {
    crearArchivo: crearFile
}