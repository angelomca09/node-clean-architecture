const ServicoBancoDeDados = require("../../../application/contracts/ServicoBancoDeDados");
const RepoUsuarioEmMemoria = require("./RepoUsuarioEmMemoria");
const RepoLivroEmMemoria = require("./RepoLivroEmMemoria");
const Usuario = require("../../../entities/Usuario");
const Livro = require("../../../entities/Livro");

module.exports = class ServicoBancoDeDadosEmMemoria extends (
  ServicoBancoDeDados
) {
  constructor() {
    super();
    this.userRepository = new RepoUsuarioEmMemoria();
    this.livroRepository = new RepoLivroEmMemoria();
  }

  async initDatabase() {
    this.seedData();
  }

  async seedData() {
    let amostraUsuario = new Usuario("angelomca", "123", 1, 20);

    amostraUsuario = await this.userRepository.add(amostraUsuario);

    let amostraLivro = new Livro("Harry Potter", 30, false, false);

    amostraLivro = await this.livroRepository.add(amostraLivro);
  }
};
