const { throws } = require("assert");
const fs = require("fs");
const colors = require('colors');

/*
    Se sintetisa con la el metodo
    fs.writeFileSync es mas corto.
    Creamos nuestra función crearArchivo

    La convertimos en una funcion ASYNC 
    para tener el control de mi promesa
    en si el ASYNC Retorna un Reject.

    Pero además podemos tener un mejor
    control de nuestra promeso en cuanto a 
    el resolve, reject. Esto es un try, catch

*/

const crearArchivo = async( base=5, listar=false, hasta=10 ) =>{

    try {
        let salida = ''
        let consola = ''

        for(let i = 1; i <= hasta; i++ ){

            salida +=`${i} x ${base} = ${base*i}\n`
            consola +=`${i} ${'x'.red} ${base} ${'='.red} ${base*i}\n`
        }

        if( listar ){
            console.clear()
            console.log('======================='.red)
            console.log('Tabla del:'.red ,base)
            console.log('======================='.red)
            console.log(consola)
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida )
        return (`tabla-${base}.txt`)
    } catch (err) {
        throw err
    }

}

/*
    Para exportar esta funcion en Node 
*/
module.exports = {
    // Se puede sintetizar
    //crearArchivo:crearArchivo
    crearArchivo
}