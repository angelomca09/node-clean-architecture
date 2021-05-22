const express = require("express");
const usuarios = require("./usuarios");

const apiRouter = (dependencies) => {
  const routes = express.Router();

  const usuariosRouter = usuarios(dependencies);

  routes.use("/usuarios", usuariosRouter);

  return routes;
};

module.exports = apiRouter;
