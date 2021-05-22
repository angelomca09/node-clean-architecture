const Usuario = require("../../entities/Usuario");

module.exports = (RepoUsuario) => {
  async function Execute(login, senha, plano, moedas) {
    const usuario = await RepoUsuario.getByLogin(login);

    //Validação de Campos Vazios
    if (!login || !senha || !plano || !moedas) {
      throw new Error("Falha na validação");
    }

    //Verifica se existe usuario com o login
    if (usuario) {
      throw new Error("Login de usuário já existente!");
    }

    // Cria o objeto do novo Usuário
    let novoUsuario = new Usuario(login, senha, plano, moedas);

    // Persiste novo Usuário
    novoUsuario = await RepoUsuario.add(novoUsuario);

    return "Usuário inserido com sucesso";
  }

  return {
    Execute,
  };
};
