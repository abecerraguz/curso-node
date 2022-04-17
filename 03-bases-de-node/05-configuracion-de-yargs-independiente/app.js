const { crearArchivo } = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs')

console.clear()
// console.log('Con yargs-->', argv)

crearArchivo( argv.base, argv.l, argv.h )
            .then( nombreArchivo => console.log(nombreArchivo.rainbow,'creada') )
            .catch( err => console.log(err))

