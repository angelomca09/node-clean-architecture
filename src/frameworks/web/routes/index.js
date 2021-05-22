const express = require("express");
const usuarios = require("./usuarios");
const livros = require("./livros");
const acesso = require("./acesso");

const apiRouter = (dependencies) => {
  const routes = express.Router();

  const usuariosRouter = usuarios(dependencies);
  const livrosRouter = livros(dependencies);
  const acessoRouter = acesso(dependencies);

  routes.use("/usuarios", usuariosRouter);
  routes.use("/livros", livrosRouter);
  routes.use("/acesso", acessoRouter);

  return routes;
};

module.exports = apiRouter;
