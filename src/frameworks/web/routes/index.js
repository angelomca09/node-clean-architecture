const express = require("express");
const usuarios = require("./usuarios");
const livros = require("./livros");

const apiRouter = (dependencies) => {
  const routes = express.Router();

  const usuariosRouter = usuarios(dependencies);
  const livrosRouter = livros(dependencies);

  routes.use("/usuarios", usuariosRouter);
  routes.use("/livros", livrosRouter);

  return routes;
};

module.exports = apiRouter;
