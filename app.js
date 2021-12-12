require('colors');

const {mostrarMenu, pausa} = require('./helpers/mensajes')
console.clear()

const main = async() => {

    let opt = '';

    do {

        opt = await mostrarMenu();

        await pausa();

    } while (opt !== '0');

 
}

main();