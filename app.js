require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear()

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    do {

        opt = await inquirerMenu();
        
        
        switch (opt) {
            case '1':

                const desc = await leerInput('Descripción: ');
                tareas.creaTarea( desc );

                break;

            case '2':

                console.log(tareas._listado);

                break;

            case '3':

                break;

            case '4':

                break;

            case '5':

                break;

            case '6':

                break;    

            case '0':

                opt = '0';
                break;

            default:
                break;
        }

        //tareas._listado[tarea.id] = tarea;

        //console.log(tareas);

        await pausa();

    } while (opt !== '0');

 
}

main();