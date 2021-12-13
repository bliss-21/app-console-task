const Tarea = require("./tarea");

class Tareas {

    _listado = {};

    construtor() {

        this._listado = {};
    }

    creaTarea( desc = ''){

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }


    
}


module.exports = Tareas;