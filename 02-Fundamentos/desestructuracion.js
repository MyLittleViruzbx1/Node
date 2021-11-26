const deadpool = {
    nombre: 'Wade',
    apellido: 'Winswon',
    poder: 'Regeneracion',
    getNombre () {
        return ` ${this.nombre} ${this.apellido} ${this.poder}`;
    }
}


// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;


function imprimeHeroe ( {nombre, apellido, poder, edad=21} ){
    nombre = 'Willy';
    console.log(nombre,apellido,poder, edad);
}



// console.log(deadpool.getNombre());

// imprimeHeroe(deadpool);

const heroes = ['Deadpool', 'Superman', 'Batman', 'Linterna Verde'];



// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];


const [rojo,azul,verde] = heroes;

console.log(rojo, azul, verde);