const RepoLivro = require("../../../application/contracts/RepoLivro");

module.exports = class RepoLivroEmMemoria extends RepoLivro {
  constructor() {
    super();
    this.livros = [];
    this.currentId = 0;
  }

  async add(InstanciaLivro) {
    try {
      this.currentId = this.currentId + 1;
      InstanciaLivro.id = this.currentId;
      this.livros.push(InstanciaLivro);
    } catch (error) {
      throw new Error("Erro ao criar livro");
    }

    return InstanciaLivro;
  }

  async update(InstanciaLivro) {
    let livro;
    try {
      livro = this.livros.find((x) => x.id === InstanciaLivro.id);
      if (livro) {
        Object.assign(livro, { InstanciaLivro });
      }
    } catch (error) {
      throw new Error("Erro ao editar livro");
    }

    return livro;
  }

  async delete(IdLivro) {
    try {
      const livroIndex = this.livros.findIndex((x) => x.id === IdLivro);
      if (livroIndex !== -1) {
        this.livros.splice(livroIndex, 1);
      }
    } catch (error) {
      throw new Error("Erro a deletar livro");
    }

    return true;
  }

  async getById(IdLivro) {
    let livro;
    try {
      const id = parseInt(IdLivro);
      livro = this.livros.find((x) => x.id === id);
    } catch (err) {
      throw new Error("Erro ao buscar livro por Id");
    }

    return livro;
  }

  async getByTitulo(titulo) {
    let livro;
    try {
      livro = this.livros.find((x) => x.titulo === titulo);
    } catch (err) {
      throw new Error("Erro ao buscar livro por Titulo");
    }

    return livro;
  }

  async getLivrosPremium() {
    let livros = [];
    try {
      livros = this.livros.filter((x) => x.animacao || x.realidadeAumentada);
    } catch (err) {
      throw new Error("Erro ao buscar livros de acesso Premium");
    }
    return livros;
  }

  async getAll() {
    return this.livros;
  }
};
