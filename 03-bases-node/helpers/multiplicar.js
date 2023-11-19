const { rainbow } = require('colors');
const fsmyz = require('fs');
let colors = require('colors');
const crearArchivo = (base = 5, listar = false, hasta = 10) =>{
    
    return new Promise((resolve, reject) =>{

        try {
            
            let salida, consola= '';
            
            for(let i = 0; i <= hasta ;i++ ){
                salida += `${ base } x ${i} = ${ i * base}\n`
                consola += `${ base } ${'x'.green} ${i} ${'='.green} ${i*base}\n`
            }
            if(listar){
                console.log('============' .green);
                console.log(`Tabla del `, colors.blue(base));
                console.log('============' .green);

                console.log(consola)
            }
            fsmyz.writeFileSync(`./salida/tabla-${base}.txt`, salida);
          
            resolve(`Tabla-${base}.txt creado`);

        } catch (error) {
            console.log(error)
        }
        
    })
}

module.exports = {
    crearArchivo
}