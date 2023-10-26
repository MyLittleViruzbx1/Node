const fs = require('fs');
const crearFile = ( base = 5 ) =>{

    let salida = '';

    console.log('=====================');
    console.log(`Tabla del ${base}`);
    console.log('=====================');

    for(numero = 1; numero <= 10; numero++){
        salida += `${base} x ${numero} = ${base*numero}\n`;
    }

    console.log(salida);

    fs.writeFileSync( `tabla-${base}.txt`, salida, (err) => {
        if(err) throw err;
        console.log(`Archivo del ${base} creada`)
    } )

    console.log(salida)

}

module.exports = {
    crearArchivo: crearFile
}