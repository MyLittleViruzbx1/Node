/**
 * _listado
 * 
 *   {'uuid-123123213-12321312-: {id:1, desc:asdfasd,completadoEn:432156}}
 *
 */

const Tarea = require("./tarea");


class Tareas {

    _listado = {};

    constructor(){
        this._listado = {}
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id]
    }
}

module.exports = Tareas;