/*
    Función que se ejecuta despues 
    en el tiempo.
    
    Ejemplo de callback es un setTime()
    Esta se ejecuta cuando la funcion setTimeout() indica a que se ejecute
    una funcion en un cierto tiempo de tiempo en este caso un segundo despues
    tiempo.

    setTimeout( () => {
        console.log('Hola Mundo');
    } , 1000 );
*/

/*
    A continuacion creamos una funcion
    llamada getUsuarioByID esta recibe 
    dos parametros uno el "ID" y el otro
    es el llamado "callback" o sea una función
    en el parametro 'callback" este va sacar 
    la informacion desde "const user" nuestro
    objeto. Pero el setTimeout va a disparar
    el callback despues de 1.5 segundo.
*/
const getUsuarioByID = ( id, callback ) => {

    console.log('Salida--->',callback)

    const user = {
        id,
        nombre: 'Alejandro'
    }

    setTimeout( () => {
        /*
        Nuestro callback recibe
        como parametro el "const user"
        */
        callback(user)
    }, 1500 )

}


getUsuarioByID( 10, 


    ( usuario ) => {
        console.log( usuario.id );
        console.log( usuario.nombre.toUpperCase() );
    }

);



