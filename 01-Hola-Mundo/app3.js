console.log('Inicio de programa');//1

setTimeout(() =>{
    console.log('Primer TImeout')//5
},3000);

setTimeout(() =>{
    console.log('Segundo TImeout')//2
},0);

setTimeout(() =>{
    console.log('Tercer TImeout')//3
},0);


console.log('Fin de programa');//4