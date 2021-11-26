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