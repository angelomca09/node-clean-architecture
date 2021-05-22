const express = require("express");
const UsuarioController = require("../../../controllers/usuarios/UsuariosController");

const usuariosRouter = (dependencies) => {
  const router = express.Router();

  const controller = UsuarioController(dependencies);

  router.route("/").get(controller.getAllUsuarios).post(controller.addUsuario);
  router.route("/:userId").get(controller.getUsuario);

  return router;
};

module.exports = usuariosRouter;