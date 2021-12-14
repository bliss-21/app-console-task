require('colors');

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
const { 
    inquirerMenu, 
    pausa, 
    leerInput, 
    listadoTareasBorrar,
    confirmar,
} = require('./helpers/inquirer');
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
                if (id !== '0') {
                    
                    const ok = await confirmar('¿Está Seguro?');
                    if ( ok ) {
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }

                }


                
                break;    

            case '0':

                opt = '0';
                break;

            default:
                break;
        }


        guardarDb(tareas.listadoArr);

        await pausa();

    } while (opt !== '0');

 
}

main();