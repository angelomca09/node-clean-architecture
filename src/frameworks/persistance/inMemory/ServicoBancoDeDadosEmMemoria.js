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
    await this.userRepository.add(new Usuario("angelomca", "123", 1, 20));
    await this.userRepository.add(new Usuario("g_kzu", "456", 3, 250));
    await this.userRepository.add(new Usuario("fepa", "789", 2, 100));

    await this.livroRepository.add(new Livro("Capitães da Areia", 30, true, false));
    await this.livroRepository.add(new Livro("A Vaca Voadora", 10, false, false));
    await this.livroRepository.add(new Livro("O Alienista", 15, false, true));
    await this.livroRepository.add(new Livro("Harry Potter: A Pedra Filosofal", 35, true, true));
    await this.livroRepository.add(new Livro("The Witcher: O Ultimo Desejo", 35, true, true));
  }
};
