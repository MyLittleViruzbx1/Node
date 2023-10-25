// setTimeout(function() {
//     console.log('Hola Mundo')
// },1000);


const getUsuario = (id, callback) => {
    const usuario = {
        id,
        nombre: 'WIlly'
    }
    setTimeout(()=> {
        callback(usuario);
    },1500)
}

getUsuario(10, (usuario)=>{
    console.log(usuario.id)
    //Aqui no use toUppperCase
    // console.log(usuario.nombre.toUppperCase());
    console.log(usuario.nombre);
});


const getchica = (ids, callback2)=>{
    const woman = {
        ids,
        nombre: 'Sofy'
    }

    setTimeout(()=>{
        callback2(woman)
    },1500)
}

// console.log(getchica(21))
getchica(21, (woman)=>{
    console.log(woman.ids);
    console.log(woman.nombre.toUpperCase());
});


const getHeroes = (idx, callback3)=>{

    const heroe = {
        idx,
        nombre:'gambito',
    }

       setTimeout(() => {
        callback3(heroe)
       },1500);
    }

    getHeroes(6,(heroe)=>{
        console.log(heroe.idx);
        console.log(heroe.nombre);
    });