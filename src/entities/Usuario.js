module.exports = class Usuario {
  constructor(login, senha, plano, moedas) {
    this.id = null;
    this.login = login;
    this.senha = senha;
    this.plano = plano;
    this.moedas = moedas;
  }
};
