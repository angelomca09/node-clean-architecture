const ServicoBancoDeDadosEmMemoria = require("../frameworks/persistance/inMemory/ServicoBancoDeDadosEmMemoria");

module.exports = (() => {
    return {
        ServicoBancoDeDados: new ServicoBancoDeDadosEmMemoria(),
    }
})()