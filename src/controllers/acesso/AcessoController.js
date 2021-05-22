const GetLivrosPremium = require("../../application/use_cases/GetLivrosPremium");

module.exports = (dependencies) => {
  const { livroRepository } = dependencies.ServicoBancoDeDados;

  const getLivrosPremium = (req, res, next) => {
    const GetLivrosPremiumQuery = GetLivrosPremium(livroRepository);

    GetLivrosPremiumQuery.Execute().then(
      (livros) => {
        res.json(livros);
      },
      (err) => {
        next(err);
      }
    );
  };

  const getConteudoVIP = (req, res, next) => {
      res.send("Conteudo ainda não implementado...")
  }

  return {
    getLivrosPremium,
    getConteudoVIP
  };
};
