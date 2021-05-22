const AddUsuario = require("../../application/use_cases/AddUsuario");
const GetAllUsuarios = require("../../application/use_cases/GetAllUsuarios");
const GetUsuario = require("../../application/use_cases/GetUsuario");

module.exports = (dependencies) => {
  const { userRepository } = dependencies.ServicoBancoDeDados;

  const addUsuario = (req, res, next) => {
    const AddusuarioCommand = AddUsuario(userRepository);

    const { login, senha, plano, moedas } = req.body;

    AddusuarioCommand.Execute(login, senha, plano, moedas).then(
      (response) => {
        res.json(response);
      },
      (err) => {
        next(err);
      }
    );
  };

  const getAllUsuarios = (req, res, next) => {
    const GetAllUsuariosQuery = GetAllUsuarios(userRepository);

    GetAllUsuariosQuery.Execute().then(
      (usuarios) => {
        res.json(usuarios);
      },
      (err) => {
        next(err);
      }
    );
  };

  const getUsuario = (req, res, next) => {
    const GetUsuarioQuery = GetUsuario(userRepository);

    GetUsuarioQuery.Execute(req.params.userId).then(
      (usuario) => {
        res.json(usuario);
      },
      (err) => {
        next(err);
      }
    );
  };

  return {
    addUsuario,
    getAllUsuarios,
    getUsuario,
  };
};
