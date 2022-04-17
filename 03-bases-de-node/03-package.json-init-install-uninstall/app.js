/* 
    Importamos nustra funcion 
    crearArchivo a traves de una desestructuracion

    
*/



const { crearArchivo } = require('./helpers/multiplicar')
// let base = 3

/*
    PASOS PARA CONFIGURAR EL PROYECTO PARA QUE SE PUEDA INSTALAR PAQUETES
    1. Vamos a crear nuestro packaje.json
    2. Para esto vamos a escribir:
        - node init -Y  // esto nos sirve para crear el archivo con sus valores por defecto
        - node init // nos ira preguntando la configuración del proyecto
        - Instalamos la dependencia https://www.npmjs.com/package/colors
        - para instalar un paquete npm install colors

        - Tambien podemos hacer una instalación sólo de desarrollo Ejemplo:
        - npm install nodemon --save-dev

        - Para instalar una version de un paquete ejemplo:
        - npm i colors@1.0.0
        - Para actualizar las dependencias
        - npm update // Ojo no funciona
*/

// console.log(process.argv)
const [ , , arg3='base=5'] = process.argv
const [, base=5 ] = arg3.split('=')
console.log('Salida de base:', base)


crearArchivo(base)
            .then( nombreArchivo => console.log(nombreArchivo,'creada') )
            .catch( err => console.log(err))




