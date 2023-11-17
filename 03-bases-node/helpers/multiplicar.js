const fsmyz = require('fs');




const crearArchivo = (base = 5) =>{
    
    return new Promise((resolve, reject) =>{
        

        try {
            
            console.log('============');
            console.log(`Tabla del ${base}`);
            console.log('============');
            
            let salida = '';
            
            for(let i = 1; i <= 10 ;i++ ){
                salida += `${base} x ${i} = ${i*base}\n`
            }
            
            console.log(salida)
            fsmyz.writeFileSync(`tabla-${base}.txt`, salida);
            resolve(`Tabla-${base}.txt creado`);

        } catch (error) {
            console.log(error)
        }
        
       
    })
}

module.exports = {
    crearArchivo
}