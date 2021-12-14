require('colors');

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput, listadoTareasBorrar } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

console.clear()

const main = async() => {

    let opt = '';
    const tareas = new Tareas();

    const tareaDB = leerDb();

    if (tareaDB) {
        tareas.cargarTareasFromArray(tareaDB);
    }


    do {

        //imprime el menu
        opt = await inquirerMenu();
   
        switch (opt) {
            case '1':

                const desc = await leerInput('Descripción: ');
                tareas.creaTarea( desc );

                break;

            case '2':

                tareas.listadoCompleto(true);

                break;

            case '3':

                tareas.listarPendientesCompletadas(true);
                break;

            case '4':
                tareas.listarPendientesCompletadas(false);
                break;

            case '5':

                break;

            case '6':
                const id = await listadoTareasBorrar( tareas.listadoArr );
                console.log(id)
                break;    

            case '0':

                opt = '0';
                break;

            default:
                break;
        }


        guardarDb(tareas.listadoArr);

        //tareas._listado[tarea.id] = tarea;

        //console.log(tareas);

        await pausa();

    } while (opt !== '0');

 
}

main();