const fs = require("fs");

/*
    Una de las bondades de Node
    es que podemos tener el control
    de nuestro backend en el podemos 

    Una cosa genial que tienen Node es que tenemos 
    control de el backEnd en donde lo estamos ejecutando.

    En pocas palabras, nosotros podríamos grabar archivos, 
    mover archivos, eliminar directorios, hacer muchas cosas 
    en nuestra computadora o en este caso el servidor donde 
    está corriendo la aplicación de node.

    En este caso, lo que desamos es imprimir por lo menos la
    tabla de multiplicar y grabarla en un archivo de texto que
    esté en la misma dirección de mi aplicación.

    Cómo hacemos esto?
    Primero necesitamos acceder al "File Sistem" de JavaScript

    https://nodejs.org/dist/latest-v16.x/docs/api/fs.html

    En la lista de metodos existe uno que se llama
        -fs.WriteFile(file,data[,options],callback)
        -fs.WriteFileSync(file,data[,options])

    En la sgte URL tenemos la documentación de fs.WriteFile(file,data[,options],callback)
    https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#fswritefilefile-data-options-callback


    import { writeFile } from 'fs';
    import { Buffer } from 'buffer';

    const data = new Uint8Array(Buffer.from('Hello Node.js'));
    writeFile('message.txt', data, (err) => {
    if (err) throw err;
        console.log('The file has been saved!');
    });


    */

console.clear()
console.log('=======================')
console.log('Tabla del:5')
console.log('=======================')

let base = 3
let salida = ''

for(let i = 1; i <= 10; i++ ){
    salida +=`${i}x${base} = ${base*i}\n`
}

console.log(salida)

fs.writeFile(`tabla-${base}.txt`, salida, (err)=>{
    if(err) throw err;
    console.log(`tabla-${base}.txt creada`)
})


