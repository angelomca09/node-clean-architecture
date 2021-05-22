const express = require("express");
const AcessoController = require("../../../controllers/acesso/AcessoController");
const Autorizacao = require("../../../middlewares/AutorizacaoMiddleware");

const acessoRouter = (dependencies) => {
  const router = express.Router();

  const controller = AcessoController(dependencies);
  const auth = Autorizacao(dependencies);

  router
    .route("/premium")
    .get(auth.verificaAutorizacaoPremium, controller.getLivrosPremium);
  router
    .route("/VIP")
    .get(auth.verificaAutorizacaoVIP, controller.getConteudoVIP);

  return router;
};

module.exports = acessoRouter;
