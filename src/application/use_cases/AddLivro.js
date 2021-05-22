const Livro = require("../../entities/Livro");

module.exports = (RepoLivro) => {
  async function Execute(titulo, preco, animacao, realidadeAumentada) {
    const livro = await RepoLivro.getByTitulo(titulo);

    //Validação de Campos Vazios
    if (
      !titulo ||
      !preco ||
      animacao === undefined ||
      realidadeAumentada === undefined
    ) {
      throw new Error("Falha na validação");
    }

    //Verifica se existe livro com o titulo
    if (livro) {
      throw new Error("Título de livro já existente!");
    }

    // Cria o objeto do novo Livro
    let novoLivro = new Livro(titulo, preco, animacao, realidadeAumentada);

    // Persiste novo Livro
    novoLivro = await RepoLivro.add(novoLivro);

    return "Livro inserido com sucesso";
  }

  return {
    Execute,
  };
};
