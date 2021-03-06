const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push (tarea);
        });

        return listado;
    }

    construtor() {

        this._listado = {};
    }

    borrarTarea( id = '') {
        if ( this._listado[id] ) {
            delete this._listado[id];
        }
    }

    cargarTareasFromArray( tareas = [] ) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }

    creaTarea( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {
        let contador = 1;
        console.log();
        this.listadoArr.forEach( t => {
            console.log(`${ String(contador).green }. ${t.desc} :: ${t.completadoEn === null ? 'Pendiente'.red:'Completado'.green }` );
            contador += 1;
        });
    }

    listarPendientesCompletadas( completadas = true) {

        let contador = 0;

        this.listadoArr.forEach(  tarea => {

            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green :'Pendiente'.red ;

            if (completadas) {
                if (completadoEn) {
                    contador += 1;
                    console.log(`${ contador + '.'.green } ${ desc } :: ${ completadoEn.green }`);    
                }
            } else {
                if (!completadoEn) {
                    contador += 1;
                    console.log(`${ contador + '.'.green } ${ desc } :: ${ estado }`);    
                }
            }

        } );

    }

    toggleCompletadas( ids = [] ){

        ids.forEach( id => {
            const tarea = this._listado[id];
            if ( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString()
            }
        });

        this.listadoArr.forEach( tarea => {
            //si en mi arregla existe tarea.id
            if ( !ids.includes( tarea.id )){
                this._listado[tarea.id].completadoEn = null;

            }
        })

    }


}

module.exports = Tareas;