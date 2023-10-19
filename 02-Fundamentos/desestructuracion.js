const gambito = {
    nombre: 'Remy ',
    apellido: 'LeBeau',
    poder: 'carga cinetica',
    getNombre: function (){
        return `${this,this.nombre} ${this.apellido} ${this.poder}`
    }

}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// console.log(deadpool.getNombre());



function ImprimirHeroe (heroe) {
    const {nombre, apellido, poder} = heroe
    console.log(nombre, apellido, poder);

}

ImprimirHeroe(gambito);


const heroes = ['deadpool', 'gambito', 'Batman'];

// const h1 = heroes[0];
// const h2 = heroes[1];
// const h3 = heroes[2];

const [h1, h2, h3] = heroes;

console.log(h1, h2, h3);