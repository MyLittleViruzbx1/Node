const { v4: uudiv4} = require('uuid')


class Tarea{

    id = '';
    desc = '';
    completadoEn = null;

    constructor(desc) {
        this.desc = uudiv4();
        this.desc = desc;
        this.completadoEn = null;
    }

}

module.exports = Tarea;