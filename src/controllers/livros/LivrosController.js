const AddLivro = require("../../application/use_cases/AddLivro");
const GetAllLivros = require("../../application/use_cases/GetAllLivros");
const GetLivro = require("../../application/use_cases/GetLivro");

module.exports = (dependencies) => {
  const { livroRepository } = dependencies.ServicoBancoDeDados;

  const addLivro = (req, res, next) => {
    const AddLivroCommand = AddLivro(livroRepository);

    const { titulo, preco, animacao, realidadeAumentada } = req.body;

    AddLivroCommand.Execute(titulo, preco, animacao, realidadeAumentada).then(
      (response) => {
        res.json(response);
      },
      (err) => {
        next(err);
      }
    );
  };

  const getAllLivros = (req, res, next) => {
    const GetAllLivrosQuery = GetAllLivros(livroRepository);

    GetAllLivrosQuery.Execute().then(
      (livros) => {
        res.json(livros);
      },
      (err) => {
        next(err);
      }
    );
  };

  const getLivro = (req, res, next) => {
    const GetLivroQuery = GetLivro(livroRepository);

    GetLivroQuery.Execute(req.params.livroId).then(
      (livro) => {
        res.json(livro);
      },
      (err) => {
        next(err);
      }
    );
  };

  return {
    addLivro,
    getAllLivros,
    getLivro,
  };
};
