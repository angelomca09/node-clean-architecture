const ServicoBancoDeDados = require('../../../application/contracts/ServicoBancoDeDados');
const RepoUsuarioEmMemoria = require('./RepoUsuarioEmMemoria');
const Usuario = require('../../../entities/Usuario');

module.exports = class ServicoBancoDeDadosEmMemoria extends ServicoBancoDeDados {
    constructor() {
        super();
        this.userRepository = new RepoUsuarioEmMemoria();
    }

    async initDatabase() {
        this.seedData();
    }

    async seedData() {
        let amostraUsuario = new Usuario("angelomca", "123", 1, 20);

        amostraUsuario = await this.userRepository.add(amostraUsuario);
    }
};
