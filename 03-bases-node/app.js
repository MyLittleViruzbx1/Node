const willyfs = require('fs');

console.clear();
console.log("================================");
const numero = 4
console.log(`Tabla del ${numero}`)
console.log("================================");

// tarea hacer la tabla del 5
let salida = '';
for(i=1; i<=10; i++){
    // console.log(numero + " * " + i + ' = ' + numero*i)
    salida +=`${numero} x ${i} = ${numero*i}\n`;
}

console.log(salida);


willyfs.writeFile(`tabla-${numero}.txt`,salida,(err)=>{
    if(err) throw err;
    console.log(`tabla-${numero}.txt creado`);
});
