const fsmyz = require('fs');



console.clear();
console.log('============');
console.log('Table del 1');
console.log('============');

base = 7;

let salida = '';

for(let i = 1; i <= 10 ;i++ ){
    salida += `${base} x ${i} = ${i*base}\n`
}

console.log(salida)
fsmyz.writeFile(`tabla-${base}.txt`, salida,  (err) =>{
    if (err) throw err;
})
console.log(`Tabla-${base}.txt creado`)